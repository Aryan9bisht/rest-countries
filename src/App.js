import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import { DarkModeProvider } from "./components/DarkModeContext";
import Header from "./components/Header";
import CountryDetail from "./components/CountryDetails";
import './App.css';
function App() {
  return (
    <DarkModeProvider> {/* Provide the DarkModeProvider */}
      <BrowserRouter>
        <Header /> {/* Render the Header component */}
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:id" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
