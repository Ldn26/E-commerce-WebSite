"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
//import { currentCart } from "@wix/ecom";
import Cookies from "js-cookie";
import { createContext, ReactNode } from "react";
import { redirects } from "@wix/redirects";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");  /// get the refresh token from the Cookies

const wixClient = createClient({
  modules: {
    products,
    collections,
  //  currentCart,
    redirects,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID !,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export type WixClient = typeof wixClient;   // export the type for ts 

export const WixClientContext = createContext<WixClient>(wixClient);

export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  );
};
