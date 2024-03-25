import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import CountryDetail from "./components/CountryDetails";
import { DarkModeProvider, useDarkMode } from "./components/DarkModeContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "./App.css";

function DarkModeButton() {
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  React.useEffect(() => {
    document.body.style.backgroundColor = isDarkMode
      ? "rgb(33, 45, 55)"
      : "#fff";
    document.body.style.color = isDarkMode ? "#fff" : "#000";
    const header = document.querySelector("header");
    if (header) {
      header.style.backgroundColor = isDarkMode ? "rgb(43,56,67)" : "#fff";
      header.style.color = isDarkMode ? "#fff" : "#000";
    }
    const ulList = document.querySelectorAll("ul");
    if (ulList) {
      ulList.forEach((ul) => {
        ul.style.backgroundColor = isDarkMode ? "rgb(43,56,67)" : "#fff";
        ul.style.color = isDarkMode ? "#fff" : "#000";
      });
    }
  }, [isDarkMode]);

  return (
    <IconButton onClick={toggleDarkMode} color="inherit">
      {isDarkMode ? (
        <>
          <Brightness7Icon />
          <Typography> &nbsp; Dark Mode </Typography>
        </>
      ) : (
        <>
          <Brightness4Icon />
          <Typography>&nbsp; Light Mode </Typography>
        </>
      )}
    </IconButton>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "transparent",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <AppBar
            position="static"
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Where in the World?
              </Typography>
              <DarkModeButton />
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/country/:id" element={<CountryDetail />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
