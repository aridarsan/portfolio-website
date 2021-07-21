import React from "react"
import '../App.css';
import AutoTyping, { BlinkCursor } from 'react-auto-typing';
import { Grid, Container, Button } from '@material-ui/core';
import ari from "../Images/ari.png"
import facebook from "../Images/Icon/facebook.svg"
import instagram from "../Images/Icon/instagram.svg"
import whatsapp from "../Images/Icon/whatsapp.svg"
import twitter from "../Images/Icon/twitter.svg"
import dribbble from "../Images/Icon/dribbble.svg"
import github from "../Images/Icon/github.svg"
import email from "../Images/Icon/email.svg"
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const icon = [
  {
    url: "https://facebook.com/aridarsan",
    icon: facebook
  },
  {
    url: "https://facebook.com/ari_darsan",
    icon: instagram
  },
  {
    url: "https://wa.me/6281222288153",
    icon: whatsapp
  },
  {
    url: "https://twitter.com/",
    icon: twitter
  },
  {
    url: "https://dribbble.com/aridarsan",
    icon: dribbble
  },
  {
    url: "https://github.com/aridarsan",
    icon: github
  },
    {
    url: "mailto:aridarsan09@gmail.com",
    icon: email
  },
]


function Hero() {
  return (
    <React.Fragment>
    <div className="wave1">
      <Container maxWidth='lg'>
        <Grid container justifyContent="center" style={{textAlign: "center"}}>
          <Grid item xs={12}>
            <h1 style={{color: "#ffffff"}}>
              Hi, I&#39;m &#32; 
            <AutoTyping
              active // <boolean>
              textRef=' Ari Darsan' // <string>
              writeSpeed={150} // <number>
              deleteSpeed={150} // <number>
              delayToWrite={1000} // <number>
              delayToDelete={2000} // <number>
            />
            <BlinkCursor
              active // <boolean>
              blinkSpeed={500} // <number>
            />
            </h1>
            <h3 style={{color: "#4F4F4F"}}>
              Freelance Designer & Web Developer
            </h3>
            <h5 style={{color: "#4F4F4F"}}>
              I&#39;m always thirsty for experience, skill and knowledge
            </h5>

          </Grid>
        </Grid>


        <Grid container justifyContent="center">
          <Grid item lg={3} md={6} xs={6}>
            <img src={ari} className="img-profil" alt="profil" width="100%" />
          </Grid>
        </Grid>

      </Container>
     </div>

     <Container maxWidth='lg'>
        <h3 style={{textAlign: "center", marginBottom: "1rem"}}>
          My Social Media
        </h3>
        <Grid container justifyContent="center">
          {icon.map((item, index) => (
            <div className="medsos" key={index}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <img src={item.icon} alt="profil" width="80%" />
              </a>
            </div>
          ))}
        </Grid>

        <Grid container justifyContent="center">
          <div style={{margin: "3rem 0"}}>
            <Button variant="outlined" style={{ border: "2px solid #23A036", borderRadius: "30px", fontFamily: "Nunito", color: "#23A036", padding: ".5rem 2rem", margin: "0 1rem", fontWeight: "600"}}> 
              See my work
            </Button>

            <Button size="large" variant="contained" style={{ backgroundColor: "#23A036", borderRadius: "30px", fontFamily: "Nunito", color: "#ffff", padding: ".5rem 2rem", fontWeight: "600", margin: "0 1rem"}}> 
              Hire Me   &nbsp;  <ArrowForwardIosRoundedIcon/>
            </Button>

          </div>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Hero;
