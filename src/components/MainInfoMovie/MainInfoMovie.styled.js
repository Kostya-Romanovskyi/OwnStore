import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const TitleWrapp = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;

  width: 100%;

  @media screen and (min-width: 768px) {
    align-items: flex-start;

    width: 50%;

    margin-bottom: 45px;
  }
`;

export const Status = styled.p`
  position: absolute;
  top: -3%;
  right: 11%;

  color: ${({ props }) => (props === "Released" ? "#486e4a" : "red")};

  @media screen and (min-width: 768px) {
    top: -6%;
  }

  @media screen and (min-width: 1200px) {
    top: 0;
    right: 0;
  }
`;

export const BackButton = styled(Link)`
  position: absolute;
  top: -45px;
  left: 5px;

  padding: 8px 16px;
  margin-right: 10px;

  background: linear-gradient(89.62deg, #0500fa 7.09%, #e01e5a 92.23%);
  border: none;
  border-radius: 8px;

  cursor: pointer;

  text-decoration: none;

  color: #ffffff;
  transition: box-shadow 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  @media screen and (min-width: 768px) {
    margin-right: 15px;

    top: -50px;
    left: -6px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 20px;
    padding: 12px 20px 12px 20px;

    top: -70px;
    left: 0;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 0px 20px 5px rgba(5, 0, 250, 0.5),
      0px 0px 20px 5px rgba(224, 30, 90, 0.5);
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 25px;

  line-height: 1.25;

  letter-spacing: -0.014em;

  color: #ffffff;
`;

export const ImgMobile = styled.img`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;

    width: 80%;

    border-radius: 10px;

    margin-bottom: 30px;
  }
`;

export const OverviewStyled = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.16;

  margin-bottom: 30px;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const MobileButtons = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export const PosterWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;

    margin-left: 30px;

    border-radius: 10px;
  }

  @media screen and (min-width: 1200px) {
    display: block;

    margin-left: 182px;

    border-radius: 10px;
  }
`;

export const Img = styled.img`
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 68%;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    height: auto;
  }
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 10px;

  margin-bottom: 30px;
`;

export const GenresItem = styled.li``;

export const GenresText = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;

  color: rgba(231, 231, 231, 0.24);
`;
