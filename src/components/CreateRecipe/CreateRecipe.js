import React from "react";
import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useCreateRecipesMutation } from "../../store/api/api";
import { ImPlus } from "react-icons/im";

function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    description: "",
  });

  const [createRecipe] = useCreateRecipesMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    createRecipe(recipe).then(() => {
      setRecipe({ name: "", image: "", description: "" });
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "500px" }}>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontFamily: "Comfortaa, cursive" }}
      >
        Додати страву
      </Typography>
      <TextField
        label="Назва страви"
        placeholder="Назва страви"
        value={recipe.name}
        onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
        fullWidth
        margin="normal"
        sx={{ fontFamily: "Comfortaa, cursive" }}
      />
      <TextField
        label="Посилання на зображення"
        placeholder="Посилання на зображення"
        value={recipe.image}
        onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
        fullWidth
        margin="normal"
        sx={{ fontFamily: "Comfortaa, cursive" }}
      />
      <TextField
        label="Опис страви"
        placeholder="Опис страви"
        value={recipe.description}
        onChange={(e) => setRecipe({ ...recipe, description: e.target.value })}
        fullWidth
        margin="normal"
        multiline
        rows={4}
        sx={{ fontFamily: "Comfortaa, cursive" }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ fontFamily: "Comfortaa, cursive" }}
        endIcon={<ImPlus />}
      >
        Додати страву
      </Button>
    </form>
  );
}

export default CreateRecipe;
