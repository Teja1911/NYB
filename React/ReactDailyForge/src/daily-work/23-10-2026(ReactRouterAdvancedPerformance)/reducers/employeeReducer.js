
export const initialEmployees = [
  {
    id: 1,
    name: "Ravi Kumar",
    email: "ravi@example.com",
    department: "IT",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@example.com",
    department: "HR",
  },
  {
    id: 3,
    name: "Arjun Rao",
    email: "arjun@example.com",
    department: "Finance",
  },
];

export default function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((employee) =>
        employee.id === action.payload.id
          ? action.payload
          : employee
      );
    case "SET":
        return action.payload;
    case "DELETE":
      return state.filter(
        (employee) => employee.id !== action.payload
      );

    default:
      return state;
  }
}
