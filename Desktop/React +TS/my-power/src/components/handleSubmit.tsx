import { toast } from "react-toastify";

export function handleSubmit(
  e: React.FormEvent<HTMLFormElement>,
  habitInput: string,
  setHabitInput: React.Dispatch<React.SetStateAction<string>>,
  setHabits: React.Dispatch<
    React.SetStateAction<{ id: string; label: string }[]>
  >
) {
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
