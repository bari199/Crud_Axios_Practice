//import react library
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//https://698eba51aded595c2532943c.mockapi.io/Crud

function Create() {
  //state decralation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    e.preventDefault();
    axios
      .post('https://698ec424aded595c2532b6b0.mockapi.io/cruds', {
        name: name,
        email: email,
        age: age,
        password: password,
      })
      .then(() => {
        alert("Data insertaed");
        navigate("/");
      })
      .catch((err) => {
        alert("Error" + err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Crud Create</h1>
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
          <label htmlFor="Age">Age</label>
          <input
            type="text"
            value={age}
            placeholder="Enter Your Age"
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="text"
            value={password}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}

export default Create;
