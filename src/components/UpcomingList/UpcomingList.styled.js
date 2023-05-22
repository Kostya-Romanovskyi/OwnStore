import styled from "@emotion/styled";
import { css } from "@emotion/react";
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

export const UpcomingMovies = styled.h2`
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
`;

export const ListWrapper = styled.ul`
  margin-bottom: 35px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;

    align-items: center;
  }
`;

export const card0 = css`
  grid-area: 1 / 1 / 3 / 2;
  display: flex;

  width: 100%;
  height: auto;

  padding: 10px 15px;

  background-color: #1e1b33;
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    height: 100%;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;
export const card1 = css`
  grid-area: 1 / 2 / 2 / 3;

  display: flex;

  width: 100%;
  height: auto;

  padding: 10px 15px;

  background-color: #1e1b33;
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;
export const card2 = css`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;

  width: 100%;
  height: auto;

  padding: 10px 15px;

  background-color: #1e1b33;
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const StyleLink = styled(Link)`
  display: block;
  width: 100%;

  text-decoration: none;
`;

export const FlexWrapp = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Poster = styled.img`
  width: 98px;
  height: auto;

  border-radius: 8px;

  @media screen and (min-width: 1200px) {
    width: 125px;
  }
`;

export const InfoWrapp = styled.div`
  width: 100%;

  margin-left: 10px;
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.17;

  color: #ffffff;
`;
export const Date = styled.p`
  font-size: 0.7rem;
  line-height: 0.75;

  color: #c0c0c0;
`;
export const Vote = styled.p`
  font-size: 0.7rem;
  line-height: 0.75;

  color: #c0c0c0;
`;

export const LikeButton = styled.p`
  font-size: 0.7rem;
  line-height: 0.75;

  color: #c0c0c0;
`;

export const TitleWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;

  @media screen and (min-width: 1200px) {
    padding-top: 3px;
    margin-bottom: 30px;
  }
`;

export const SpecialTitleWrapp = styled(TitleWrapp)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    margin-bottom: 17px;
    padding-top: 7px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 30px;
  }
`;

export const StatWrapp = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Overview = styled.p`
  font-size: 0.9rem;

  margin-bottom: 20px;

  color: #c0c0c0;

  @media screen and (min-width: 1200px) {
    margin-bottom: 60px;
  }
`;
