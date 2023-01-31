import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({ showModal, setLogin, setSignup }) => {
  const navigate = useNavigate();
  const onSignUpSubmitHandler = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const password = e.target[2].value;
    const email = e.target[1].value;

    console.log(name);
    console.log(password);
    console.log(email);

    //create user
    try {
      const info = await axios.post('http://localhost:3000/user/create', {
        name,
        password,
        email,
      });
      if (info.data === 'User was successfully created') {
        //setLogin true
        setLogin(true);
        //setSignup false;
        setSignup(false);
        //send them to the login page
        showModal();
      }
      console.log(`info====`, info);
    } catch (error) {
      console.log(`Error in Signup Form`, error);
    }
  };

  return (
    <div>
      <form onSubmit={onSignUpSubmitHandler}>
        <label htmlFor="fullName">
          Full Name:
          <input name="fullName" type="text" placeholder="Enter Full Name" />
        </label>
        <label htmlFor="email">
          Email Address:
          <input name="email" type="text" placeholder="valid@email.com" />
        </label>
        {/* <label htmlFor="username">
          Username:
          <input name="username" type="text" placeholder="Choose Username" />
        </label> */}
        <label htmlFor="password">
          Password:
          <input name="password" type="text" placeholder="Choose Password" />
        </label>
        <label htmlFor="confirmPass">
          Confirm Password:
          <input
            name="confirmPass"
            type="text"
            placeholder="Confirm Password"
          />
        </label>
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default SignUpForm;
