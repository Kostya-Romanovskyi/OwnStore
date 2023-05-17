import styled from "@emotion/styled";

export const HeaderBackground = styled.header`
  background-color: #04011c;
  box-shadow: 0px 20px 40px rgba(205, 28, 104, 0.08);
`;

export const HeaderContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 8px 0 8px;

  @media screen and (min-width: 420px) {
    width: 420px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 12px 0 12px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding: 0 16px 0 16px;
  }
`;

export const LogoWrapper = styled.header`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.p`
  color: #ffffff;
`;

export const MobileWrapp = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
  transform: translateX(110%);
  opacity: 0;
  transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);

  ${(props) =>
    props.open &&
    `
    transform: translateX(0);
    opacity: 1;
    `}

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavItem = styled.ul`
  /* margin-left: 15px; */
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
