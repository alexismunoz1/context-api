import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

interface Props {
  children: React.ReactNode;
}

const initialState = {
  transactions: [],
};

export const Context = createContext({});

export const GlobalProvider = ({ children }: Props) => {
  const [state] = useReducer(AppReducer, initialState);

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
      }}>
      {children}
    </Context.Provider>
  );
};
