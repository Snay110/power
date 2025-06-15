export type HabitFormProps = {
  habitInput: string;
  setHabitInput: React.Dispatch<React.SetStateAction<string>>;
  setHabits: React.Dispatch<
    React.SetStateAction<{ id: string; label: string }[]>
  >;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type HandleSubmitParams = {
  e: React.FormEvent<HTMLFormElement>;
  habitInput: string;
  setHabitInput: React.Dispatch<React.SetStateAction<string>>;
  setHabits: React.Dispatch<
    React.SetStateAction<{ id: string; label: string }[]>
  >;
};

export type WayItem = {
  id: string;
  label: string;
  emoji: string;
};

export type DeleteParams = {
  id: string;
  setWays: React.Dispatch<React.SetStateAction<WayItem[]>>;
};

export type ListItemsProps = {
  ways: WayItem[];
  setWays: React.Dispatch<React.SetStateAction<WayItem[]>>;
  onDelete:(params :DeleteParams)=>void

}
export type UserHabitsProps = {
  habits: { id: string; label: string }[];
  handleDelete: (
    id: string,
    setHabits: React.Dispatch<React.SetStateAction<{ id: string; label: string }[]>>
  ) => void;
  setHabits: React.Dispatch<React.SetStateAction<{ id: string; label: string }[]>>;
};
