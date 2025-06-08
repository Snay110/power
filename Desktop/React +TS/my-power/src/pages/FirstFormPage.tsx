import EffectHandle from "../components/fristInput";
import  {  ToastContainer  } from 'react-toastify'
import { Header } from "../components/Header";
export default function FirstFormPage() {
  return (
    <main>
      <section>
        <Header/>
        <EffectHandle />
         < ToastContainer  /> 
      </section>
    </main>
  );
}
