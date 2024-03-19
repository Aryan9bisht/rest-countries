
import React from "react";

const NoResults = ({ isDarkMode }) => {
  return <div className="no-results" style={{ background: isDarkMode ? "rgb(33, 45, 55)" : "#fff", color: isDarkMode ? "#fff" : "#000" }}>No results found</div>;
};

export default NoResults;
