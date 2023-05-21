import styled from "@emotion/styled";

export const MainContainer = styled.div`
  margin: 0 auto;
  padding: 0px 8px 0px 8px;

  @media screen and (min-width: 420px) {
    max-width: 420px;
  }

  @media screen and (min-width: 767px) {
    max-width: 767px;
    padding: 30px 12px 30px 12px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 40px 16px 40px 16px;
  }
`;

export const TitleWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 25px;
  /* font-size: 64px; */
  line-height: 1.25;

  letter-spacing: -0.014em;

  margin-bottom: 30px;

  color: #ffffff;
`;

export const ImgMobile = styled.img`
  @media screen and (max-width: 767px) {
    display: block;
    width: 80%;

    margin-bottom: 30px;
  }
  display: none;
`;

export const OverviewStyled = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.16;
  /* font-size: 24px;
  line-height: 1.56; */

  margin-bottom: 30px;

  color: #ffffff;
`;

export const Img = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    width: 100%;
    display: block;
  }
`;

export const MoreInfoStyled = styled.h3`
  font-weight: 300;
  font-size: 20px;
  line-height: 1.6;

  margin-bottom: 20px;

  color: rgba(231, 231, 231, 0.24);
`;

export const Info = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;

  color: rgba(224, 30, 90, 0.5);
`;

export const ListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  text-align: center;
`;
export const ItemStyled = styled.li`
  width: 45%;
`;

export const NumberStyled = styled.p`
  font-weight: 600;
  font-size: 25px;
  line-height: 1.11;

  letter-spacing: -0.014em;

  /* Linear */

  background: linear-gradient(182deg, #0500fa 7.09%, #e01e5a 92.23%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
export const TextStyled = styled.p`
  font-weight: 400;
  font-size: 19px;
  line-height: 1.2;

  letter-spacing: -0.014em;

  color: #ffffff;
`;
