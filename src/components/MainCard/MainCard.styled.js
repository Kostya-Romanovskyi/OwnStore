import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Poster = styled.img`
  width: 90%;
  height: auto;

  padding: 17px;

  border-radius: 25px;

  @media screen and (min-width: 768px) {
    height: 280px;
  }
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
  font-size: 1rem;
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

export const Button = styled(Link)`
  display: block;

  font-weight: 600;
  font-size: 14px;
  line-height: 14px;

  width: 100%;

  text-align: center;
  text-transform: uppercase;

  text-decoration: none;

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
