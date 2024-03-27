import React, { useContext, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import AddExpenses from "./AddExpenses";
import { BudgetContext } from "../context/BudgetContext";

const ExpenseList = () => {
  const { expenses } = useContext(BudgetContext);
  const [sortOrder, setSortOrder] = useState("asce");

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asce" ? "desc" : "asce");
  };

  const sortByPrice = () => {
    toggleSortOrder();
  };

  const sortedExpenses = [...expenses].sort((a, b) => {
    return sortOrder === "asce" ? a.cost - b.cost : b.cost - a.cost;
  });
  return (
    <>
      <div className="m-16">
        <div className="flex gap-28">
          <h2 className="text-4xl font-semibold underline">Expenses :</h2>
          <button onClick={sortByPrice} className="bg-teal-200 rounded-2xl p-4">
            Sort By Price {sortOrder === "asce" ? "▲" : "▼"}
          </button>
        </div>
        <ul className="">
          {sortedExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mt-8 underline">
          Add Expenses :
        </h2>
        <AddExpenses />
      </div>
    </>
  );
};

export default ExpenseList;
