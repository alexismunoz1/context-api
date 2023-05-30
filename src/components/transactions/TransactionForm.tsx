import { useState } from "react";
import { useGlobalState } from "../../context/useGlobalState";

export const TransactionForm = () => {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount,
    });
    setDescription("");
    setAmount(0);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block w-full mb-2'
          type='text'
          placeholder='Enter description'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block w-full mb-2'
          type='number'
          step='0.01'
          placeholder='00.00'
          onChange={(e) => setAmount(+e.target.value)}
          value={amount}
        />
        <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block w-full mb-2'>
          Add transaction
        </button>
      </form>
    </>
  );
};
