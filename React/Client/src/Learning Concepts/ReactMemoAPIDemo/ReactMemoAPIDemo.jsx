import Header from "./components/Header/Header";
import ApiSelector from "./components/ApiSelector/ApiSelector";
import SearchBar from "./components/SearchBar/SearchBar";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";

import useUsers from "./hooks/useUsers";

import "./styles/ReactMemoAPIDemo.css";

function ReactMemoAPIDemo() {

  const {
    users,

    loading,

    error,

    searchTerm,

    setSearchTerm,

    apiClient,

    setApiClient,

    editingUser,

    setEditingUser,

    addUser,

    editUser,

    removeUser,

    updatePartialUser,

  } = useUsers();

  return (
    <div className="container">

      <Header />

      <ApiSelector
        apiClient={apiClient}
        setApiClient={setApiClient}
      />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <UserForm
        addUser={addUser}
        editUser={editUser}
        editingUser={editingUser}
      />

      {loading && <Loading />}

      {error && <Error message={error} />}

      {!loading && !error && (
        <UserList
          users={users}
          setEditingUser={setEditingUser}
          removeUser={removeUser}
          updatePartialUser={updatePartialUser}
        />
      )}

    </div>
  );
}

export default ReactMemoAPIDemo;