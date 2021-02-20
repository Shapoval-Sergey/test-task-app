import React from "react";

import Shared from "../../components/Shared/Shared";
import Form from "../../components/Form/Form";
import { useSelector } from "react-redux";

import s from "./PageLoaded.module.css";

const storageName = "userData";

export default function PageLoaded() {
  const user = useSelector((state) => state.user.createNewUser);

  const data = JSON.parse(localStorage.getItem(storageName));
  if (!data) {
    localStorage.setItem(storageName, JSON.stringify(user));
  }

  return (
    <div className={s.page}>
      <div className={s.logo}></div>
      <Shared />
      <Form />
    </div>
  );
}
