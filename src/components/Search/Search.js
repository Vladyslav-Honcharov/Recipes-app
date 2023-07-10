import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import "./Search.scss";
import { ImSearch } from "react-icons/im";

function Search({ queryTerm, setQueryTerm }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setQueryTerm(searchTerm);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ fontFamily: "Comfortaa, cursive" }}>
        Пошук страви
      </Typography>
      <TextField
        type="search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch();
        }}
        placeholder="Введите название блюда"
        sx={{
          mr: 1,
          fontFamily: "Comfortaa, cursive",
        }}
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        sx={{ fontFamily: "Comfortaa, cursive" }}
        endIcon={<ImSearch />}
      >
        Пошук
      </Button>
    </Box>
  );
}

export default Search;
