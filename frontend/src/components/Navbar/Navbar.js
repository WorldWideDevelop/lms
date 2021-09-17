import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiMoon, BiSun } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Arg from "../../assets/img/arg.svg";
import Uk from "../../assets/img/uk.svg";
import {
  Container,
  Flag,
  LangIcon,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
  ThemeIcon,
  Wrapper,
} from "./Navbar.elements";

const Navbar = ({ theme, toggleTheme }) => {
  const [t, i18n] = useTranslation("global");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Link to="/">{t("navbar.logo")} </Link>
        </LogoContainer>

        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <Menu open={showMobileMenu}>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              HOME
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              HOME
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink
              to="/register"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {t("navbar.register")}
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink
              to="/login"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {t("navbar.login")}
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <ThemeIcon onClick={toggleTheme}>
              {theme === "default" ? (
                <BiMoon color="black" onClick={toggleTheme} />
              ) : (
                <BiSun color="yellow" onClick={toggleTheme} />
              )}
            </ThemeIcon>
          </MenuItem>
          <MenuItem>
            <LangIcon>
              {i18n.language === "en" ? (
                <Flag
                  src={Arg}
                  onClick={() => {
                    i18n.changeLanguage("es");
                    // console.log(i18n.language);
                  }}
                />
              ) : (
                <Flag
                  src={Uk}
                  onClick={() => {
                    i18n.changeLanguage("en");
                    // console.log(i18n.language);
                  }}
                />
              )}
            </LangIcon>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
