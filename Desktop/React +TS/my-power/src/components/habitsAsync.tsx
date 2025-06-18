import type { Async } from "./types";

import { toast } from "react-toastify";
export async function addHabitAsync({
  setHabitInput,
  setHabits,
  habitInput,
}: Async): Promise<void> {
  if (habitInput.trim() === "") {
    return;
  }
  const newHabit = {
    id: crypto.randomUUID(),
    label: habitInput.trim(),
  };
  try {
    const result = await new Promise<typeof newHabit>((resolve) => {
      //typeof newHabit is needed to get permission with the same type
      setTimeout(() => resolve(newHabit), 500);
    });

    setHabits((prev) => [...prev, result]);

    const habitStore = JSON.parse(localStorage.getItem("habits") || "[]");

    localStorage.setItem("habits", JSON.stringify([...habitStore, result]));

    toast.success("Habit successfully added");
  } catch {
    toast.error("error adding habit.");
  } finally {
    setHabitInput("");
  }
}
