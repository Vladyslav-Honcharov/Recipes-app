import React from "react";
import { FcBookmark } from "react-icons/fc";
import "./Header.scss";
import useFavorites from "../../hooks/useFavorites";

import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

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

function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const favorites = useFavorites();

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
            {favorites.map((r) => {
              return (
                <React.Fragment key={r.id}>
                  <img className="modal-img" src={r.image} alt={r.name} />
                  <div className="modal-text">{r.name}</div>
                </React.Fragment>
              );
            })}
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
