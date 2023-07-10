import React from "react";
import { FcBookmark } from "react-icons/fc";
import "./Header.scss";
import useFavorites from "../../hooks/useFavorites";
import { useActions } from "../../hooks/useActions";
import { Box, Typography, Button, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
  maxHeight: "70vh",
};

function ChildModal({ recipe }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Рецепт</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={style}>
          <Typography id="child-modal-title" variant="h6" component="h2">
            Рецепт
          </Typography>
          <Typography id="child-modal-description" sx={{ mt: 2 }}>
            <div className="modal-text">{recipe.recipe}</div>
          </Typography>
          <Button onClick={handleClose}>Закрити</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const favorites = useFavorites();
  const { toggleFavorites } = useActions();

  const handleRemoveFromFavorites = (recipe) => {
    toggleFavorites(recipe);
  };

  return (
    <header className="header">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Улюблені страви
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {favorites.map((recipe) => (
              <React.Fragment key={recipe.id}>
                <img
                  className="modal-img"
                  src={recipe.image}
                  alt={recipe.name}
                />
                <div className="modal-text">{recipe.name}</div>
                <Button onClick={() => handleRemoveFromFavorites(recipe)}>
                  Видалити обране
                </Button>
                <ChildModal recipe={recipe} />
              </React.Fragment>
            ))}
          </Typography>
        </Box>
      </Modal>

      <div className="header-favorites">
        <FcBookmark className="header-favorites_icon" onClick={handleOpen} />
        <span className="header-favorites_number">{favorites.length}</span>
      </div>
    </header>
  );
}

export default Header;
