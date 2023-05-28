import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Section = styled.section`
  margin-bottom: 35px;

  @media screen and (min-width: 768px) {
    margin-bottom: 45px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 55px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  width: 70%;

  list-style: none;

  background-color: #1e1b33;
  border-radius: 12px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const PopularMovies = styled.h2`
  font-family: "Outfit", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;

  letter-spacing: -0.014em;
  margin-bottom: 10px;

  color: rgba(231, 231, 231, 0.24);
`;

export const WatchAllLink = styled(Link)`
  font-weight: 500;
  font-size: 1.2rem;

  text-transform: uppercase;
  text-decoration: none;

  color: rgba(224, 30, 90, 0.5);

  transition: color 300ms;

  &:hover,
  &:focus {
    color: #c2294a;
  }
`;
