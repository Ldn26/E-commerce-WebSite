 "use client"
import {useContext} from "react" 
import { WixClientContext } from "@/context/WixContext";
export const  useWixClient =()=>{
    return useContext(WixClientContext)
   } 