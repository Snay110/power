import { useState } from "react";
import { toast } from "react-toastify";
import { Ways } from "../data";
import "../Button/Button.css";
import HabitForm from "./HabitForm";

export default function EffectHandle() {
  const [habitInput, setHabitInput] = useState("");
  const [habits, setHabits] = useState<{ id: string; label: string }[]>([]);
  const [ways, setWays] = useState(Ways);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (habitInput.trim() === "") {
      toast.error("The field cannot be empty");
      return;
    }

    try {
      setHabits((prev) => [
        ...prev,
        { id: crypto.randomUUID(), label: habitInput },
      ]);
      setHabitInput("");
      toast.success("Habit successfully added");
    } catch {
      toast.error("error adding habit.");
    }
  }

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
       
        handleSubmit={handleSubmit}
      />
      <ul>
        {listItems}
        {userHabits}
      </ul>
    </section>
  );
}
