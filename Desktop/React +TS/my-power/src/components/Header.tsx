import "../Button/Button.css";
import { useEffect, useState } from "react";
export function Header() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <span className="span">
        The time is now:{now.toLocaleTimeString()}{" "}
        {<button className="ButtonHeader">⚙️</button>}
      </span>
    </header>
  );
}
