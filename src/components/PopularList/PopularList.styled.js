import styled from "@emotion/styled";

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
  /* line-height: 0.5rem; */

  letter-spacing: -0.014em;
  margin-bottom: 10px;

  color: rgba(231, 231, 231, 0.24);
`;

export const WatchAll = styled.span`
  font-weight: 500;
  font-size: 1.2rem;

  text-transform: uppercase;

  color: rgba(224, 30, 90, 0.5);
`;

export const Poster = styled.img`
  width: 90%;
  height: auto;

  padding: 17px;

  border-radius: 25px;
`;

export const PosterWrapper = styled.img`
  padding: 24px;
`;

export const Container = styled.div`
  padding: 0 17px 0 17px;
`;

export const FlexWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleFilm = styled.p`
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.2%;

  margin-bottom: 30px;

  color: #ffffff;
`;

export const Statistic = styled.p`
  font-family: "Outfit", sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.2%;

  margin-bottom: 30px;

  color: #ffffff;
`;

export const Button = styled.button`
  font-family: "Outfit", sans-serif;

  font-weight: 600;
  font-size: 14px;
  line-height: 14px;

  width: 100%;

  text-align: center;
  text-transform: uppercase;

  padding: 12px 0;
  margin-bottom: 15px;

  cursor: pointer;

  color: #ffffff;

  background-color: #1e1b33;
  border: 1px solid rgba(231, 231, 231, 0.4);
  border-radius: 8px;

  &:hover,
  &:focus {
    background: linear-gradient(89.62deg, #0500fa 7.09%, #e01e5a 92.23%);
  }
`;
