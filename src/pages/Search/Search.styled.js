import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";

export const MainContainer = styled.div`
  position: relative;

  margin: 0 auto;
  padding: 0px 8px 0px 8px;
  @media screen and (min-width: 420px) {
    max-width: 420px;
  }

  @media screen and (min-width: 767px) {
    max-width: 767px;
    padding: 30px 12px 30px 12px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 40px 16px 40px 16px;
  }
`;

export const TitleStyled = styled.h2`
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.014em;
  margin-bottom: 20px;
  background: linear-gradient(89.62deg, #06045b 7.09%, #e01e5a 92.23%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const StyledForm = styled.form`
  position: relative;
  margin-bottom: 30px;

  @media screen and (min-width: 1200px) {
    width: 748px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;

export const CustomInput = styled(TextField)`
  width: 100%;

  input {
    font-size: 1.2rem;

    color: #31398c;
  }

  fieldset {
    border-image-slice: 1;
    border-image-source: linear-gradient(
      89.62deg,
      #0500fa 7.09%,
      #e01e5a 92.23%
    );
  }

  label {
    font-size: 1.2rem;

    color: #2f3363;
  }
`;

export const StyledStack = styled(Stack)`
  ul li button {
    color: #fff;

    border-color: #fff;

    @media screen and (max-width: 767px) {
      min-width: 15px;
      min-height: 15px;
    }
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 8px;
  right: 15px;

  width: 50px;
  height: 50px;

  background: transparent;
  border: none;

  cursor: pointer;
`;
