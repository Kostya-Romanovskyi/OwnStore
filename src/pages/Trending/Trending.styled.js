import styled from "@emotion/styled";

export const MainContainer = styled.div`
  position: relative;

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

export const TrendingMovies = styled.h2`
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 1.2;

  text-align: center;

  letter-spacing: -0.014em;

  margin-bottom: 20px;

  background: linear-gradient(89.62deg, #06045b 7.09%, #e01e5a 92.23%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;
