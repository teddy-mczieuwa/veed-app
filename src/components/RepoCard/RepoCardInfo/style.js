import styled from "styled-components";

export const RepoCardWrapper = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

export const RepoCardInfoImg = styled.img`
  display: block;
  margin: 0.8rem auto;
  width: 100px;
  border-radius: 50%;
  box-shadow: ${(prop) => prop.theme.shadow};
`;

export const RepoCardInfoLabel = styled.span`
  border-radius: 5px;
  padding: 5px 8px;
  margin-right: 5px;
  font-size: 0.8rem;
  font-weight: 300;
  color: ${(prop) => prop.theme.white};
  background-color: ${(prop) => prop.theme.primary};
`;

export const RepoCardInfoText = styled.p`
  font-size: 0.8rem;
  line-height: 1.4rem;
  font-weight: 100;
  color: ${(prop) => prop.theme.primary};
  text-align: left;
`;

export const RepoInfoLink = styled.a`
  font-size: 0.7rem;
  border-radius: 5px;
  cursor: pointer;
  padding: 2px 10px;
  display: inline-block;
  text-decoration: none;
  color: ${(prop) => prop.theme.white};
  background-color: ${(prop) => prop.theme.primary};
`;
