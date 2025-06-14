import { useState } from "react";
import { Ways } from "../data";
import "../Button/Button.css";
import { handleSubmit } from "./HandleSubmit";
import HabitForm from "./HabitForm";

export default function EffectHandle() {
  const [habitInput, setHabitInput] = useState("");
  const [habits, setHabits] = useState<{ id: string; label: string }[]>([]);
  const [ways, setWays] = useState(Ways);

  function handleDelete(id: string) {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  }

  function onDelete(id: string) {
    setWays((prev) => prev.filter((way) => way.id !== id));
  }

  const listItems = ways.map((person) => (
    <li className="habit-item" key={person.id}>
      {person.label} {person.emoji}
      <button className="Button" onClick={() => onDelete(person.id)}>
        🗑️
      </button>
    </li>
  ));

  const userHabits = habits.map((habit) => (
    <li className="habit-item" key={habit.id}>
      {habit.label}
      <button className="Button" onClick={() => handleDelete(habit.id)}>
        🗑️
      </button>
    </li>
  ));

  return (
    <section>
      <HabitForm
        habitInput={habitInput}
        setHabitInput={setHabitInput}
        setHabits={setHabits}
        handleSubmit={(e) => handleSubmit(e,habitInput,setHabitInput,setHabits)}
      />
      <ul>
        {listItems}
        {userHabits}
      </ul>
    </section>
  );
}
