import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Quote from "./components/Quote";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header />
      <Quote />
      <About />
    </div>
  );
}

export default App;
