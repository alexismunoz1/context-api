import { useGlobalState } from "../../context/useGlobalState";

export const TransactionsList = () => {
  const { transactions, deleteTransaction } = useGlobalState();

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
