import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
// import { Suspense } from "react"
import Logo from "../../assets/Logo.png";
import {
    HeaderBackground,
    LogoWrapper,
    LogoImg,
    LogoText,
    Cinema,
    MobileWrapp,
    NavList,
    NavItem,
    HeaderContainer,
    Navigation,
    BurgerButton,
    NavLink,
    AuthWrapp,
    AuthLogIn,
    AuthRegister
} from "../Header/Header.styled";
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <HeaderBackground>
                <HeaderContainer>
                    <LogoWrapper as={Link} to="/">
                        <LogoImg src={Logo} alt="Logo" />
                        <LogoText>own<Cinema>CINEMA</Cinema></LogoText>
                    </LogoWrapper>
                    <BurgerButton onClick={handleToggle} type="button">
                        {isOpen ? <TfiClose size={24} /> : <RxHamburgerMenu size={24} />}
                    </BurgerButton>
                    <MobileWrapp open={isOpen}>
                        <Navigation>
                            <NavList>
                                <NavItem>
                                    <NavLink onClick={handleToggle} to="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={handleToggle} to="/search">
                                        Search
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={handleToggle} to="/library">
                                        Library
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={handleToggle} to="/about">
                                        About us
                                    </NavLink>
                                </NavItem>
                            </NavList>

                        </Navigation>
                        <AuthWrapp>
                            <AuthLogIn type="button">Log In</AuthLogIn>
                            <AuthRegister type="button">Register</AuthRegister>
                        </AuthWrapp>

                    </MobileWrapp>
                </HeaderContainer>
            </HeaderBackground>

            <Outlet />
        </>
    );
};
export default Header;
