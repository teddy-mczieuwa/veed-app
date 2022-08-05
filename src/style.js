import styled from "styled-components";

export const Main = styled.main`
  padding: 0 2rem;
`;

export const Search = styled.input`
  display: block;
  margin: 2rem auto;
  padding: 1rem 4rem;
  border-color: ${(prop) => prop.theme.primary};
  border-radius: 5px;
  border-width: 0.5px;
`;

export const Loader = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
