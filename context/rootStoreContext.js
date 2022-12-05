import { createContext, useContext } from "react";
import { rootStore } from "../stores/rootstore.js";

export const rootStoreContext = createContext(rootStore)

export const useStores = () => useContext(rootStoreContext)
