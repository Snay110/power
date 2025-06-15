import type { UserHabitsProps } from "./types";

export function UserHabits({ habits, handleDelete, setHabits }: UserHabitsProps) {
  return (
    <>
      {habits.map((habit) => (
        <li className="habit-item" key={habit.id}>
          {habit.label}
          <button
            className="Button"
            onClick={() => handleDelete(habit.id, setHabits)}
          >
            🗑
          </button>
        </li>
      ))}
    </>
  );
}