import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutMePage from "./components/AboutMePage";
import ClassSetupsPage from "./components/ClassSetupsPage";
import ClassSetup1 from "./components/ClassSetup1";
import ClassSetup2 from "./components/ClassSetup2";
import ClassSetup3 from "./components/ClassSetup3";
import SettingsPage from "./components/SettingsPage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMePage />} />
            <Route path="/class-setups" element={<ClassSetupsPage />} />
            <Route path="/class-setup1" element={<ClassSetup1 />} />
            <Route path="/class-setup2" element={<ClassSetup2 />} />
            <Route path="/class-setup3" element={<ClassSetup3 />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
