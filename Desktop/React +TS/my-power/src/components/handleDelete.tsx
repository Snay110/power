
export function handleDelete(
  id: string,
  setHabits: React.Dispatch<React.SetStateAction<{ id: string; label: string }[]>>
) {
  setHabits((prev) => {
    const updated = prev.filter((habit) => habit.id !== id);
    localStorage.setItem("habits", JSON.stringify(updated));
    return updated;
  });
}
