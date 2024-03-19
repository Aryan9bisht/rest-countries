import React from "react";

const Search = ({ entered, handleSearchInput, filteredData, handleRegionChange, arrange, regionApplied, isDarkMode, arrangeByRegion, subregion, filterRegional,handleSubRegionChange }) => {
  return (
    <div className="search">
      <input
        style={{ background: isDarkMode ? "rgb(43,56,67)" : "#fff", color: isDarkMode ? "#fff" : "#000" }}
        type="text"
        placeholder="Search countries..."
        value={entered}
        onChange={handleSearchInput}
      />
      <button style={{ background: isDarkMode ? "rgb(43,56,67)" : "#fff", color: isDarkMode ? "#fff" : "#000" }} onClick={arrange}>Sort By Population</button>
      <button style={{ background: isDarkMode ? "rgb(43,56,67)" : "#fff", color: isDarkMode ? "#fff" : "#000" }} onClick={arrangeByRegion}>Sort By Region</button>
      {regionApplied && (
       <select style={{ background: isDarkMode ? "rgb(43,56,67)" : "#fff", color: isDarkMode ? "#fff" : "#000" }} onChange={handleSubRegionChange}>
       <option>Select Sub-region</option>
       {subregion.map((region) => (
         <option key={region} value={region}>{region}</option>
       ))}
     </select>
     
      )}
      <select
        value={filteredData}
        style={{ background: isDarkMode ? "rgb(43,56,67)" : "#fff", color: isDarkMode ? "#fff" : "#000" }}
        onChange={handleRegionChange} onClick={filterRegional}
      >
        <option value="">Select a region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Search;
