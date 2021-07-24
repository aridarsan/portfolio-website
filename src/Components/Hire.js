import React from 'react';
import { Grid, Container, TextField, Button, Hidden } from '@material-ui/core';
import email from '../Images/email.svg';
import website from '../Images/website.svg';

const Hire = () => {
  const [name, setName] = React.useState('');
	const [emails, setEmails] = React.useState("");
	const [messages, setMessages] = React.useState("")
  const [ isSubmitting, setIsSubmitting ] = React.useState(false)

  const validation = () => {
    if (name === "") {
      return false;
    } else if (emails === ""){
      return false;
    } else if (messages === ""){
      return false;
    } else{
      setIsSubmitting(true)
    }
  }

  const form = document.forms['contact']

	const data ={
		name: name,
		email: emails,
		message: messages
	}

	console.log(data)

  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent='center'
          id='hire'
          style={{ padding: '3rem 0 2rem' }}
        >
          <Grid item>
            <h2>
              <span>Hire Me</span>
            </h2>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent='center'>
          <Grid
            item
            lg={6}
            xs={12}
            className='shadow'
            style={{ padding: '2rem' }}
          >
            <h1>100% Satisfaction Guaranteed</h1>

            <h4>What you can get?</h4>

            <p>High quality project work</p>

            <p>Good communication</p>

            <p>Unlimited revision until you satisfied</p>

            <p>Best price project</p>
          </Grid>

          <Hidden mdDown>
            <Grid item lg={6} xs={12}>
              <Grid container justifyContent='center'>
                <img src={website} alt='hire' width='80%' />
              </Grid>
            </Grid>
          </Hidden>
        </Grid>

        <Grid
          container
          justifyContent='center'
          style={{ margin: '2rem 0' }}
        >
          <Grid item lg={6} xs={12}>
            <Grid container justifyContent='center'>
              <img src={email} alt='hire' width='80%' />
            </Grid>
          </Grid>

          <Grid item lg={6} xs={12}>
            <h3 style={{ margin: '2rem 0' }}>
              <span className='about-h3'> Get in Touch </span>
            </h3>

            <form name="contact">
            <TextField
              id='produk'
              label='Full name'
              variant='outlined'
              color='primary'
              className='inputan'
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              id='produk'
              label='Email Address'
              variant='outlined'
              color='primary'
              className='inputan'
              onChange={(e) => setEmails(e.target.value)}
            />

            <TextField
              id='produk'
              label='Messages'
              multiline
              rows={5}
              variant='outlined'
              color='primary'
              className='inputan'
              onChange={(e) => setMessages(e.target.value)}
            />

            <Grid container>
              <Grid item xs={12} md={5} lg={2}>
                <Button
                  size='large'
                  variant='contained'
                  className='btn-primary'
                >
                  Submit
                </Button>
              </Grid>
            </Grid>

            </form>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Hire;
