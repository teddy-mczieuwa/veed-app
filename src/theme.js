import { createGlobalStyle } from "styled-components";

export const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
};

export const theme = {
  primary: "#192033",
  white: "white",
  backgroundColor: "#f7f7f8",
  shadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
  hoverColor: "#ddd",
};

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul {
  list-style: none;
}
`;
