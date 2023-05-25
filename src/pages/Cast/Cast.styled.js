import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  position: relative;

  margin: 0 auto;
  padding: 40px 8px 40px 8px;

  @media screen and (min-width: 420px) {
    max-width: 420px;
  }

  @media screen and (min-width: 767px) {
    max-width: 767px;
    padding: 40px 12px 40px 12px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 40px 16px 40px 16px;
  }
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: -15px;
  left: 11px;

  padding: 8px 16px;
  margin-right: 10px;

  background: linear-gradient(89.62deg, #0500fa 7.09%, #e01e5a 92.23%);
  border: none;
  border-radius: 8px;

  cursor: pointer;

  text-decoration: none;

  color: #ffffff;
  transition: box-shadow 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }

  @media screen and (min-width: 1200px) {
    left: 18px;

    margin-right: 20px;
    padding: 12px 20px 12px 20px;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 0px 20px 5px rgba(5, 0, 250, 0.5),
      0px 0px 20px 5px rgba(224, 30, 90, 0.5);
  }
`;
