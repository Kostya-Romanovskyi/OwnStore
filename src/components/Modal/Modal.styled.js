import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  position: relative;

  top: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translateY(-50%);

  box-shadow: 50;
`;

export const OpenButton = styled.button`
  position: absolute;
  top: 31%;
  right: 80%;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  border: 1px solid #ffffff;
  border-radius: 50%;

  cursor: pointer;

  background-color: #342d66;
  box-shadow: 0px 4px 40px rgba(4, 1, 28, 0.24);

  @media screen and (min-width: 768px) {
    top: 51%;
    right: -20%;
  }

  @media screen and (min-width: 1200px) {
    top: 50%;
    right: -40%;

    width: 85px;
    height: 85px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;

  top: -25%;
  right: 6%;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border: 1px solid #ffffff;
  border-radius: 50%;

  cursor: pointer;

  background-color: #342d66;
  box-shadow: 0px 4px 40px rgba(4, 1, 28, 0.24);

  @media screen and (min-width: 768px) {
    top: -14%;
    right: 7%;

    width: 45px;
    height: 45px;
  }

  @media screen and (min-width: 1200px) {
    top: -14%;
    right: 17%;

    width: 60px;
    height: 60px;
  }
`;
