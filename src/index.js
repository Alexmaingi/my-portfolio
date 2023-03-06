import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
  </React.StrictMode>
);
