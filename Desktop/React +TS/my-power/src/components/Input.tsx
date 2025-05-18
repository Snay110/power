import { useState } from "react";

export default function Input() {
  const [formData, setFormData] = useState({
    name: "",
    LastName: "",
    email: "",
  });
  const [hasError, setHasError] = useState({
    name: false,
    LastName: false,
    email: false,
  });

  function handalChane(event: React.ChangeEvent<HTMLInputElement>) {
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
        onChange={handalChane}
      />

      <label htmlFor="">LastName</label>
      <input
        type={"text"}
        name="LastName"
        value={formData.LastName}
        style={{
          border: hasError.LastName ? "1px solid red" : "",
        }}
        onChange={handalChane}
      />

      <label htmlFor="">email</label>
      <input
        type={"text"}
        name="email"
        value={formData.email}
        style={{
          border: hasError.email ? "1px solid red" : "",
        }}
        onChange={handalChane}
      />
    </section>
  );
}
