import { AddUser } from "./components/users/AddUser";
import { useState } from 'react';
import { UserList } from "./components/users/UserList";


function App() {

  const [users, setUsers] = useState([])

  const addUserHandler = (name, age) =>{
    setUsers([...users, {name, age, id: Math.random().toString()}])
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user=>user.id !== id))
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users = {users} deleteUser={deleteUser}/>
    </div>
  );
}

export default App;
