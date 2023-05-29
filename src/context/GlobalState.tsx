import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

interface Props {
  children: React.ReactNode;
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
}

interface GlobalState {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (transaction: Transaction) => void;
}

const initialState = {
  transactions: [],
};

export const Context = createContext({} as GlobalState);

export const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log(state);

  const addTransaction = (transaction: Transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (transaction: Transaction) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}>
      {children}
    </Context.Provider>
  );
};
