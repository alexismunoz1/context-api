import { useState } from "react";
import { useGlobalState } from "../../context/useGlobalState";

export const TransactionForm = () => {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState<string>();
  const [amount, setAmount] = useState<number>(0);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount,
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block w-full mb-2'
          type='text'
          placeholder='Enter description'
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block w-full mb-2'
          type='number'
          step='0.01'
          placeholder='00.00'
          onChange={(e) => setAmount(+e.target.value)}
        />
        <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block w-full mb-2'>
          Add transaction
        </button>
      </form>
    </>
  );
};
