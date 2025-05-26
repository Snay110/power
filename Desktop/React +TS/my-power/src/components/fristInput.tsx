import { useState } from "react";
import { Ways } from "../data";

export default function EffectHandle() {
  const [habitInput, setHabitInput] = useState("");
  const [habits, setHabits] = useStatecd([]);

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (habitInput.trim() === "") {
      console.log("Field is empty");
      return;
    }
    setHabits((prev) => [...prev, habitInput]);
    setHabitInput("");
  }

  const listItems = Ways.map((person) => (
    <li key={person.id}>
      {person.label} {person.emoji}
    </li>
  ));

  const userHabits = habits.map((habit, index) => (
    <li key={index}>{habit} </li>
  ));

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input "
          value={habitInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setHabitInput(e.target.value)
          }
        />
        <button className="Button"> to add</button>
      </form>
      <ul>
        {listItems}
        {userHabits}
      </ul>
    </section>
  );
}
