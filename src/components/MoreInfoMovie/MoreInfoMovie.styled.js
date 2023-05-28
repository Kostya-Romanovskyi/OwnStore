import styled from "@emotion/styled";

export const MoreInfoStyled = styled.h3`
  font-weight: 300;
  font-size: 20px;
  line-height: 1.6;

  margin-bottom: 20px;

  color: rgba(231, 231, 231, 0.24);
`;

export const SectionMore = styled.div`
  margin-bottom: 40px;
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

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;
export const ItemStyled = styled.li`
  width: 45%;
`;

export const NumberStyled = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1.11;

  letter-spacing: -0.014em;

  /* Linear */

  background: linear-gradient(182deg, #0500fa 7.09%, #e01e5a 92.23%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media screen and (min-width: 768px) {
    font-size: 1.7rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 2rem;
  }
`;
export const TextStyled = styled.p`
  font-weight: 400;
  font-size: 19px;
  line-height: 1.2;

  letter-spacing: -0.014em;

  color: #ffffff;
`;
