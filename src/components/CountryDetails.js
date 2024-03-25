import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDarkMode } from "./DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CountryDetails() {
  const [fetchedCountry, setFetchedCountry] = useState(null);
  const { id } = useParams();
  const url = `https://restcountries.com/v3.1/name/${id}`;
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const country = data.find(
          (country) => country.name.common.toLowerCase() === id.toLowerCase()
        );
        setFetchedCountry(country || {}); // Set default value to empty object if country is null
      })
      .catch((error) => console.log(error));
  }, [id, url]);

  return (
    <div
      className="forDark"
      style={{
        background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
      }}
    >
      <div className="new-page">
        {fetchedCountry ? (
          <>
            <div className="btn">
              <Link
                to="/"
                className="back"
                style={{
                  textDecoration: "none",
                  background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
                  color: isDarkMode ? "#fff" : "#000",
                }}
              >
                <FontAwesomeIcon
                  style={{ marginRight: "10px" }}
                  icon={faArrowLeft}
                  className="fa-thin"
                />{" "}
                Go Back
              </Link>
            </div>
            <div className="det-country">
              <div className="flag">
                <img
                  className="det-county-img"
                  src={fetchedCountry.flags?.png || ""}
                  alt={fetchedCountry.name?.common || ""}
                />
              </div>

              <div className="country-det1">
                <div className="det-country-name ">
                  {fetchedCountry.name?.common || "No data available"}
                </div>
                <div className="native">
                  <strong>Native Name: </strong>
                  {fetchedCountry.name?.official || "No data available"}
                </div>
                <div className="det-population">
                  <strong>Population: </strong>
                  {fetchedCountry.population || "No data available"}
                </div>
                <div className="det-region">
                  <strong>Region: </strong>
                  {fetchedCountry.region || "No data available"}
                </div>

                <div className="det-sub">
                  <strong>Sub-Region:</strong>
                  {fetchedCountry.subregion || "No data available"}
                </div>
                <div className="det-capital">
                  <strong>Capital: </strong>
                  {fetchedCountry.capital || "No data available"}
                </div>
                <div className="border">
                  <strong>Border Countries: </strong>
                  {fetchedCountry.borders &&
                    Object.values(fetchedCountry.borders).map(
                      (border, index) => (
                        <div className="border-name" key={index}>
                          {border}
                        </div>
                      )
                    )}
                </div>
              </div>
              <div className="country-det2">
                <div className="top">
                  <strong>Top level Domain:</strong>{" "}
                  {fetchedCountry.tld || "No data available"}
                </div>
                <div className="currency">
                  <strong>Currencies: </strong>
                  {(fetchedCountry.currencies &&
                    Object.values(fetchedCountry.currencies)[0]?.name) ||
                    "No data available"}
                </div>
                <div className="lang">
                  <strong>Languages: </strong>
                  {(fetchedCountry.languages &&
                    Object.values(fetchedCountry.languages).join(", ")) ||
                    "No data available"}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>Loading.........</div>
        )}
      </div>
    </div>
  );
}
