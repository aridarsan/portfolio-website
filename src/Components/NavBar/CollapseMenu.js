import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
// import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Button } from '@material-ui/core';

const CollapseWrapper = styled(animated.div)`
  background: #ffcb2d;
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 1300;
  box-shadow: 0 8px 10px -10px black;
  text-align: center;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  // padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.5rem;
    line-height: 2;
    color: #ffff;
    text-decoration: none;
    cursor: pointer;
    & p {
      margin: 1rem;
    }
    & :hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;

const Hr = styled.hr`
  margin: 0 2rem 0 1rem;
  color: #ffffff;
`;

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <Hr />
          <li>
            <NavLink
              exact
              to='/'
              activeClassName='active'
              onClick={props.handleNavbar}
            >
              <div>
                <p>Home</p>
              </div>
            </NavLink>
          </li>
          <Hr />
          <li>
            <a href='#about' onClick={props.handleNavbar}>
              <div>
                <p>About Me</p>
              </div>
            </a>
          </li>
          <Hr />
          <li>
            <a
              href='#portfolio'
              onClick={props.handleNavbar}
            >
              <div>
                <p>Portfolio</p>
              </div>
            </a>
          </li>
          <Hr />
          <li>
            <NavLink
              to='/testimoni'
              activeClassName='active'
              onClick={props.handleNavbar}
            >
              <div>
                <Button
                  variant='contained'
                  style={{
                    backgroundColor: '#23A036',
                    borderRadius: '30px',
                    fontFamily: 'Nunito',
                    color: '#ffff',
                    padding: '.5rem 2rem',
                    margin: '1rem',
                  }}
                >
                  {' '}
                  Contact Me{' '}
                </Button>
              </div>
            </NavLink>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;
