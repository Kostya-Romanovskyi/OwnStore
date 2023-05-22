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

export const GridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 100px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Item = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Poster = styled.img`
  width: 100%;

  border-radius: 10px;
`;

export const InfoWrapp = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;

  padding: 20px;

  width: 100%;

  background-color: #1e1b33;
`;
