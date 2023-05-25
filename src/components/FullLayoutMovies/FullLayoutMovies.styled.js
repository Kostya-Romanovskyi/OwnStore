import styled from "@emotion/styled";
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
