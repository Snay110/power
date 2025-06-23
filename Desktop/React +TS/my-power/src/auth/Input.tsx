import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleChange } from "./handleChange";
import "../Button/Button.css";
import { handleSubmit } from "./handleSubmit";
import type { AuthData, FormErrors } from "../components/types";

export default function Input() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AuthData>({
    name: "",
    lastName: "",
    email: "",
  });

  const [hasError, setHasError] = useState<FormErrors>({
    name: false,
    lastName: false,
    email: false,
  });


  return (
    <section>
      <label htmlFor="name">name</label>
      <input
        type={"text"}
        name="name"
        value={formData.name}
        style={{
          border: hasError.name ? "1px solid red" : "",
        }}
        onChange={(event) => handleChange({ event, setFormData, setHasError })}
      />

      <label htmlFor="last-name">LastName</label>
      <input
        type={"text"}
        name="lastName"
        value={formData.lastName}
        style={{
          border: hasError.lastName ? "1px solid red" : "",
        }}
        onChange={(event) => handleChange({ event, setFormData, setHasError })}
      />

      <label htmlFor="email">email</label>
      <input
        type={"text"}
        name="email"
        value={formData.email}
        style={{
          border: hasError.email ? "1px solid red" : "",
        }}
        onChange={(event) => handleChange({ event, setFormData, setHasError })}
      />
      <button className="Button" onClick={()=> handleSubmit({formData,setHasError,navigate})}>
        Submit
      </button>
    </section>
  );
}
