import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import projectsOperations from "../../redux/projects/projectsOperations";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

import s from "./ProjectEditor.module.scss";

export default function Form({ onClose }) {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  // const token = useSelector(state => state.auth.token);

  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (email === "") {
        setErrorEmail(true);
        return;
      }

      dispatch(projectsOperations.addColaborators({ email }));

      onClose();
    },
    [dispatch, email, onClose],
  );

  const handleCanselingBtn = (e) => {
    // console.log(e);
    onClose();
  };

  return (
    <>
      <h2>Оставь почту:</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleChangeEmail}
          name="email"
          className={!errorEmail ? s.formInput : s.error}
        />
        <PrimaryBtn text={"Готово"} typeBtn={"submit"} />
        <p className={s.cansel} onClick={handleCanselingBtn}>
          Відміна
        </p>
      </form>
    </>
  );
}
