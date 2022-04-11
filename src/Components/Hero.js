import React from 'react';
import '../App.css';
import AutoTyping, { BlinkCursor } from 'react-auto-typing';
import { Grid, Container, Button } from '@material-ui/core';
import ari from '../Images/ari.png';
import facebook from '../Images/Icon/facebook.svg';
import instagram from '../Images/Icon/instagram.svg';
// import whatsapp from '../Images/Icon/whatsapp.svg';
import twitter from '../Images/Icon/twitter.svg';
import dribbble from '../Images/Icon/dribbble.svg';
import github from '../Images/Icon/github.svg';
import email from '../Images/Icon/email.svg';
import linkedin from '../Images/Icon/linkedin.svg';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const icon = [
  {
    url: 'https://facebook.com/darsan.ari',
    icon: facebook,
  },
  {
    url: 'https://instagram.com/ari_darsan',
    icon: instagram,
  },
  // {
  //   url: 'https://wa.me/6281222288153',
  //   icon: whatsapp,
  // },
  {
    url: 'https://twitter.com/darsan_ari',
    icon: twitter,
  },
  {
    url: 'https://dribbble.com/aridarsan',
    icon: dribbble,
  },
  {
    url: 'https://github.com/aridarsan',
    icon: github,
  },
  {
    url: 'mailto:aridarsan09@gmail.com',
    icon: email,
  },
  {
    url: 'https://www.linkedin.com/in/aridarsan',
    icon: linkedin,
  },
];

function Hero() {
  return (
    <React.Fragment>
      <div className='wave1'>
        <Container maxWidth='lg'>
          <Grid
            container
            justifyContent='center'
            style={{ textAlign: 'center' }}
          >
            <Grid item xs={12}>
              <h1 style={{ color: '#ffffff' }}>
                <span style={{ color: '#646369' }}>Hi, I&#39;m &#32;</span>
                <AutoTyping
                  active // <boolean>
                  textRef=' Ari Darsan' // <string>
                  writespeed={150} // <number>
                  deletespeed={150} // <number>
                  delayToWrite={1000} // <number>
                  delayToDelete={2000} // <number>
                />
                <BlinkCursor
                  active // <boolean>
                  blinkSpeed={500} // <number>
                />
              </h1>
              <h3 style={{ color: '#4F4F4F' }}>
                Freelance Designer & Web Developer
              </h3>
              <h5 style={{ color: '#4F4F4F' }}>
                I&#39;m always thirsty for experience, skill and knowledge
              </h5>
            </Grid>
          </Grid>

          <Grid container justifyContent='center'>
            <Grid item lg={3} md={6} xs={6}>
              <img src={ari} className='img-profil' alt='profil' width='100%' />
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container maxWidth='lg'>
        <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Social Media
        <hr className="line-tittle" />
        </h3>

        <Grid container justifyContent='center'>
          {icon.map((item, index) => (
            <div className='medsos' key={index}>
              <a href={item.url} target='_blank' rel='noreferrer'>
                <img src={item.icon} alt='profil' className="hero-icon" width='80%' />
              </a>
            </div>
          ))}
        </Grid>

        <Grid container justifyContent='center' style={{ margin: '2rem 0 0' }}>
          <Grid item xs={12} md={5} lg={2} style={{ margin: '.5rem 1rem' }}>
          <a href="#portfolio">
            <Button size='large' variant='outlined' className='btn btn-second'>
              See my work
            </Button>
            </a>
          </Grid>

          <Grid item xs={12} md={5} lg={2} style={{ margin: '.5rem 1rem' }}>
          <a href="#hire">
            <Button size='large' variant='contained' className='btn btn-primary'>
              Hire Me &nbsp; <ArrowForwardIosRoundedIcon />
            </Button>
          </a>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Hero;
