/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import {NavLink} from "react-router-dom"
import Brand from './Brand';
import Burgermenu from './Burgermenu';
import CollapseMenu from './CollapseMenu';
import { Button } from "@material-ui/core"

const NavBar = styled(animated.div)`
position: fixed;
width: 100%;
top: 0;
left: 0;
background: #FFCB2D;
z-index: 100;
font-size: 1rem;
box-shadow: 0 0 40px rgb(0 0 0 / 10%);
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 4rem;
  box-shadow: 0px 10px 18px rgba(17, 19, 35, 0.08);
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      // border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 1100px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 1100px) {
    display: none;
  }
`;

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'trasnlate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
          <a href='/'></a>
            <NavLink exact to='/' activeClassName="active">Beranda</NavLink>
            <a href='#about'>About Me</a>
            <NavLink to='/cara-pesan' activeClassName="active">Portfolio</NavLink>
            <NavLink to='/testimoni' activeClassName="active">
              <Button variant="contained" style={{ backgroundColor: "#23A036", borderRadius: "30px", fontFamily: "Nunito", color: "#ffff", padding: ".5rem 2rem"}}> Contact Me </Button>
            </NavLink>
          </NavLinks>
          <BurgerWrapper>
            <Burgermenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper> 
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};
export default Navbar;
