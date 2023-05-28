import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const SectionStyled = styled.section`
  margin-bottom: 40px;
`;

export const InfoSearchWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 0;

  border-top: 1px solid rgba(231, 231, 231, 0.24);
  border-bottom: 1px solid rgba(231, 231, 231, 0.24);

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InfoWrapp = styled.div`
  margin-left: 15px;

  @media screen and (min-width: 768px) {
    margin-left: 60px;
  }
`;

export const RubyImg = styled.img`
  position: relative;
  top: 0;
  left: -11px;
  width: 100%;
  height: auto;

  padding-top: 20px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const TitleSearch = styled.h2`
  font-weight: 500;
  font-size: 44px;
  line-height: 1.18;

  padding-top: 15px;
  margin-bottom: 30px;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    padding-top: 90px;
  }
`;

export const InfoSearch = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.78;

  margin-bottom: 40px;

  color: #c0c0c0;
`;

export const SearchButton = styled(Link)`
  padding: 8px 16px;
  margin-right: 10px;

  background: linear-gradient(89.62deg, #0500fa 7.09%, #e01e5a 92.23%);
  border: none;
  border-radius: 8px;

  text-decoration: none;

  cursor: pointer;

  color: #ffffff;
  transition: box-shadow 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 20px;
    padding: 12px 20px 12px 20px;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 0px 20px 5px rgba(5, 0, 250, 0.5),
      0px 0px 20px 5px rgba(224, 30, 90, 0.5);
  }
`;
