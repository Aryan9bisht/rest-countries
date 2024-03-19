
import React from "react";

const Country = ({ country, isDarkMode,regionApplied }) => {
  return (
    <div
      className="country"
      style={{ background: isDarkMode ? "rgb(43,56,67)" : "#fff", color: isDarkMode ? "#fff" : "#000" }}
      key={country.name.common}
    >
      <img className="county-img" src={country.flags.png} alt={country.name.common} />
      <div className="country-det">
        <div className="country-name">{country.name.common}</div>
        <div className="population">
          <strong>Population: </strong>
          {country.population}
        </div>
        <div className="region">
          <strong>Region: </strong>
          {country.region}
        </div>
        <div className="capital">
          <strong>Capital: </strong>
          {country.capital}
        </div>
        {regionApplied? (
<div className="sub">
  <strong>Sub-Region:</strong>
  {country.subregion}
  </div>
        ):null}
      </div>
    </div>
  );
};

export default Country;
