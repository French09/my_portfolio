import React from "react";
import { About, Footer, Header, Work, Skills } from "./container";
import { Navbar } from "./components";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default App;
