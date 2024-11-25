import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/HeroSection/Herosection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Navbar />
      <Herosection />
    </div>
  );
}

export default App;
