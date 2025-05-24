import { useState } from "react";
import { useEffect } from "react";
import { Ways } from "../data";

export default function EffectHandle() {
  const [habitInput, setHabitInput] = useState("");
  const [habits, setHabits] = useState([]);

  function handleClick() {
    setHabits((prev) => [...prev]);
    setHabitInput("");
    if (habitInput.trim() === "") {
      return new Error("Поле пустое");
    }
  }

  useEffect(() => {
    try {
      const saved = localStorage.getItem("habits");
      if (saved !== null) {
        const parsed = JSON.parse(saved);
        setHabits(parsed);
      }
    } catch (e) {
      console.log("localStorage error", e);
    }
  });

  const listitems = Ways.map((person) => <li key={person.id}>...Ways</li>);

  return (
    <section>
      <label htmlFor="habit" id="habit">
        Choose/create a habit:
      </label>
      <input
        type="text"
        className="input "
        value={habitInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setHabitInput(e.target.value)
        }
      />
      <button className="Button" onClick={handleClick}>
        f
      </button>
    </section>
  );
}
