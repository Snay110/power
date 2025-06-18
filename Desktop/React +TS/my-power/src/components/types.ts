import { useNavigate } from "react-router-dom";
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
  onDelete: (params: DeleteParams) => void;
};

 export type UserHabitsProps = {
  habits: { id: string; label: string }[];
  handleDelete: (id: string, setHabits: React.Dispatch<React.SetStateAction<{ id: string; label: string }[]>>) => void;
  setHabits: React.Dispatch<React.SetStateAction<{ id: string; label: string }[]>>;
  toggleHabitStatus: (id: string) => void;
  completedHabits: string[];

};

export type AuthData = {
  name: string;
  lastName: string;
  email: string;
};
export type AuthFromProps = {
  formData: AuthData;
  setHasError: React.Dispatch<React.SetStateAction<FormErrors>>;
  navigate: ReturnType<typeof useNavigate>;
};

export type FormErrors = {
  name: boolean;
  lastName: boolean;
  email: boolean;
};
export type HandleChangeProps = {
  event: React.ChangeEvent<HTMLInputElement>;
  setFormData: React.Dispatch<React.SetStateAction<AuthData>>;
  setHasError: React.Dispatch<React.SetStateAction<FormErrors>>;
};

export type Async = {
  setHabits: React.Dispatch<
    React.SetStateAction<{ id: string; label: string }[]>
  >;
  habitInput: string;
  setHabitInput: React.Dispatch<React.SetStateAction<string>>;
};
