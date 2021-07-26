import React, { useEffect } from 'react';
import { Grid, Container, Button } from '@material-ui/core';
import Carousel from 'react-grid-carousel';
import kickin from '../Images/landing page.png';
// import CodeIcon from '@material-ui/icons/Code';
// import LaptopIcon from '@material-ui/icons/Laptop';

const content = [
  {
    img: kickin,
    name: 'Kickin',
    desc: 'Sebuah website yang ditujukan untuk memudahkan pengguna dalam membooking lapangan futsal secara online',
    url: 'https://kickin.netlify.app/',
    cat: 'web',
  },
  {
    img: kickin,
    name: 'Thesis Presentation',
    desc: 'Ini merupakan website persentasi Hubungan pengetahuan dan sikap terhadap perilaku adaptasi kebiasaan baru',
    url: 'https://kickin.netlify.app/',
    cat: 'web',
  },
  {
    img: kickin,
    name: 'Japri Corp',
    desc: 'Sebuah start up platform multifungsi yang ingin maenjadi solusi bagi mahasiswa dalam pemenuhan kebutuhannya',
    url: 'https://kickin.netlify.app/',
    cat: 'web',
  },
  {
    img: kickin,
    name: 'Thesis Presentation',
    desc: 'Ini merupakan website persentasi Hubungan pengetahuan dan sikap terhadap perilaku adaptasi kebiasaan baru',
    url: 'https://kickin.netlify.app/',
    cat: 'ui',
  },
  {
    img: kickin,
    name: 'Japri Corp Mobile App',
    desc: 'Sebuah start up platform multifungsi yang ingin maenjadi solusi bagi mahasiswa dalam pemenuhan kebutuhannya',
    url: 'https://kickin.netlify.app/',
    cat: 'ui',
  },
  {
    img: kickin,
    name: 'Portfolio Website',
    desc: 'Website ini digunakan sebagai alat mempresentasikan diri dengan berbagai project yang sudah dikerjakan',
    url: 'https://kickin.netlify.app/',
    cat: 'ui',
  },
];

const layout = [
  { breakpoint: 1000, cols: 2, autoplay: 2000 },
  { breakpoint: 600, cols: 2, rows: 1, gap: 5, autoplay: 2000, loop: true },
  { breakpoint: 300, cols: 2, rows: 1, autoplay: 2000, loop: true },
];

const MyDot = ({ isActive }) => (
  <span
    style={{
      display: 'inline-block',
      height: isActive ? '.5rem' : '.5rem',
      width: isActive ? '2rem' : '.5rem',
      borderRadius: '10px',
      background: isActive ? '#23A036' : '#4f4f4f',
      marginTop: '2rem',
      overflow: 'visible',
    }}
  ></span>
);

// const fil = content.filter(filterByName)

function filterWeb(item) {
  if (item.cat === 'web') {
    return true;
  }
}

function filterUi(item) {
  if (item.cat === 'ui') {
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
    await setMyWork(UI);
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
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Carousel
              cols={3}
              rows={1}
              gap={10}
              dot={MyDot}
              autoplay={2000}
              responsiveLayout={layout}
              showDots
              loop
            >
              {myWork.map((item, index) => (
                <Carousel.Item key={index}>
                      <img
                        src={item.img}
                        alt='portfolio'
                        width='100%'
                        style={{ borderRadius: '.5rem' }}
                        className="port"
                      />

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

                </Carousel.Item>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Porfolio;
