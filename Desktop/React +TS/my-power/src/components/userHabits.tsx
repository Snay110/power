import type { UserHabitsProps } from "./types";

export function UserHabits({
  habits,
  handleDelete,
  setHabits,
  toggleHabitStatus,
  completedHabits,
}: UserHabitsProps) {
  return (
    <>
      {habits.map((habit) => (
        <li
          className={`habit-item ${
            completedHabits.includes(habit.id)
    ? "habit-item--done"
    : habit.status === "failed"
    ? "habit-item--failed"
    : ""
          }`}
          key={habit.id}
        >
          {habit.label}
          <button className="habit-check" onClick={() => toggleHabitStatus(habit.id)}>
            ✅
          </button>
          <button className="habit-uncheck" onClick={() => toggleHabitStatus(habit.id)}>
            ❌
          </button>
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