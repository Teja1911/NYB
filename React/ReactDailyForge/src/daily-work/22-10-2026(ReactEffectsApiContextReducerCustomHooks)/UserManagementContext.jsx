import {createContext,useContext,useEffect,useReducer,} from "react"
import userManagementReducer from "./userManagementReducer";
import useUsersApi from "./useUsersApi";
import {addUser,updateUser,deleteUser,} from "./userApi";
const UserManagementContext = createContext();
export function UserManagementProvider({ children }) {
  const {users: fetchedUsers,loading,error,} = useUsersApi();
  const [users, dispatch] = useReducer(userManagementReducer,[]);
  useEffect(() => {
    dispatch({
      type: "SET_USERS",
      payload: fetchedUsers,
    });
  }, [fetchedUsers]);
  async function createUser(user) {
    const savedUser = await addUser(user);
    dispatch({
      type: "ADD_USER",
      payload: { ...user, ...savedUser },
    });
  }
  async function editUser(user) {
    const savedUser = await updateUser(user);
    dispatch({
      type: "UPDATE_USER",
      payload: { ...user, ...savedUser },
    });
  }
  async function removeUser(id) {
    await deleteUser(id);
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  }
  return (
    <UserManagementContext.Provider
      value={{ users, loading, error, createUser, editUser, removeUser }}
    >
      {children}
    </UserManagementContext.Provider>
  );
}

export function useUserManagement() {
  return useContext(UserManagementContext);
}
