import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import userOperations from "../../redux/user/userOperations";

import s from "./Form.module.css";

export default function Form({ onClose }) {
  const [email, setEmail] = useState("");
  // const [errorEmail, setErrorEmail] = useState("");

  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (email === "") {
        // setErrorEmail(true);
        return;
      }

      dispatch(userOperations.addUserEmail({ email }));

      onClose();
    },
    [dispatch, email, onClose],
  );

  // const handleCanselingBtn = (e) => {
  //   // console.log(e);
  //   onClose();
  // };

  return (
    <div className={s.form}>
      <h2>Оставь почту:</h2>
      <form className={s.box} onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleChangeEmail}
          name="email"
          className={s.input}
        />
        <button type="submit" className={s.btn}></button>
      </form>
    </div>
  );
}
