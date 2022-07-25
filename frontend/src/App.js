import React from "react";
import { About, Footer, Header, Work, Skills } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
