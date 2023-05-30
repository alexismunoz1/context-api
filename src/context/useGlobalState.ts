import { useContext } from "react";
import { Context } from "./GlobalState";

export const useGlobalState = () => useContext(Context);
