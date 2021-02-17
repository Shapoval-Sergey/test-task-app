import React from "react";

// import s from "./PrimaryBtn.module.scss";

export default function PrimaryBtn({
  text,
  isSubmitting,

  typeBtn,
  handleOnClick,
}) {
  return (
    <button type={typeBtn} disabled={isSubmitting} onClick={handleOnClick}>
      {text}
    </button>
  );
}
