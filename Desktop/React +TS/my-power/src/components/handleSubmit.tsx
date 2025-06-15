import { toast } from "react-toastify";
import type{ HandleSubmitParams } from "./types";
export function handleSubmit({
  e,
  setHabitInput,
  habitInput,
   setHabits,
}:HandleSubmitParams) {
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
