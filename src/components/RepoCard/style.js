import styled from "styled-components";
import { devices } from "../../theme";

export const RepoCard = styled.li`
  border: 1px solid ${(prop) => prop.theme.primary};
  background-color: ${(prop) => prop.theme.backgroundColor};
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 80vw;
  height: 30rem;
  overflow: hidden;

  @media ${devices.mobileS} {
    width: 23rem;
    margin: 1rem;
  }
`;

export const RepoCardButtonWrapper = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
`;

export const RepoCardButton = styled.button`
  padding: 4px 12px;
  background-color: ${(prop) => prop.theme.primary};
  color: ${(prop) => prop.theme.white};
  cursor: pointer;
  border: none;
`;
