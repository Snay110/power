import "./Button.css";

export default function Button() {
    
  function handelClick() {
    return console.log("handelButtonClick");
  }

  return (
    <button className="Button" onClick={handelClick}>
      Отправить
    </button>
  );
}
