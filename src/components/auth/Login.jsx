import axios from "axios";
import React, { useState, useEffect } from "react";

export const Login = () => {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleSubmit = () => {
    const url =
      "https://peaceful-river-16673.herokuapp.com/api/token/";
      
    const payload = {
      username: username,
      password: password,
    };
   
    axios
    .post(`https://peaceful-river-16673.herokuapp.com/api/token/`, payload)
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
