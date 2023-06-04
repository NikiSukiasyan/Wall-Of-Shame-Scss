import React from "react";
import "./List.scss";

function List({ users, increaseCount }) {
  const ChangeCount = (userId) => {
    increaseCount(userId);
  };

  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="user-container">
          <p>{user.name}</p>
          <span>{user.excuse}</span>
          <p className="count">{user.count}</p>
          <button onClick={() => ChangeCount(user.id)}>Increase</button>
        </div>
      ))}
    </>
  );
}

export default List;
