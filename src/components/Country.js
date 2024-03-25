
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Country = ({ country, isDarkMode,regionApplied }) => {
  return (
    <Card sx={{  height:320, background: isDarkMode ? "rgb(33, 45, 55)" : "#fff", color: isDarkMode ? "#fff" : "#000"  }}>
    <CardActionArea sx={{ background: isDarkMode ? "rgb(33, 45, 55)" : "#fff", color: isDarkMode ? "#fff" : "#000" }} >
      <CardMedia
        component="img"
  height="160"
        image={country.flags.png} 
        alt="green iguana"
    style={{objectFit:'fill'}}
      />
      <CardContent sx={{ background: isDarkMode ? "rgb(33, 45, 55)" : "#fff", color: isDarkMode ? "#fff" : "#000" }}>
        <Typography gutterBottom variant="h5" component="div">
        
        {country.name.common}
        </Typography>
      
        <Typography variant="body2" sx={{ background: isDarkMode ? "rgb(33, 45, 55)" : "#fff", color: isDarkMode ? "#fff" : "#000" }} color="text.secondary">
          <strong>Population: </strong> {country.population}
        </Typography>
        <Typography variant="body2" color="text.secondary"  sx={{ background: isDarkMode ? "rgb(33, 45, 55)" : "#fff", color: isDarkMode ? "#fff" : "#000" }}>
        <strong>Region: </strong>  {country.region}
        </Typography>
        <Typography variant="body2" color="text.secondary"  sx={{ background: isDarkMode ? "rgb(33, 45, 55)" : "#fff", color: isDarkMode ? "#fff" : "#000" }}>
        <strong>Capital: </strong>  {country.capital}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
};

export default Country;
/**
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
 */