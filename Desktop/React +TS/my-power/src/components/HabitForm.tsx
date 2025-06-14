import * as React from "react";

type HabitFormProps = {
  habitInput: string;
  setHabitInput: React.Dispatch<React.SetStateAction<string>>;
  setHabits: React.Dispatch<
    React.SetStateAction<{ id: string; label: string }[]>
  >;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function HabitForm({
  habitInput,
  setHabitInput,
  handleSubmit,
}: HabitFormProps) {
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
