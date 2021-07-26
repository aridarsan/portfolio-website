import React from 'react';
import { Grid, Container, Button, Slider, Hidden } from '@material-ui/core';
import about from '../Images/about.svg';
import programming from '../Images/programming.svg';
import user from '../Images/Icon/user.svg';
import football from '../Images/Icon/football.svg';
import location from '../Images/Icon/location.svg';
import { withStyles } from '@material-ui/core/styles';

import html5 from '../Images/Icon/html5.svg';
import css3 from '../Images/Icon/css3.svg';
import reacts from '../Images/Icon/react.svg';
import laptop from '../Images/Icon/laptop.svg';
import illustration from '../Images/Icon/illustration.svg';
import javascript from '../Images/Icon/javascript.svg';

const who = [
  {
    img: user,
    name: 'Profile',
    desc: 'I am always want to learn new things, honest and responsible.',
  },
  {
    img: location,
    name: 'Address',
    desc: 'I live in Tasikmalaya, a small town in the southern West Java.',
  },
  {
    img: football,
    name: 'Hobby',
    desc: 'I really enjoy to playing football or futsal, playing games and coding.',
  },
];

const skillset = [
  {
    img: html5,
    name: 'HTML',
    value: 80,
  },
  {
    img: reacts,
    name: 'React',
    value: 85,
  },
  {
    img: css3,
    name: 'CSS',
    value: 90,
  },
  {
    img: laptop,
    name: 'UI/UX',
    value: 85,
  },
  {
    img: javascript,
    name: 'Javascript',
    value: 85,
  },
  {
    img: illustration,
    name: 'Logo',
    value: 80,
  },
];

const PrettoSlider = withStyles({
  root: {
    color: '#23a036',
    height: 10,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const About = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent='center'
          id='about'
          style={{ padding: '3rem 0 2rem' }}
        >
          <Grid item>
            <h2>
              <span>About Me</span>
            </h2>
            <hr className="line-tittle" />
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item lg={6} xs={12}>
            <h3 style={{ marginTop: '1rem' }}>
              <span className='about-h3'>WHO AM I</span>
            </h3>

            <hr className="line" />

            <h5
              style={{
                fontWeight: '400',
                color: '#646369',
                lineHeight: '1.5',
                margin: '2rem 0',
              }}
            >
              Hello, i am someone who has skill in{' '}
              <span style={{ color: '#FFCB2D', fontWeight: '600' }}>
                Web Development
              </span>
              , especially using React JS, wich is library developed by
              Facebook and also has the skill in the field of graphic design,
              especially in the field of{' '}
              <span style={{ color: '#FFCB2D', fontWeight: '600' }}>
                UI/UX Design and Logo Design
              </span>
              .
            </h5>

            <Grid container spacing={2} justifyContent='center'>
              {who.map((item, index) => (
                <Grid item lg={4} xs={4} key={index} className='about'>
                  <Grid container justifyContent='center'>
                    <div className='medsos' style={{ margin: '1rem 0' }}>
                      <img src={item.img} alt='profil' width='80%' />
                    </div>
                  </Grid>

                  <h4 style={{ margin: '1rem 0', textAlign: 'center' }}>
                    {item.name}
                  </h4>

                  <p style={{ textAlign: 'center' }}>{item.desc}</p>
                </Grid>
              ))}
            </Grid>

            <Grid container style={{ margin: '2rem 0' }}>
              <Grid item lg={4} md={6} xs={12} style={{ margin: '.5rem 1rem' }}>
                <Button
                  size='large'
                  variant='contained'
                  color='primary'
                  style={{
                    borderRadius: '30px',
                    backgroundColor: '#23A036',
                    fontFamily: 'Nunito',
                    width: '100%',
                  }}
                >
                  Download CV
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={6} xs={12}>
            <Hidden mdDown>
              <Grid container justifyContent='center'>
                <img src={about} alt='about' width='80%' />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item lg={6} xs={12} style={{ padding: '0' }}>
            <Grid container justifyContent='center'>
              <img src={programming} alt='about' width='80%' />
            </Grid>
          </Grid>

          <Grid item lg={6} xs={12}>
            <h3 style={{ marginTop: '1rem 0' }}>
              <span className='about-h3'>SKILL SET</span>
            </h3>

          <hr className="line" />

            <Grid container spacing={2} justifyContent='center' style={{marginTop: "1rem"}}>
              {skillset.map((item, index) => (
                <Grid item lg={6} xs={6} key={index} className='setskill'>
                  <div className='skill' style={{ margin: '1rem 0' }}>
                    <img src={item.img} alt='profil' width='80%' />
                    <h4>{item.name}</h4>
                  </div>

                  <PrettoSlider
                    valueLabelDisplay='auto'
                    aria-label='pretto slider'
                    value={item.value}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default About;
