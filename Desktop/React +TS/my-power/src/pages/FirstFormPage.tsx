import Button from "../Button/Button";
import { Weys } from "../components/list";

export default function FirstFormPage() {
  return (
    <main>
      <section>
        <form>
          <label htmlFor="">Задача</label>
          <input type="text" />
        </form>
        <Button />
      </section>
    </main>
  );
}
