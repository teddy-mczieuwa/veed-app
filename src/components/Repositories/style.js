import styled from "styled-components";
import { devices } from "../../theme";

export const RepositoriesWrapper = styled.ul`
  @media ${devices.mobileS} {
    display: flex;
    flex-wrap: wrap;
  }
`;
