import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
export default function Input() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
  });
  const [hasError, setHasError] = useState({
    name: false,
    lastName: false,
    email: false,
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setHasError((prev) => ({
      ...prev,
      [name]: value.trim().length === 0,
    }));
  }
  const hendleSubmit = () => {
    if (formData.name.length >= 2 && formData.name.length <= 20) {
      navigate("/first-form-page");
    } else {
      alert("Имя должно быть от 2 до 20 символов");
    }
  };
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
        onChange={handleChange}
        
      />

      <label htmlFor="">LastName</label>
      <input
        type={"text"}
        name="lastName"
        value={formData.lastName}
        style={{
          border: hasError.lastName ? "1px solid red" : "",
        }}
        onChange={handleChange}
      />

      <label htmlFor="">email</label>
      <input
        type={"text"}
        name="email"
        value={formData.email}
        style={{
          border: hasError.email ? "1px solid red" : "",
        }}
        onChange={handleChange}
      />
    </section>
  );
}
