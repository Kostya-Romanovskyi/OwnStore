import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;

  width: 375px;

  padding: 10px 15px;
  border-radius: 8px;

  background-color: #1e1b33;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 361px;

    &:last-child {
      width: 100%;
    }
  }
`;
