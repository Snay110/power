import { useState, useEffect } from "react";
import { Ways } from "../data";
import "../Button/Button.css";
import HabitForm from "./habitForm";
import { UserHabits } from "./userHabits";
import { handleDelete } from "./handleDelete";
import { useAddHabit } from "./useAddHabit";
import { useHabitStatus } from "./useHabitStatus";
import type { Habit } from "./types";

export default function EffectHandle() {

  const [habitInput, setHabitInput] = useState("");
  const [habits, setHabits] = useState<Habit[]>(Ways);

  const { addHabit } = useAddHabit({ habitInput, setHabitInput, setHabits });
  const { completedHabits, toggleHabitStatus} = useHabitStatus();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (habitInput.trim() === "") return;

    await addHabit(habitInput);
  };

  useEffect(() => {
    const habitStore = localStorage.getItem("habits");
    if (habitStore) {
      const parse = JSON.parse(habitStore);
      setHabits(parse);
      localStorage.setItem('habits', JSON.stringify(Ways))
      setHabits(Ways)
     
    }
  }, []);

  return (
    <section>
      <HabitForm
        habitInput={habitInput}
        setHabitInput={setHabitInput}
        setHabits={setHabits}
        handleSubmit={handleSubmit}
      />
      <ul>
        <UserHabits
          habits={habits}
          handleDelete={handleDelete}
          setHabits={setHabits}
          toggleHabitStatus={toggleHabitStatus}
          completedHabits={completedHabits}
        />
      </ul>
    </section>
  );
}
