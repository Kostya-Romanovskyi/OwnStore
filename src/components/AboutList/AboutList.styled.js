import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;

  margin-bottom: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);

    gap: 15px;
  }
`;

export const Item = styled.li`
  position: relative;

  margin-bottom: 80px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 8px;
`;

export const InfoWrapp = styled.div`
  position: absolute;
  bottom: -37%;
  left: 6%;
  width: 90%;

  padding: 15px;

  color: #ffffff;

  background-color: #1e1b33;
  border-radius: 8px;
`;

export const Name = styled.h3`
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 0.7rem;
  margin-bottom: 15px;
`;

export const FlexWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  display: block;

  width: 79px;

  padding: 8px 16px;

  cursor: pointer;

  text-decoration: none;

  color: #ffffff;

  background: linear-gradient(89.62deg, #0500fa 7.09%, #e01e5a 92.23%);
  border: none;
  border-radius: 8px;

  transition: box-shadow 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 0px 20px 5px rgba(5, 0, 250, 0.5),
      0px 0px 20px 5px rgba(224, 30, 90, 0.5);
  }
`;
