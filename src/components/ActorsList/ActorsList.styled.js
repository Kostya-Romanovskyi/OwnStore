import styled from "@emotion/styled";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;

  margin-bottom: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);

    gap: 15px;
  }
`;

export const Item = styled.li`
  width: 100%;

  padding: 24px;

  background: #1e1b33;
  border: 1px solid rgba(231, 235, 238, 0.4);
  border-radius: 12px;

  /* @media screen and (min-width: 768px) {
    width: 200px;

    padding: 10px;
  } */
`;

export const Photo = styled.img`
  display: block;
  width: 100%;

  margin-bottom: 20px;

  border-radius: 10px;

  @media screen and (min-width: 768px) {
    height: 260px;
  }
`;

export const Name = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 0.9;

  color: #ffffff;

  margin-bottom: 20px;
`;

export const TextWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 15px;
  margin-bottom: 10px;

  border-bottom: 1px solid rgba(231, 231, 231, 0.24);
`;

export const Duty = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 1;

  text-align: center;
  text-transform: capitalize;

  white-space: pre-wrap;

  color: #ffffff;
`;

export const Popularity = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 1;

  text-align: center;
  text-transform: capitalize;

  color: #ffffff;
`;

export const Character = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 1;

  text-align: center;
  text-transform: capitalize;

  color: #ffffff;
`;

export const EmptyCast = styled.p`
  text-align: center;

  font-weight: 700;
  font-size: 4rem;
  line-height: 0.83;

  letter-spacing: -0.014em;

  background: linear-gradient(89.62deg, #06045b 7.09%, #e01e5a 92.23%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
