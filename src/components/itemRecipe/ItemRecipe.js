import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import { useActions } from "../../hooks/useActions";
import useFavorites from "../../hooks/useFavorites";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import {
  useUpdateRecipeMutation,
  useRemoveRecipeMutation,
} from "../../store/api/api";
import { ImBin, ImPencil, ImFloppyDisk } from "react-icons/im";

function ItemRecipe({ recipe }) {
  const cardStyle = {
    margin: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    background: "#ccc",
  };
  const favorites = useFavorites();
  const { toggleFavorites } = useActions();
  const isExist = favorites.some((r) => r.id === recipe.id);

  const [removeRecipe] = useRemoveRecipeMutation();
  const [updateRecipe] = useUpdateRecipeMutation();

  const [editing, setEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState({
    name: recipe.name,
    description: recipe.description,
  });

  const handleDelete = () => {
    removeRecipe(recipe.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    updateRecipe({ id: recipe.id, ...editedRecipe });
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  return (
    <Card style={cardStyle}>
      <CardMedia
        component="img"
        height={"300px"}
        src={recipe.image}
        alt={recipe.name}
      />
      <CardContent>
        {editing ? (
          <div>
            <TextField
              name="image"
              label="Картинка"
              value={editedRecipe.image}
              onChange={handleChange}
            />
            <TextField
              name="name"
              label="Название"
              value={editedRecipe.name}
              onChange={handleChange}
            />
            <TextField
              name="description"
              label="Описание"
              value={editedRecipe.description}
              onChange={handleChange}
            />
          </div>
        ) : (
          <div>
            <Typography variant="h5">{recipe.name}</Typography>
            <Typography variant="h7">{recipe.description}</Typography>
          </div>
        )}
      </CardContent>
      <CardContent>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => toggleFavorites(recipe)}
        >
          {isExist ? <FcLike /> : <FcLikePlaceholder />}
        </Button>
        {editing ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ ml: 2, mr: 2 }}
            startIcon={<ImFloppyDisk sx={{ fontSize: 4 }} />}
          >
            Зберегти
          </Button>
        ) : (
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleEdit}
            sx={{ ml: 2, mr: 2 }}
            startIcon={<ImPencil />}
          >
            Редагувати
          </Button>
        )}
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          size="small"
          startIcon={<ImBin />}
        >
          Видалити
        </Button>
      </CardContent>
    </Card>
  );
}

export default ItemRecipe;
