import React, { useState } from "react";
import "./Header.scss";

function Header({ addUser, users }) {
  const [name, setName] = useState("");
  const [excuse, setExcuse] = useState("");

  const ChangeName = (event) => {
    setName(event.target.value);
  };

  const ChangeExcuse = (event) => {
    setExcuse(event.target.value);
  };

  const handleCreateClick = () => {
    if (!name.trim() || !excuse.trim()) {
      return alert("გთხოვთ შეავსოთ ყველა ველი.");
    }

    addUser(name.trim(), excuse.trim());
    setName("");
    setExcuse("");
  };

  return (
    <div className="header-container">
      <h1>Wall of shame</h1>
      <span>{users.length} members</span>
      <div className="input-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={ChangeName}
        />
        <input
          type="text"
          placeholder="Excuse"
          value={excuse}
          onChange={ChangeExcuse}
        />
      </div>
      <button onClick={handleCreateClick}>Create</button>
    </div>
  );
}

export default Header;
