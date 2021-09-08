import React from "react";
import NavBar from './components/NavBar'
import Display from "./components/Display";
import Footer from './components/Footer'
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Display />
      </div>
      <Footer />
    </div>
  );
}

export default App;
