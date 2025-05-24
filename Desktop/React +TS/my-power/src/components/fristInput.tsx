import { useState } from "react";
import { Ways } from "./list";
export default function EffectHandle() {
    const [habitInput, setHabitInput] = useState('');
  const [habits, setHabits] = useState([]);

  function handleClick() {
   setHabits((prev) =>[...prev])
   setHabitInput('')
   if(habitInput.trim() === ''){
    return new Error('Поле пустое')
   }
  }
  return (
    <section>
      <label htmlFor="habit" id="habit">Choose/create a habit:</label>
      <input type="text" className="input "  value={habitInput} onChange={(e)=>setHabitInput(e.target.value)}/>
      <button className="Button" onClick={handleClick}>f</button>



      
    </section>
  );
}
