import React from 'react';
import { Grid, Container } from '@material-ui/core';
import reacts from '../Images/Icon/react.svg';
import laptop from '../Images/Icon/laptop.svg';
import illustration from '../Images/Icon/illustration.svg';

const service = [
  {
    name: 'Web Development',
    desc: 'I will create website with your requirements using React JS, so that will be amazing',
    img: reacts,
  },
  {
    name: 'UI/UX Design',
    desc: 'User friendly site is become from good experience, so if you need for that, i am good person',
    img: laptop,
  },
  {
    name: 'Logo Design',
    desc: 'Many logo had been create, the visualisation come from long reasearch before ideas come',
    img: illustration,
  },
];

const Services = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent='center'
          id='services'
          style={{ padding: '3rem 0 2rem' }}
        >
          <Grid item>
            <h2>
              <span>Services</span>
            </h2>
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent='center'>
          {service.map((item, index) => (
            <Grid item lg={4} xs={12} className='about' key={index}>
              <Grid container justifyContent='center'>
                <div
                  className='medsos'
                  style={{ margin: '1rem 0', height: '5rem', width: '5rem' }}
                >
                  <img src={item.img} alt='profil' width='90%' />
                </div>
              </Grid>

              <h4 style={{ margin: '1rem 0', textAlign: 'center' }}>
                {item.name}
              </h4>

              <p style={{ textAlign: 'center', padding: '0 1rem' }}>
                {item.desc}
              </p>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Services;
