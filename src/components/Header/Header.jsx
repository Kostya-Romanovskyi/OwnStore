import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
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
    LogOut,
    StyledWrapp,
    UsersName
} from "../Header/Header.styled";
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import { useLocation } from "react-router-dom";
import { authInfo } from "../../Redux/Slices/AuthSlice";

import SignIn from "../../Redux/Auth/SignIn";
import { logOut } from "../../Redux/Slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation()
    const authInfoSel = useSelector(authInfo)
    console.log(authInfoSel)
    const dispatch = useDispatch()

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLogOut = () => {
        dispatch(logOut())

        localStorage.setItem('auth', '')
    }
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
                                    <NavLink onClick={handleToggle} to="/"
                                        style={{ color: pathname === '/' ? "#ffffff" : "#c0c0c0" }}>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={handleToggle} to="/search"
                                        style={{ color: pathname === '/search' ? "#ffffff" : "#c0c0c0" }}>
                                        Search
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={handleToggle} to="/library"
                                        style={{ color: pathname === '/library' ? "#ffffff" : "#c0c0c0" }}>
                                        Library
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={handleToggle} to="/about"
                                        style={{ color: pathname === '/about' ? "#ffffff" : "#c0c0c0" }}>
                                        About me
                                    </NavLink>
                                </NavItem>
                            </NavList>

                        </Navigation>

                        {authInfoSel.isLoggedIn ?
                            <StyledWrapp>
                                <UsersName>Hi,{authInfoSel.name}</UsersName>
                                <LogOut onClick={handleLogOut}>LogOut</LogOut>
                            </StyledWrapp>
                            :


                            <StyledWrapp>
                                <SignIn />
                            </StyledWrapp>

                        }

                    </MobileWrapp>

                </HeaderContainer>
            </HeaderBackground>

            <Outlet />
        </>
    );
};
export default Header;
