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
