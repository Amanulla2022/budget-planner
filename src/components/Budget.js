import React, { useContext, useState } from "react";
import { BudgetContext } from "./../context/BudgetContext";

const Budget = () => {
  const { budget, expenses, dispatch } = useContext(BudgetContext);
  const [newBudget, setNewBudget] = useState("");
  const [showInput, setShowInput] = useState(false);

  const totalSpent = expenses.reduce((total, item) => {
    return (total += parseInt(item.cost));
  }, 0);

  const remaining = budget - totalSpent;
  const someColor = remaining >= 0 ? "bg-green-600" : "bg-red-600";
  const sameColor = totalSpent > budget ? "bg-red-600" : "bg-green-600";

  const budgetChange = (e) => {
    e.preventDefault();
    const updatedBudget = parseInt(newBudget);
    if (!isNaN(updatedBudget)) {
      dispatch({ type: "SET_BUDGET", payload: updatedBudget });
    }
    setNewBudget("");
    setShowInput(false);
  };

  return (
    <div className="flex justify-around mt-4">
      <div className="p-4 rounded-lg text-white font-semibold bg-purple-600">
        <span>Budget: ₹{budget}</span>
        {showInput ? (
          <form onSubmit={budgetChange}>
            <input
              type="number"
              value={newBudget}
              onChange={(e) => setNewBudget(e.target.value)}
              placeholder="New Budget"
              className="ml-4 border-2 p-2 rounded-lg text-purple-900"
            />
            <button type="submit" className="ml-2 rounded-full bg-blue-500 p-2">
              Modify Budget
            </button>
          </form>
        ) : (
          <button
            onClick={() => setShowInput(true)}
            className="ml-4 rounded-full bg-blue-500 p-2"
          >
            Modify Budget
          </button>
        )}
      </div>
      <div className={`p-4 rounded-lg text-white font-semibold ${someColor}`}>
        <span>Remaining: ₹{remaining}</span>
      </div>
      <div className={`p-4 rounded-lg text-white font-semibold ${sameColor}`}>
        <span>Spent so for: ₹{totalSpent}</span>
      </div>
    </div>
  );
};

export default Budget;
