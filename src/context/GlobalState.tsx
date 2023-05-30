import { createContext, useReducer, useEffect } from "react";
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

export const Context = createContext({} as GlobalState);

export const GlobalProvider = ({ children }: Props) => {
  const initialState = { transactions: [] };
  const getLocalStorageData = () => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : initialState;
  };

  const [state, dispatch] = useReducer(AppReducer, initialState, getLocalStorageData);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

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
