import React from 'react';
import { Grid, Container, TextField, Button, Hidden } from '@material-ui/core';
import email from '../Images/email.svg';
import website from '../Images/website.svg';
import whatsapp from '../Images/Icon/whatsapp.svg';
import mail from '../Images/Icon/email.svg';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: '#23a036',
      borderWidth: 2,
    },
    '& input': {
      maxLength: 4
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important'
    },
    '& textarea:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important'
    },
    '& textarea:valid + fieldset': {
      borderColor: '#23a036',
      borderWidth: 2,
    },
    '& textarea:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
  }
})(TextField);

const Hire = () => {
  const [name, setName] = React.useState('');
	const [order, setOrder] = React.useState("");
	const [messages, setMessages] = React.useState("")

  const wa = "https://wa.me/6285156549458?text="
  const pesan1 = "Name%20%3A%20" + encodeURIComponent(name);
  // eslint-disable-next-line
  const pesan2 = "%0A" + "Order%20%3A%20" + encodeURIComponent(order);
  // eslint-disable-next-line
  const pesan3 = "%0A" + "Messages%20%3A%20" + encodeURIComponent(messages);

  const url = wa + pesan1 + pesan2 + pesan3

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

            <hr className="line-tittle" />
          </Grid>
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
            <h3 style={{ marginTop: '1rem' }}>
              <span className='about-h3'> Get in Touch </span>
            </h3>

            <hr className="line" />

            <form name="contact" style={{marginTop: "2rem"}}>

            <ValidationTextField
              label='Fullname'
              variant="outlined"
              className='inputan'
              onChange={(e) => setName(e.target.value)}
              maxLength="2"
            />

            <ValidationTextField
              label='What you want'
              variant="outlined"
              className='inputan'
              onChange={(e) => setOrder(e.target.value)}
            />

            <ValidationTextField
              label='Messages'
              variant="outlined"
              className='inputan'
              onChange={(e) => setMessages(e.target.value)}
              multiline
              rows={5}
            />

            <Grid container>
              <Grid item xs={12} md={5} lg={3}>
              <a href={url} target="_blank" rel="noreferrer">
                <Button
                  size='large'
                  variant='contained'
                  className='btn btn-primary'
                >
                  Submit &nbsp;  <SendIcon/>
                </Button>
                </a>
              </Grid>
            </Grid>

            </form>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent='center'>
          <Grid
            item
            lg={6}
            xs={12}
            className='shadow'
            style={{ padding: '2rem', margin: "2rem 0" }}
          >
            <h1>100% Satisfaction Guaranteed</h1>

            <h4>What you can get?</h4>

            <p>&bull; &nbsp; High quality project work</p>

            <p>&bull; &nbsp;Good communication</p>

            <p>&bull; &nbsp;Unlimited revision until you satisfied</p>

            <p>&bull; &nbsp;Best price project</p>
          </Grid>

          <Hidden mdDown>
            <Grid item lg={6} xs={12}>
              <Grid container justifyContent='center'>
                <img src={website} alt='hire' width='80%' />
              </Grid>
            </Grid>
          </Hidden>
        </Grid>

        <Grid container justifyContent="center" style={{marginBottom: "2rem"}}>
          <Grid item style={{ borderRadius: "50px", margin: "1rem" }} className="shadow hire">
          <a href="mailto:aridarsan09@gmail.com" target="_blank" rel="noreferrer">
            <Grid container alignItems="center">
              <Grid item>
                <div
                  className='medsos-foot'
                  style={{ height: '3rem', width: '3rem' }}
                >
                  <img src={mail} alt='profil' width='80%' />
                </div>
              </Grid>

              <Grid item>
                <h4 style={{margin: "0 2rem 0 1rem"}}>aridarsan09@gmail.com</h4>
              </Grid>
            </Grid>
            </a>
          </Grid>

          <Grid item style={{ borderRadius: "50px", margin: "1rem" }} className="shadow hire">
          <a href="https://wa.me/6285156549458" target="_blank" rel="noreferrer">
            <Grid container alignItems="center">
              <Grid item>
                <div
                  className='medsos-foot'
                  style={{ height: '3rem', width: '3rem' }}
                >
                  <img src={whatsapp} alt='profil' width='80%' />
                </div>
              </Grid>

              <Grid item>
                <h4 style={{margin: "0 2rem 0 1rem"}}>085156549458</h4>
              </Grid>
            </Grid>
            </a>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Hire;
