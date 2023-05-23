import styled from "@emotion/styled";

export const TitleWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;

  width: 100%;

  @media screen and (min-width: 768px) {
    align-items: flex-start;

    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 25px;

  line-height: 1.25;

  letter-spacing: -0.014em;

  margin-bottom: 30px;

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
  /* font-size: 24px;
  line-height: 1.56; */

  margin-bottom: 30px;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    margin-bottom: auto;
  }
`;

export const Img = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;

    width: 44%;

    margin-left: 30px;

    border-radius: 10px;
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
