import { useSelector } from "react-redux";

function useFavorites() {
  const favorites = useSelector((state) => state.favorites);
  return favorites;
}

export default useFavorites;
