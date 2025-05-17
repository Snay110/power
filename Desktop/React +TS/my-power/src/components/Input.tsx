import { useState } from "react"

export default function Input(){
    const [value, setValue] = useState('')
    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
setValue(event.target.value)
    }
    return(
       
<input type={'text'} value={value} onChange={  handleChange}/>


    )
}
