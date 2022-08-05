import { memo } from "react";
import RepoCardInfo from "../RepoCard/RepoCardInfo";
import {
  RepoCard,
  RepoCardButton,
  RepoCardButtonWrapper,
} from "../RepoCard/style";
import { RepositoriesWrapper } from "./style";

const Repositories = memo(
  ({ starredRepos, toggleFavorite, favorites, displayFavorites }) => {
    const markedFavorites = favorites ? Object.values(favorites) : null;

    return (
      <RepositoriesWrapper>
        {displayFavorites
          ? markedFavorites &&
            markedFavorites.map((markedFavorite) => {
              return (
                <RepoCard key={markedFavorite.id}>
                  <RepoCardInfo repo={markedFavorite} />
                </RepoCard>
              );
            })
          : starredRepos &&
            starredRepos.map((starredRepo) => {
              return (
                <RepoCard key={starredRepo.id}>
                  <RepoCardButtonWrapper>
                    <RepoCardButton onClick={() => toggleFavorite(starredRepo)}>
                      {favorites.hasOwnProperty(starredRepo.id)
                        ? "Remove Favorite"
                        : "Mark As Favorite"}
                    </RepoCardButton>
                  </RepoCardButtonWrapper>
                  <RepoCardInfo repo={starredRepo} />
                </RepoCard>
              );
            })}
      </RepositoriesWrapper>
    );
  }
);

export default Repositories;
