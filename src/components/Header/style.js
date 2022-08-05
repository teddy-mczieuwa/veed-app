import styled from "styled-components";
import { devices } from "../../theme";

export const HeaderWrapper = styled.header`
  overflow: hidden;
  background-color: ${(prop) => prop.theme.backgroundColor};
  width: 100%;
  text-align: center;
  padding-bottom: 1rem;
  @media ${devices.mobileL} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;

  @media ${devices.mobileL} {
    text-align: left;
    margin-left: 4rem;
  }
`;

export const HeaderButton = styled.button`
  background-color: ${(prop) => prop.theme.primary};
  color: ${(prop) => prop.theme.white};
  cursor: pointer;
  border: none;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 4rem;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  border: 1px solid;
  @media ${devices.mobileL} {
    display: inline;
    margin-right: 4rem;
  }
`;
