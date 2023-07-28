import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState<string | undefined>();

  const handleBackgroundColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(() => `#${randomColor}`);
  };

  return <div className="background" onClick={handleBackgroundColor} style={{ background: color }} />;
}

export default App;
