import { useState, useEffect } from "react";

function useLocalStorage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  function fetchFavorites() {
    let localStorageFavorites = localStorage.getItem("favorites");
    if (!localStorageFavorites) {
      localStorage.setItem("favorites", JSON.stringify({}));
    }
    setFavorites(JSON.parse(localStorageFavorites));
  }

  return [favorites, setFavorites];
}

export default useLocalStorage;
