import React, { useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import ListRecipe from "./components/ListRecipe/ListRecipe";

function App() {
  const [queryTerm, setQueryTerm] = useState("");

  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          backgroundImage: `url("https://kartinkin.net/pics/uploads/posts/2022-08/thumbs/1660419003_19-kartinkin-net-p-fon-dlya-veb-stranitsi-krasivo-21.jpg")`,
          backgroundSize: "cover",
          fontFamily: "Comfortaa, cursive",
        }}
      >
        <div className="form">
          <Search queryTerm={queryTerm} setQueryTerm={setQueryTerm} />
          <CreateRecipe />
        </div>
        <ListRecipe queryTerm={queryTerm} />
      </Container>
    </>
  );
}

export default App;
