import { createContext, useReducer } from "react";

const BudgetReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "EDIT_EXPENSE":
      const updatedExpenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          // Update the expense with the new name and cost
          return {
            ...expense,
            name: action.payload.name,
            cost: action.payload.cost,
          };
        }
        return expense;
      });

      return {
        ...state,
        expenses: updatedExpenses,
      };
    default:
      return state;
  }
};
const initialState = {
  budget: 2000,
  expenses: [],
};

export const BudgetContext = createContext();

export const BudgetProvider = (props) => {
  const [state, dispatch] = useReducer(BudgetReducer, initialState);

  return (
    <BudgetContext.Provider
      value={{ budget: state.budget, expenses: state.expenses, dispatch }}
    >
      {props.children}
    </BudgetContext.Provider>
  );
};
