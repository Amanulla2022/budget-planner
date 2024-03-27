import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { BudgetContext } from "../context/BudgetContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(BudgetContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(props.name); // Initialize name with props.name
  const [cost, setCost] = useState(props.cost); // Initialize cost with props.cost

  const deleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);

    dispatch({
      type: "EDIT_EXPENSE",
      payload: { id: props.id, name, cost },
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset name and cost to their initial values
    setName(props.name);
    setCost(props.cost);
  };

  return (
    <li className="flex gap-16 p-4  mt-4">
      {isEditing ? (
        <div className="flex gap-4">
          <input
            type="text"
            value={name}
            className="border-2 p-2"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={cost}
            className="border-2 p-2"
            onChange={(e) => setCost(e.target.value)}
          />
          <div className="flex gap-6">
            <button
              className="bg-red-400 p-3 rounded-full"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-red-400 p-3 rounded-full"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <span className="text-white bg-purple-500 rounded-xl py-2 px-4">
              {props.name}
            </span>
          </div>
          <span className="bg-blue-500 text-white rounded-xl py-2 px-4">
            ₹{props.cost}
          </span>

          <MdDelete
            className="text-5xl cursor-pointer"
            onClick={deleteExpense}
          />
          <CiEdit
            className="text-5xl cursor-pointer text-purple-500"
            onClick={handleEdit}
          />
        </>
      )}
    </li>
  );
};

export default ExpenseItem;
