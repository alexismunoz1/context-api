import { useGetGlobalState } from "../context/useGetGlobalState";

export const Balance = () => {
  const { transactions } = useGetGlobalState();
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h3>Your Balance</h3>
      <h1>${total}</h1>
    </>
  );
};
