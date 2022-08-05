import { useState, Suspense, lazy } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "./theme";
import useFetchStarredRepos from "./hooks/useFetchStarredRepos";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header";
import { Main, Search, Loader } from "./style";
const Repositories = lazy(() => import("./components/Repositories"));

function App() {
  const { starredRepos } = useFetchStarredRepos();
  const [favorites, setFavorites] = useLocalStorage();
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const showFavoritesHandler = () => setShowFavorites(!showFavorites);

  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRepos = starredRepos.filter((starredRepo) => {
    return starredRepo?.language
      ?.toLocaleLowerCase()
      .includes(searchTerm?.toLocaleLowerCase());
  });

  function toggleFavorite(starredRepo) {
    // get localStorage saved repo
    let localStorageFavorites =
      JSON.parse(localStorage.getItem("favorites")) || {};
    if (localStorageFavorites.hasOwnProperty(starredRepo.id)) {
      // then we unfavorite the entry
      delete localStorageFavorites[starredRepo.id];
    } else {
      localStorageFavorites[starredRepo.id] = starredRepo;
    }

    localStorage.setItem("favorites", JSON.stringify(localStorageFavorites));
    setFavorites(localStorageFavorites);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header showFavorites={showFavorites} show={showFavoritesHandler} />
      {!showFavorites && (
        <Search
          onChange={searchHandler}
          type="search"
          placeholder="Search Language (eg: C#)"
        />
      )}
      <Main>
        {showFavorites ? (
          <Suspense fallback={<Loader>...loading</Loader>}>
            <Repositories
              displayFavorites
              starredRepos={starredRepos}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          </Suspense>
        ) : (
          <Suspense fallback={<Loader>...loading</Loader>}>
            <Repositories
              starredRepos={filteredRepos}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          </Suspense>
        )}
      </Main>
    </ThemeProvider>
  );
}

export default App;
