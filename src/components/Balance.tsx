import { useGetGlobalState } from "../context/useGetGlobalState";

export const Balance = () => {
  const data = useGetGlobalState();
  return (
    <>
      <div>Balance</div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};
