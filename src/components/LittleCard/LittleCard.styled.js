import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Item = styled.li`
  width: 375px;

  padding: 10px 15px;
  border-radius: 8px;

  background-color: #1e1b33;
  transition: box-shadow 300ms ease-in-out;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 361px;

    &:last-child {
      width: 100%;
    }
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 20px 6px #1e1b33;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const CardWrapp = styled.div`
  display: flex;
`;
