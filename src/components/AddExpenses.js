import React, { useState, useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenses = () => {
  const { dispatch } = useContext(BudgetContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState();

  const addExpense = (e) => {
    e.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: cost,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <form className="flex gap-8 mt-8" onSubmit={addExpense}>
      <div className="bg-slate-300 rounded-xl p-2">
        <label for="name">Name :</label>
        <input
          required="required"
          type="text"
          id="name"
          className="ml-2 border-2 "
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="bg-slate-300 rounded-xl p-2">
        <label for="cost">Cost: </label>
        <input
          required="required"
          type="number"
          id="cost"
          className="ml-2 border-2 "
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        ></input>
      </div>

      <div>
        <button
          type="submit"
          className="text-white rounded-full bg-blue-500 p-3"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddExpenses;
