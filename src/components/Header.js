
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "./DarkModeContext";

const Header = () => {
  const {  toggleDarkMode } = useDarkMode();

  return (
    <div className="nav">
      <div className="where">Where in the world?</div>
      <div className="dark" style={{ cursor: "pointer" }} onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={faMoon} />
        <span className="thin-text"> Dark mode</span>
      </div>
    </div>
  );
};

export default Header;
