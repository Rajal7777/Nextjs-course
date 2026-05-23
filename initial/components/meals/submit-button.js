"use client";

import {  useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Submmiting" : "Share Meal"}</button>
  );
}