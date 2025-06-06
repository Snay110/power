import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Button/Button.css'

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

 
  const handleSubmit = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errors = {
      name: formData.name.trim().length === 0 || formData.name.length > 20,
      lastName:
        formData.lastName.trim().length === 0 ||
        formData.lastName.length > 20,
      email: !emailRegex.test(formData.email),
    };

    setHasError(errors);

    const hasAnyError = Object.values(errors).some((err) => err);

    if (!hasAnyError) {
      navigate("/first-form-page");
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
<button className="Button" onClick={handleSubmit}>Submit</button>
    </section>
  );
}

