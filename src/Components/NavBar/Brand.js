import React from 'react';
import styled from 'styled-components';
import logo from '../../Images/logo.png';
import { Link } from 'react-router-dom';

const Brand = () => {
  return (
    <Link to='/'>
      {' '}
      <Image src={logo} alt='ari logo' />
    </Link>
  );
};

export default Brand;

const Image = styled.img`
  height: 2rem;
  margin: 1rem 0;
`;
