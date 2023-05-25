import styled from "@emotion/styled";

export const MainContainer = styled.div`
  margin: 0 auto;
  padding: 30px 8px 30px 8px;

  @media screen and (min-width: 420px) {
    max-width: 420px;
  }

  @media screen and (min-width: 768px) {
    max-width: 767px;
    padding: 40px 12px 40px 12px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 70px 16px 70px 16px;
  }
`;

export const FlexWrapp = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;
