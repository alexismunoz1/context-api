import { useContext } from "react";
import { Context } from "./GlobalState";

export const useGetGlobalState = () => useContext(Context);
