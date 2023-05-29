import { useGetGlobalState } from "../../context/useGetGlobalState";

export const TransactionsList = () => {
  const { transactions, deleteTransaction } = useGetGlobalState();

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
          <button onClick={() => deleteTransaction(transaction)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
