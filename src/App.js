import "./App.css";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import { BudgetProvider } from "./context/BudgetContext";

function App() {
  return (
    <BudgetProvider>
      <div className="mt-8">
        <h1 className="text-3xl uppercase underline  text-center  text-teal-500 font-extrabold">
          Budget Planner
        </h1>

        <Budget />
        <ExpenseList />
      </div>
    </BudgetProvider>
  );
}

export default App;
