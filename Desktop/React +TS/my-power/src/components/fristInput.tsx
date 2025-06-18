import { useState, useEffect } from "react";
import { Ways } from "../data";
import "../Button/Button.css";
import HabitForm from "./habitForm";
import { ListItems } from "./listItems";
import { UserHabits } from "./userHabits";
import { handleDelete } from "./handleDelete";
import { onDelete } from "./onDelete";
import { useAddHabit } from "./habitsAsync";

export default function EffectHandle() {
  const [habitInput, setHabitInput] = useState("");
  const [habits, setHabits] = useState<{ id: string; label: string }[]>([]);
  const [ways, setWays] = useState(Ways);

  const { addHabit } = useAddHabit({ habitInput, setHabitInput, setHabits });

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
        <ListItems ways={ways} onDelete={onDelete} setWays={setWays} />
        <UserHabits
          habits={habits}
          handleDelete={handleDelete}
          setHabits={setHabits}
        />
      </ul>
    </section>
  );
}