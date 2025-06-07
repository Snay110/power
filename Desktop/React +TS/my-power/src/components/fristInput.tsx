import { useState } from "react";
import { Ways } from "../data";

export default function EffectHandle() {
  const [habitInput, setHabitInput] = useState("");
  const [habits, setHabits] = useState([]);
  const [ways, setWays] = useState(Ways)

  function handleSubmit(e:  React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (habitInput.trim() === "") {
      console.log("Field is empty");
      return;
    }
    setHabits((prev) => [...prev, habitInput]);
    setHabitInput("");
  }

  
  
  function handleDelete (indexToDelete:number){
    setHabits((prev) => prev.filter((_,i)=> i !== indexToDelete))
  }
  
  function handleDeleteWays(idToDelete:string){
setWays((prev) => prev.filter(way => way.id !== idToDelete))
  }
  
  const listItems = ways.map((person) => (
    <li key={person.id}>
      {person.label} {person.emoji}
      <button onClick={()=> handleDeleteWays(person.id)}>🗑️</button>
    </li>
  ));

  const userHabits = habits.map((habit, index) => (
    <li key={index}>{habit}
  <button onClick={()=> handleDelete(index)}>🗑️</button>
   </li>
  ));

  return (
    <section>
      <h3>add a habit</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input "
          value={habitInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setHabitInput(e.target.value)
          }
        />
        <button className="Button"> to add</button>
      
      </form>
      <ul>
        {listItems}
        {userHabits}
      </ul>
    </section>
  );
}
