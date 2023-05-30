import { useGlobalState } from "../context/useGlobalState";

export const Balance = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h3>Your Balance</h3>
      <h1>${total}</h1>
    </>
  );
};
