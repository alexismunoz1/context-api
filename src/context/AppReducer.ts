import { Transaction } from "./GlobalState";

export default (
  state: { transactions: Transaction[] },
  action: { type: string; payload: Transaction }
) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
