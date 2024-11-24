import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
    </div>
  );
}

export default App;
