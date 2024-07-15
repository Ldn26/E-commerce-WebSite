import { create } from "zustand";
import { currentCart } from "@wix/ecom";
import { WixClient } from "../context/WixContext";
type CartState = {
  cart: currentCart.Cart;
  isLoading: boolean;
  counter: number;
  getcart: (wixClient: WixClient) => void;
  removeItem: (wixClient: WixClient, itemsId: string) => void;
  addItem: (
    wixclient: WixClient,
    productId: string,
    variantId: string,
    quantity: number
  ) => void;
};
export const useCartStore = create<CartState>((set) => ({
  cart: [],
  isLoading: true,
  counter: 0,
  removeItem: async (wixClient, itemId) => {
    set((state) => ({ ...state, isLoading: true }));
    const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
      [itemId]
    );
    set({
      cart: response.cart,
      counter: response.cart?.lineItems.length,
      isLoading: false,
    });
  },
  addItem: async (wixClient, productId, variantId, quantity) => {
    set((state) => ({ ...state, isLoading: true }));
    const response = await wixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference: {
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
            catalogItemId: productId,
            ...(variantId && { options: { variantId } }),
          },
          quantity: quantity,
        },
      ],
    });

    set({
      cart: response.cart,
      counter: response.cart?.lineItems.length,
      isLoading: false,
    });
  },
  getcart: async (wixClient) => {
    try {
      const cart = await wixClient.currentCart.getCurrentCart();
      set({
        cart: cart || [],
        isLoading: false,
        counter: cart?.lineItems.length || 0,
      });
    } catch (err) {
      set((prev) => ({ ...prev, isLoading: false }));
    }
  },
}));
