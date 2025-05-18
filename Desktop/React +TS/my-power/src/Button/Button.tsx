// import { useState } from 'react'
import './Button.css'
export default function Button(){
    function handelClick (){
        return(
console.log('aa')
        )
    }
   
return <button className='Button' onClick={handelClick}>Отправить</button>
}
