"use client";

import { useFormState } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormState();
  return (
    <button disabled={pending}>{pending ? "Submmiting" : "Share Meal"}</button>
  );
}