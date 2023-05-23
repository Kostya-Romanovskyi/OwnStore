import styled from "@emotion/styled";

export const GridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;

  margin-bottom: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 210px);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 220px);
  }
`;

export const Item = styled.li`
  text-align: center;
  font-size: 18px;
  background-color: #1e1b33;
  border-radius: 12px;

  height: auto;
`;
