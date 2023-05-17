import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
// import { Suspense } from "react"
import Logo from "../../assets/Logo.png";
import {
    HeaderBackground,
    LogoWrapper,
    LogoText,
    MobileWrapp,
    NavList,
    NavItem,
    HeaderContainer,
} from "../Header.styled";

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
                        <img src={Logo} alt="Logo" />
                        <LogoText>ownCINEMA</LogoText>
                    </LogoWrapper>
                    <button onClick={handleToggle} type="button">
                        burg
                    </button>
                    <MobileWrapp open={isOpen}>
                        <button onClick={handleToggle} type="button">
                            ex
                        </button>
                        <nav>
                            <NavList>
                                <NavItem>
                                    <Link onClick={handleToggle} to="/search">
                                        Search
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link onClick={handleToggle} to="/favorite">
                                        Favorite
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link onClick={handleToggle} to="/library">
                                        Library
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link onClick={handleToggle} to="/about">
                                        About us
                                    </Link>
                                </NavItem>
                            </NavList>
                        </nav>
                        <div>
                            <button type="button">Log In</button>
                            <button type="button">Register</button>
                        </div>
                    </MobileWrapp>
                </HeaderContainer>
            </HeaderBackground>
            <Outlet />
        </>
    );
};
export default Header;
