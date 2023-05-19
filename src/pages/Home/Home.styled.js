import styled from "@emotion/styled";

export const MainContainer = styled.div`
  position: relative;

  @media screen and (min-width: 420px) {
    max-width: 420px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 30px 12px 30px 12px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 40px 16px 40px 16px;
  }
`;

export const DecorateSircle = styled.div`
  position: absolute;
  top: -47px;
  left: -235px;

  width: 300px;
  height: 300px;

  background: rgba(215, 29, 97, 0.6);
  filter: blur(200px);
`;

export const MainTitle = styled.h1`
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.25;

  text-align: center;

  letter-spacing: -0.014em;

  color: #ffffff;
`;

export const DecorateTitle = styled.span`
  text-transform: uppercase;

  color: #e01e5a;

  @media screen and (min-width: 420px) {
    max-width: 420px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 30px 12px 30px 12px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 40px 16px 40px 16px;
  }
`;
