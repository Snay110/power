import { useState } from "react";

export default function Input() {
  const [formData, setFormData] = useState({
    name: "",
    LastName: "",
    email: "",
  });

  return (
    <section>
      <label htmlFor="">Name</label>
      <input
        type={"text"}
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <label htmlFor="">LastName</label>
      <input
        type={"text"}
        value={formData.LastName}
        onChange={(e) => setFormData({ ...formData, LastName: e.target.value })}
      />

      <label htmlFor="">email</label>
      <input
        type={"text"}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </section>
  );
}
