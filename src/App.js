import React from "react";
import "./App.css";

import Header from "./components/Header";
import Quote from "./components/Quote";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Quote />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
