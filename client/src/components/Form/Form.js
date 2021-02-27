import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import userOperations from "../../redux/user/userOperations";

import s from "./Form.module.css";

export default function Form() {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(userOperations.updateUserEmail(email));
    },
    [dispatch, email],
  );

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
        <button
          type="submit"
          className={!email ? s.btn : s.inputChange}
        ></button>
      </form>
    </div>
  );
}
