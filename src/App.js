import React, { useState } from "react";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Excuse from "./components/excuse/Excuse";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Brad Simmons",
      excuse:
        "Remember when you were young you shone like the sun. Shine on you",
      count: 3,
    },
    {
      id: 2,
      name: "Brad Simmons",
      excuse:
        "Remember when you were young you shone like the sun. Shine on you",
      count: 1,
    },
  ]);

  const addUser = (name, excuse) => {
    const newUser = {
      id: users.length + 1,
      name: name,
      excuse: excuse,
      count: 0,
    };
    setUsers([...users, newUser]);
  };

  const increaseCount = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          count: user.count + 1,
        };
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  return (
    <>
      <Header addUser={addUser} users={users} />
      <Excuse />
      <List users={users} increaseCount={increaseCount} />
    </>
  );
}

export default App;
