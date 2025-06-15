import type { ListItemsProps } from "./types";

export function ListItems({ ways, onDelete, setWays }: ListItemsProps) {
  return (
    <>
      {ways.map((person) => (
        <li className="habit-item" key={person.id}>
          {person.label} {person.emoji}
          <button
            className="Button"
            onClick={() => onDelete({id:person.id, setWays})}
          >
            🗑️
          </button>
        </li>
      ))}
    </>
  );
}
