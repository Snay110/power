import { toast } from "react-toastify";
import type{ HandleSubmitParams } from "./types";
import { addHabitAsync } from "./habitsAsync";
export async function handleSubmit({
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
   await addHabitAsync({habitInput,setHabitInput,setHabits})
    toast.success("Habit successfully added");
   
  } catch {
    toast.error("error adding habit.");
  }
}
