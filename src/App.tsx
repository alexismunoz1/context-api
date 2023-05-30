import { GlobalProvider } from "./context/GlobalState";

import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { TransactionsList } from "./components/transactions/TransactionsList";
import { IncomeExpenses } from "./components/IncomeExpenses";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <IncomeExpenses />
      <Balance />
      <TransactionForm />
      <TransactionsList />
      <h1>Hello world</h1>
    </GlobalProvider>
  );
}

export default App;
