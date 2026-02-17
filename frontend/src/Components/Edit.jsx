import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//https://698ec424aded595c2532b6b0.mockapi.io/cruds

function Edit() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setAge(localStorage.getItem("age"));
    setPassword(localStorage.getItem("password"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://698ec424aded595c2532b6b0.mockapi.io/cruds/${id}`, {
        name: name,
        email: email,
        age: age,
        password: password,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        conlose.log("err", err);
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div>
          <h1>Crud Edir Page</h1>
        </div>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            value={age}
            placeholder="Enter Your Age"
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            value={password}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default Edit;
