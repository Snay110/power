export 
  function handleDelete(id: string,setHabits:React.Dispatch<
      React.SetStateAction<{ id: string; label: string }[]>
    >) {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  }