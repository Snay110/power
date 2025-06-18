import type{ HabitFormProps } from "./types";

export default function HabitForm({
  habitInput,
  setHabitInput,
  handleSubmit,
}: HabitFormProps){



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={habitInput}
        onChange={(e) => setHabitInput(e.target.value)}
      />
      <button className="Button">To add</button>
    </form>
  );
}
