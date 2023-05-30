import { useGlobalState } from "../../context/useGlobalState";
import { TransactionItem } from "./TransactionItem";

export const TransactionsList = () => {
  const { transactions } = useGlobalState();

  return (
    <>
      <h3 className='text-slate-300 text-xl font-bold block w-full'>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
