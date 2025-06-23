import { useCallback, useState } from "react";

export function useHabitStatus() {
  const [completedHabits, setCompletedHabits] = useState<string[]>(
    JSON.parse(localStorage.getItem("completedHabits") || "[]")
  );

  const toggleHabitStatus = useCallback((id: string) => {
    setCompletedHabits((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((habitId) => habitId !== id)
        : [...prev, id];

      localStorage.setItem("completedHabits", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const isCompleted = useCallback(
    (id: string) => completedHabits.includes(id),
    [completedHabits]
  );

  return { completedHabits, toggleHabitStatus, isCompleted };
}
