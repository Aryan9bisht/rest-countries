import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Country from "./Country";
import Loader from "./Loader";
import Error from "./Error";
import NoResults from "./NoResults";
import { useDarkMode } from "./DarkModeContext";
import {Link} from 'react-router-dom';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [searched, setSearched] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [entered, setEntered] = useState("");
  const [regionFilter, setRegion] = useState([]);
  const [regionApplied, setRegionApplied] = useState(false);
  const [filteredData, setFilteredData] = useState("Select a region");
  const [load, setFilterLoad] = useState(true);
  const [error, setError] = useState(false);
  const { isDarkMode } = useDarkMode();
  const [original,setOriginal] = useState([]);
  const [asscending,setAsscending] = useState(true);
const [arrangeRegion,setArrangeRegion] = useState(true)
const [subRegion,setSubRegion]= useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log('try');
        console.log(data);
        setCountries(data);
        setFilterLoad(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setFilterLoad(false);
        setError(true);
      });
  }, []);

  const handleSearchInput = (e) => {
    try {
      const inputValue = e.target.value;
    if (regionApplied) {
      setEntered(inputValue);
      const filteredCountries = regionFilter.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearched(inputValue !== "");
      setFiltered(filteredCountries);
    } else {
      setEntered(inputValue);
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearched(inputValue !== "");
      setFiltered(filteredCountries);
    }
    } catch (error) {
      console.log('error in handling input',error);
    }
 
  };
  const arrange = () => {
    try {
      if (regionApplied) {

      if (asscending) {
     
        setAsscending(false);
        const sortedCountries = regionFilter.slice().sort((a, b) => b.population - a.population);
        setRegion(sortedCountries);
      } else {
        setAsscending(true);
        const sortedCountries = regionFilter.slice().sort((a, b) => a.population - b.population);
        setRegion(sortedCountries);
      }
    } else {
      if (asscending) {
        setAsscending(false);
        const sortedCountries = countries.slice().sort((a, b) => b.population - a.population);
        setCountries(sortedCountries);
      } else {
        setAsscending(true);
        const sortedCountries = countries.slice().sort((a, b) => a.population - b.population);
        setCountries(sortedCountries);
      }
    }
      
    } catch (error) {
      console.log('error in arrange function',error);
    }
    
  };
  
  const handleRegionChange = (e) => {
    try {
      const regionValue = e.target.value;
    setRegionApplied(regionValue !== "");
    setFilteredData(regionValue === "" ? "" : regionValue);
    const inputVal = regionValue.toLowerCase();
    setEntered("");
    setSearched(false);
    const filteredCountries = countries.filter((country) => country.region.toLowerCase().includes(inputVal));
    setRegion(filteredCountries);
    setOriginal(filteredCountries);
    } catch (error) {
      console.log('error in handling region change',error);
    }
    
    
  };
const arrangeByRegion =()=>{
  try {
    if (regionApplied) {

      if (arrangeRegion) {
     
        setArrangeRegion(false);
        const sortedCountries = regionFilter.slice().sort((a, b) => b.area - a.area);
        setRegion(sortedCountries);
      } else {
        setArrangeRegion(true);
        const sortedCountries = regionFilter.slice().sort((a, b) => a.area - b.area);
        setRegion(sortedCountries);
      }
    } else {
      if (arrangeRegion) {
        setArrangeRegion(false);
        const sortedCountries = countries.slice().sort((a, b) => b.area - a.area);
        setCountries(sortedCountries);
      } else {
        setAsscending(true);
        const sortedCountries = countries.slice().sort((a, b) => a.area - b.area);
        setCountries(sortedCountries);
      }
    }
  } catch (error) {
   console.log('error in arrange by region',error); 
  }
 

}

const filterRegional = () => {
try {
  
  const uniqueSubregions = [...new Set(regionFilter.map(country => country.subregion))];

  console.log(uniqueSubregions);
  setSubRegion(uniqueSubregions);
} catch (error) {
  console.log('error in filtering regions',error);
}
};
const handleSubRegionChange = (e) => {
  try {
    const inputVal = e.target.value.toLowerCase(); 
    console.log(inputVal);
  
    setRegion(original);
    const filteredCountries = original.filter((country) =>
      country.subregion.toLowerCase().includes(inputVal)
    );
    setRegion(filteredCountries); 
  } catch (error) {
    console.log('error in handling sub region',error);
  }
 
};

  return (
    <div style={{height:'100vh', background: isDarkMode ? "rgb(33, 45, 55)" : "#fff", color: isDarkMode ? "#fff" : "#000" }}>
   
   
      <Search
        entered={entered}
        handleSearchInput={handleSearchInput}
        filteredData={filteredData}
        handleRegionChange={handleRegionChange}
        isDarkMode={isDarkMode}
        arrange={arrange}
        arrangeByRegion={arrangeByRegion}
        regionApplied={regionApplied}
        subregion={subRegion}
        filterRegional={filterRegional}
        handleSubRegionChange={handleSubRegionChange}
      />
      {load && <Loader />}
      {error && <Error />}
      <div className="container">
        {searched && regionApplied ? (
          filtered.length > 0 ? (
            filtered.map((country) => <Link
            key={country.name.common}
            to={`/country/${country.name.common}`}
            style={{ textDecoration: 'none' }}
          >
            <Country
              key={country.name.common}
              country={country}
              isDarkMode={isDarkMode}
              regionApplied={regionApplied}
              filterRegional={filterRegional}
            />
          </Link>
          )
          ) : (
            <NoResults isDarkMode={isDarkMode} />
          )
        ) : !searched && regionApplied ? (
          regionFilter.map((country) => <Link
          key={country.name.common}
          to={`/country/${country.name.common}`}
          style={{ textDecoration: 'none' }}
        >
          <Country
            key={country.name.common}
            country={country}
            isDarkMode={isDarkMode}
            regionApplied={regionApplied}
            filterRegional={filterRegional}
          />
        </Link>)
        ) : searched && !regionApplied ? (
          filtered.length > 0 ? (
            filtered.map((country) => <Link
            key={country.name.common}
            to={`/country/${country.name.common}`}
            style={{ textDecoration: 'none' }}
          >
            <Country
              key={country.name.common}
              country={country}
              isDarkMode={isDarkMode}
              regionApplied={regionApplied}
              filterRegional={filterRegional}
            />
          </Link>)
          ) : (
            <NoResults isDarkMode={isDarkMode} />
          )
        ) : (
          countries.map((country) => <Link
          key={country.name.common}
          to={`/country/${country.name.common}`}
          style={{ textDecoration: 'none' }}
        >
          <Country
            key={country.name.common}
            country={country}
            isDarkMode={isDarkMode}
            regionApplied={regionApplied}
            filterRegional={filterRegional}
          />
        </Link>)
        )}
      </div>
    </div>
  );
}

export default Countries;
