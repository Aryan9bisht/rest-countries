import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Textarea from '@mui/joy/Textarea';
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import { styled, alpha } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { useDarkMode } from "./DarkModeContext";
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ariaLabel = { "aria-label": "description" };

const Search = ({
  entered,
  handleSearchInput,
  filteredData,
  handleRegionChange,
  arrange,
  regionApplied,
  isDarkMode,
  arrangeByRegion,
  subregion,
  filterRegional,
  handleSubRegionChange,
}) => {
  const handleChange = (event) => {
    handleRegionChange(event); // Call handleRegionChange function
    filterRegional(event); // Call filterRegional function
  };
  const [selectedValue, setSelectedValue] = useState(" ");

  // Handler function to update the selected value when it changes
  const handling = (event) => {
    valSub(event);
    handleSubRegionChange(event);
  };
  const valSub = (event) => {
    setSelectedValue(event.target.value);
    // Additional logic if needed
  };
  

  
  return (
   
    <Box
      sx={{
        width: "92vw",
        margin: "40px 10px 40px 60px",
        background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Item
          sx={{
            width: "30vw",
            boxShadow: "none",
            background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          {" "}
         
          <Textarea
            sx={{
              height:'4.5vh',
              width: "30vw",
              boxShadow: "none",
              background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
              color: isDarkMode ? "#fff" : "#000",
         paddingTop:'7px'
            }}
  color="primary"
  minRows={2}
  placeholder="search countrues"
  size="sm"
  variant="outlined"
  onChange={handleSearchInput}
/>

        </Item>

        <Item
          sx={{
            boxShadow: "none",
            background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          {" "}
          <Button variant="outlined" onClick={arrangeByRegion}>
            Filter By Region
          </Button>
        </Item>
        <Item
          sx={{
            boxShadow: "none",
            background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          {" "}
          <Button variant="outlined" onClick={arrange}>
            Filter by population
          </Button>
        </Item>
        <Item
          sx={{
            boxShadow: "none",
            height: "auto",
            background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          <FormControl
            sx={{
              width: "10vw",
              height: "auto",
              boxShadow: "none",
              background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
              color: isDarkMode ? "#fff" : "#000"
            }}
          >
            
            <InputLabel
              sx={{
                background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
                border:'none'
              }}
              id="demo-simple-select-label"
            >
              Sub-region
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedValue}
              label="Sub-Region"
              className="custom-ul"
              onChange={handling}
              sx={{
                height: "4vh",
                paddingBottom: "1px",
                background: isDarkMode ? "rgb(43,56,67)" : "transparent",
                color: isDarkMode ? "#fff" : "#000",
                '& .MuiSelect-select': {
                  paddingRight: 4,
                  paddingLeft: 2,
                  paddingTop: 1,
                  paddingBottom: 1,
               },
               '& .MuiSelect-root': { padding: '0' }
              }}
          

           
            >
              {subregion.map((region) => (
                <MenuItem
                  sx={{
                    background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
                    color: isDarkMode ? "#fff" : "#000",
                    '&.Mui-selected': {
                      background: isDarkMode ? "rgb(43,56,67)" : "#fff",
                      color: isDarkMode ? "#fff" : "#000",
                      paddiingTop:0,
                      paddingBottom:0
                    }
                  }}
                  key={region}
                  value={region}
                >
                  {region}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Item>

        <Item
          sx={{
            boxShadow: "none",
            background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          <FormControl
            sx={{
              width: "10vw",
              boxShadow: "none",
              background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
              color: isDarkMode ? "#fff" : "#000",
            }}
          >
            <InputLabel
              sx={{
                background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
              }}
              id="demo-simple-select-label"
            >
              Region
            </InputLabel>
            <Select
            
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filteredData}
              label="Age"
              sx={{
                height: "4vh",
                background: isDarkMode ? "rgb(43,56,67)" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
              }}
              onChange={handleChange}
           
            >
              <MenuItem
                sx={{
                  background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
                  color: isDarkMode ? "#fff" : "#000",
                  '&.Mui-selected': {
                    background: isDarkMode ? "rgb(43,56,67)" : "#fff",
                    color: isDarkMode ? "#fff" : "#000",
                  }
                }}
                value="Africa"
              >
                Africa
              </MenuItem>
              <MenuItem
                sx={{
                  background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
                  color: isDarkMode ? "#fff" : "#000",
                  '&.Mui-selected': {
                    background: isDarkMode ? "rgb(43,56,67)" : "#fff",
                    color: isDarkMode ? "#fff" : "#000",
                  }
                }}
                value="America"
              >
                America
              </MenuItem>
              <MenuItem
                sx={{
                  background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
                  color: isDarkMode ? "#fff" : "#000",
                  '&.Mui-selected': {
                    background: isDarkMode ? "rgb(43,56,67)" : "#fff",
                    color: isDarkMode ? "#fff" : "#000",
                  }
                }}
                value="Asia"
              >
                Asia
              </MenuItem>
              <MenuItem
                sx={{
                  background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
                  color: isDarkMode ? "#fff" : "#000",
                  '&.Mui-selected': {
                    background: isDarkMode ? "rgb(43,56,67)" : "#fff",
                    color: isDarkMode ? "#fff" : "#000",
                  }
                }}
                value="Europe"
              >
                Europe
              </MenuItem>
              <MenuItem
                sx={{
                  background: isDarkMode ? "rgb(33, 45, 55)" : "#fff",
                  color: isDarkMode ? "#fff" : "#000",
                  '&.Mui-selected': {
                    background: isDarkMode ? "rgb(43,56,67)" : "#fff",
                    color: isDarkMode ? "#fff" : "#000",
                  }
                }}
                value="Oceania"
              >
                Oceania
              </MenuItem>
            </Select>
          </FormControl>
        </Item>
      </Stack>
    </Box>
  );
};

export default Search;
