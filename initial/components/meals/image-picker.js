"use client";

import { useRef } from "react";

import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();

  function handlePickerClick() {
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          id={name}
          name={name}
          ref={imageInput}
          accept="image/png, image/jpeg"
          type="file"
        />

        <button
        className={classes.button}
        type="button"
        onClick={handlePickerClick}
        >
            Pick an Image
        </button>
      </div>
    </div>
  );
}
