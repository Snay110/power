import { useState, useEffect } from "react";
import { Ways } from "../data";
import "../Button/Button.css";
import { handleSubmit } from "./handleSubmit";
import HabitForm from "./habitForm";
import { ListItems } from "./listItems";
import { UserHabits } from "./userHabits";
import { handleDelete } from "./handleDelete";
import { onDelete } from "./onDelete";
export default function EffectHandle() {
  const [habitInput, setHabitInput] = useState("");
  const [habits, setHabits] = useState<{ id: string; label: string }[]>([]);
  const [ways, setWays] = useState(Ways);

  useEffect(() => {
    const habitStore = localStorage.getItem("habits");
    if (habitStore) {
      const parse = JSON.parse(habitStore)
      setHabits(parse);
    }
  }, []);
  return (
    <section>
      <HabitForm
        habitInput={habitInput}
        setHabitInput={setHabitInput}
        setHabits={setHabits}
        handleSubmit={(e) =>
          handleSubmit({ e, habitInput, setHabitInput, setHabits })
        }
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
