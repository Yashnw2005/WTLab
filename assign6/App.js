import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data 😢");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div className="container">
      <h1>👨‍💻 Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <b>{user.name}</b>
            <br />
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
