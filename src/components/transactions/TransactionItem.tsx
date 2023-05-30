import { Transaction } from "../../context/GlobalState";
import { useGlobalState } from "../../context/useGlobalState";

export const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center'>
      <p className='text-sm'>{transaction.description}</p>
      <span>${transaction.amount}</span>
      <button onClick={() => deleteTransaction(transaction)}>x</button>
    </li>
  );
};
