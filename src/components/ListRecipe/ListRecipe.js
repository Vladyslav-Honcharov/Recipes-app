import React from "react";
import ItemRecipe from "../itemRecipe/ItemRecipe";
import { useGetRecipesQuery } from "../../store/api/api";

function ListRecipe({ queryTerm }) {
  const { data, error, isLoading } = useGetRecipesQuery(queryTerm);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="recipe-list">
      {data.map((recipe) => (
        <ItemRecipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default ListRecipe;
