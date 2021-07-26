import React, { useEffect } from 'react';
import { Grid, Container, Button } from '@material-ui/core';
// import kickin from '../Images/landing page.png';
import japri from '../Images/Japri.png';
import portoWeb from '../Images/Portfolio.png';
import thesis from '../Images/Thesis.png';
import reacts from '../Images/Icon/react.svg';
import laptop from '../Images/Icon/laptop.svg';
import illustration from '../Images/Icon/illustration.svg';

const content = [
  {
    img: japri,
    name: 'Kickin',
    desc: 'Sebuah website yang ditujukan untuk memudahkan pengguna dalam membooking lapangan futsal secara online',
    url: 'https://kickin.netlify.app/',
    cat: 'web, ui',
  },
  {
    img: thesis,
    name: 'Thesis Presentation',
    desc: 'Ini merupakan website persentasi Hubungan pengetahuan dan sikap terhadap perilaku adaptasi kebiasaan baru',
    url: 'https://kickin.netlify.app/',
    cat: 'web, ui',
  },
  {
    img: japri,
    name: 'Japri Corp',
    desc: 'Sebuah start up platform multifungsi yang ingin maenjadi solusi bagi mahasiswa dalam pemenuhan kebutuhannya',
    url: 'https://kickin.netlify.app/',
    cat: 'web, ui',
  },
  {
    img: thesis,
    name: 'Thesis Presentation',
    desc: 'Ini merupakan website persentasi Hubungan pengetahuan dan sikap terhadap perilaku adaptasi kebiasaan baru',
    url: 'https://kickin.netlify.app/',
    cat: 'ui',
  },
  {
    img: japri,
    name: 'Japri Corp Mobile App',
    desc: 'Sebuah start up platform multifungsi yang ingin maenjadi solusi bagi mahasiswa dalam pemenuhan kebutuhannya',
    url: 'https://kickin.netlify.app/',
    cat: 'ui',
  },
  {
    img: portoWeb,
    name: 'Portfolio Website',
    desc: 'Website ini digunakan sebagai alat mempresentasikan diri dengan berbagai project yang sudah dikerjakan',
    url: 'https://kickin.netlify.app/',
    cat: 'ui',
  },
    {
    img: portoWeb,
    name: 'Portfolio Website',
    desc: 'Website ini digunakan sebagai alat mempresentasikan diri dengan berbagai project yang sudah dikerjakan',
    url: 'https://kickin.netlify.app/',
    cat: 'logo',
  },
    {
    img: portoWeb,
    name: 'Portfolio Website',
    desc: 'Website ini digunakan sebagai alat mempresentasikan diri dengan berbagai project yang sudah dikerjakan',
    url: 'https://kickin.netlify.app/',
    cat: 'logo',
  },
    {
    img: portoWeb,
    name: 'Portfolio Website',
    desc: 'Website ini digunakan sebagai alat mempresentasikan diri dengan berbagai project yang sudah dikerjakan',
    url: 'https://kickin.netlify.app/',
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
              className={activeAll === true ? 'btn-primary' : 'btn-second'}
            >
              All
            </Button>
          </Grid>

          <Grid item>
            <Button
              onClick={web}
              size='large'
              variant={activeWeb === true ? 'contained' : 'outlined'}
              className={activeWeb === true ? 'btn-primary' : 'btn-second'}
            >
              Web Development
            </Button>
          </Grid>

          <Grid item>
            <Button
              onClick={ui}
              size='large'
              variant={activeUi === true ? 'contained' : 'outlined'}
              className={activeUi === true ? 'btn-primary' : 'btn-second'}
            >
              UI/UX Design
            </Button>
          </Grid>

          <Grid item>
            <Button
              onClick={logo}
              size='large'
              variant={activeLogo === true ? 'contained' : 'outlined'}
              className={activeLogo === true ? 'btn-primary' : 'btn-second'}
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
              style={{ borderRadius: '.5rem' }}
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
                <h4 style={{ margin: '1rem 0' }}>{item.name}</h4>

                <p style={{ color: '#646369' }}>{item.desc}</p>

                <Grid container spacing={2}>
                  <Grid item xs={12} lg={6}>
                    <Button
                      size='medium'
                      variant='contained'
                      className='btn-primary'
                    >
                      View Detail
                    </Button>
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <Button
                      size='medium'
                      variant='outlined'
                      className='btn-second'
                    >
                      Visit
                    </Button>
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
