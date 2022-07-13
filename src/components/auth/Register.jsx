import axios from "axios";
import React, { useState, useEffect } from "react";

export const Register = () => {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [firstname, setFirstname] = useState(" ");
  const [lastname, setLastname] = useState(" ");
  const [email, setEmail] = useState(" ");


  const handleSubmit = () => {
    const url =
      "https://peaceful-river-16673.herokuapp.com/account/api/register";
      
    const payload = {
      username: username,
      password: password,
      email:email,
      first_name: firstname,
      last_name: lastname
    };
   
   
    axios
    .post(`https://peaceful-river-16673.herokuapp.com/account/api/register`, payload)
    .then((res) => {
     console.log(res)
    })
    .catch((err) => console.log(err));
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
         <input
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="first name"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <button
        type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
          register
        </button>
      </form>
    </div>
  );
};
