import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
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
