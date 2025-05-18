import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  return (
    <section>
      <label htmlFor="">Name</label>
      <input className="" type={"text"} value={value} onChange={handleChange} />

      <label htmlFor="">LastName</label>
      <input type={"text"} value={value} onChange={handleChange} />

      <label htmlFor="">email</label>
      <input type={"text"} value={value} onChange={handleChange} />
    </section>
  );
}
