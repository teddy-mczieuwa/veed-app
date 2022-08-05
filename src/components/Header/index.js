import { HeaderWrapper, HeaderButton, HeaderTitle } from "./style";

const Header = ({ show, showFavorites }) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Starred Repositories</HeaderTitle>
      <HeaderButton onClick={show}>
        {showFavorites ? "Show All" : "Show Favorites"}
      </HeaderButton>
    </HeaderWrapper>
  );
};

export default Header;
