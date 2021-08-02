import React, { useEffect } from 'react';
import { Grid, Container, Button } from '@material-ui/core';
// import kickin from '../Images/landing page.png';
import japri from '../Images/portfolio/Japri.png';
import portoWeb from '../Images/portfolio/Portfolio.png';
import thesis from '../Images/portfolio/Thesis.png';
import kickin from '../Images/portfolio/Kickin.png';
import japriApp from '../Images/portfolio/Japri app.png';
import ayongetrip from '../Images/portfolio/ayongetrip.png';
import CDU from '../Images/portfolio/CDU.png';
import kebumen from '../Images/portfolio/kebumen.png';
import Login from '../Images/portfolio/Login.png';
// import semipro from '../Images/portfolio/semipro.png';
// import tujuhsembilan from '../Images/portfolio/tujuhsembilan.png';

import reacts from '../Images/Icon/react.svg';
import laptop from '../Images/Icon/laptop.svg';
import illustration from '../Images/Icon/illustration.svg';

const content = [
  {
    img: kickin,
    name: 'Kickin',
    desc: 'A website that is intended to make it easier for futsal lovers to book futsal fields online, without come to field before',
    url: 'https://kickin-site.netlify.app/',
    cat: 'web',
  },
  {
    img: thesis,
    name: 'Thesis Presentation',
    desc: "This website is used for presentations of research that I did to qualify for a bachelor's degree in public health",
    url: 'https://aridarsan.me/',
    cat: 'web, ui',
  },
  {
    img: japri,
    name: 'Japri Corp',
    desc: 'A multifunctional start-up platform that wants to be a solution for students in fulfilling their needs, and have noble purpose to empowerment',
    url: 'https://japricorp.com/',
    cat: 'web, ui',
  },
  {
    img: portoWeb,
    name: 'Website Portfolio',
    desc: 'Portfolio website is used to introduce yourself and your skills as a means of personal branding and offering services',
    url: 'https://aridarsan.xyz/',
    cat: 'web, ui',
  },
  {
    img: japriApp,
    name: 'Japri Corp Mobile App',
    desc: 'A multifunctional start-up platform that wants to be a solution for students in fulfilling their needs, and have noble purpose to empowerment',
    url: 'https://bit.ly/japri-app-deck',
    cat: 'ui',
  },
  {
    img: Login,
    name: 'Logo Kreator Logo Indonesia',
    desc: 'Login is a logo creator community that was formed to be a place for designers to discuss and develop themselves',
    url: 'https://www.instagram.com/p/B_ww9wjnvHz/?utm_source=ig_web_copy_link',
    cat: 'logo',
  },
  {
    img: ayongetrip,
    name: 'Logo Ayongetrip',
    desc: 'Ayongetrip is a company that was built to accompany the journey of people who like to travel to tourist attractions',
    url: 'https://www.instagram.com/p/CBXKpHYBlmF/?utm_source=ig_web_copy_link',
    cat: 'logo',
  },
  {
    img: kebumen,
    name: 'Logo Kebumen Corner',
    desc: 'Kebumen Corner is one of the social media platforms that provides interesting content, especially on instagram',
    url: 'https://www.instagram.com/p/CAXZQC2nfZ7/?utm_source=ig_web_copy_link',
    cat: 'logo',
  },
  {
    img: CDU,
    name: 'Logo CDU Lab',
    desc: 'Cito Diagnostika Utama rebranding which aims to rejuvenate the face of the company in the environmental field',
    url: 'https://www.instagram.com/p/B9MTpyEhv3c/?utm_source=ig_web_copy_link',
    cat: 'logo',
  },
];


function filterWeb(item) {
  if (item.cat === 'web' || item.cat === 'web, ui') {
    return true;
  }
}

function filterUi(item) {
  if (item.cat === 'ui' || item.cat === 'web, ui') {
    return true;
  }
}

function filterLogo(item) {
  if (item.cat === 'logo') {
    return true;
  }
}

const Porfolio = () => {
  const [myWork, setMyWork] = React.useState(content);
  const [activeAll, setActiveAll] = React.useState(false);
  const [activeUi, setActiveUi] = React.useState(false);
  const [activeWeb, setActiveWeb] = React.useState(false);
  const [activeLogo, setActiveLogo] = React.useState(false);

  const WEB = content.filter(filterWeb);
  const UI = content.filter(filterUi);
  const LOGO = content.filter(filterLogo)

  async function all() {
    await setMyWork(content);
    setActiveAll(true);
    setActiveUi(false);
    setActiveWeb(false);
    setActiveLogo(false);
    // console.log(myWork);
  }

  async function web() {
    await setMyWork(WEB);
    setActiveAll(false);
    setActiveWeb(true);
    setActiveUi(false);
    setActiveLogo(false);
    // console.log(myWork);
  }

  async function ui() {
    await setMyWork(UI);
    setActiveAll(false);
    setActiveWeb(false);
    setActiveUi(true);
    setActiveLogo(false);
    // console.log(myWork);
  }

  async function logo() {
    await setMyWork(LOGO);
    setActiveAll(false);
    setActiveWeb(false);
    setActiveUi(false);
    setActiveLogo(true);
    // console.log(myWork);
  }

  useEffect(() => {
    all();
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent='center'
          id='portfolio'
          style={{ padding: '3rem 0 2rem' }}
        >
          <Grid item>
            <h2>
              <span>Latest Work</span>
            </h2>

          <hr className="line-tittle" />
          </Grid>
        </Grid>

        <Grid container justifyContent='center' spacing={3}>
          <Grid item>
            <Button
              onClick={all}
              size='large'
              variant={activeAll === true ? 'contained' : 'outlined'}
              className={activeAll === true ? 'btn btn-primary' : 'btn btn-second'}
            >
              All
            </Button>
          </Grid>

          <Grid item>
            <Button
              onClick={web}
              size='large'
              variant={activeWeb === true ? 'contained' : 'outlined'}
              className={activeWeb === true ? 'btn btn-primary' : 'btn btn-second'}
            >
              Web Development
            </Button>
          </Grid>

          <Grid item>
            <Button
              onClick={ui}
              size='large'
              variant={activeUi === true ? 'contained' : 'outlined'}
              className={activeUi === true ? 'btn btn-primary' : 'btn btn-second'}
            >
              UI/UX Design
            </Button>
          </Grid>

          <Grid item>
            <Button
              onClick={logo}
              size='large'
              variant={activeLogo === true ? 'contained' : 'outlined'}
              className={activeLogo === true ? 'btn btn-primary' : 'btn btn-second'}
            >
              Logo Design
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent='center'
          alignItems='center'
          direction="row"
          style={{ margin: '2rem 0' }}
        >
          {myWork.map((item, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} className="cont" key={index}>
            <img
              src={item.img}
              alt='portfolio'
              width='100%'
              style={{ borderRadius: '.5rem'}}
              className="shadow"
            />

            <div className="category">
              <div className='porto' style={{ margin: '.5rem .5rem .5rem auto', opacity: item.cat === 'logo' ? "1" : "0"}}>
                <img src={illustration} alt='profil' width='80%' />
              </div>

              <div className='porto' style={{ margin: '.5rem .5rem .5rem auto', opacity: item.cat === 'web' || item.cat === 'web, ui' ? "1" : "0" }}>
                <img src={reacts} alt='profil' width='80%' />
              </div>

              <div className='porto' style={{ margin: '.5rem .5rem .5rem auto', opacity: item.cat === 'ui' || item.cat === 'web, ui' ? "1" : "0"}}>
                <img src={laptop} alt='profil' width='80%' />
              </div>
            </div>

              <div className="overlay">
                <h4 style={{ margin: '4rem 0 1rem 0', color: '#ffff' }}>{item.name}</h4>

                <p style={{ color: '#ffff', marginBottom: "2rem" }}>{item.desc}</p>

                <Grid container spacing={2}>
                  <Grid item xs={12} lg={6}>
                    <a href={item.url !== "" ? item.url : "#"} target="_blank" rel="noreferrer">
                      <Button
                        size='medium'
                        variant='contained'
                        className='btn btn-primary'
                      >
                        {item.cat === "logo" || item.cat === "ui" ? "View Detail" : "Visit"}
                      </Button>
                    </a>
                  </Grid>

                  <Grid item xs={12} lg={6}>
                  <a href="#hire">
                    <Button
                      size='medium'
                      variant='outlined'
                      className='btn btn-second'
                      style={{backgroundColor: "#ffff"}}
                    >
                      contact me
                    </Button>
                  </a>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Porfolio;
