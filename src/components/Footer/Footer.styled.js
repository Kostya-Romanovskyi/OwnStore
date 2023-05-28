import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledFooter = styled.footer`
  font-size: 0.7rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;

    padding: 15px 0;
  }

  color: #c0c0c0;
  background-color: #1e1b33;
`;

export const MainContainer = styled.div`
  position: relative;

  margin: 0 auto;
  padding: 15px 8px 15px 8px;
  @media screen and (min-width: 420px) {
    max-width: 420px;
  }

  @media screen and (min-width: 767px) {
    max-width: 767px;
    padding: 20px 12px 20px 12px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 20px 16px 20px 16px;
  }
`;

export const ContentWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  @media screen and (max-width: 767px) {
    margin-left: 10px;
  }

  margin-left: 30px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #c0c0c0;

  transition: color 300ms;

  &:hover {
    color: #ffffff;
  }
`;
