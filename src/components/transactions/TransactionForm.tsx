import { useState } from "react";
import { useGetGlobalState } from "../../context/useGetGlobalState";

export const TransactionForm = () => {
  const { addTransaction } = useGetGlobalState();
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
          type='text'
          placeholder='Enter description'
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type='number'
          step='0.01'
          placeholder='00.00'
          onChange={(e) => setAmount(+e.target.value)}
        />
        <button>Add transaction</button>
      </form>
    </>
  );
};
