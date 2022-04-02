import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navbar, Button, Container, Nav, ButtonGroup, Row, Col, Card, Image } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Bounce from 'react-reveal/Bounce';
import Spin from 'react-reveal/Spin';
import Zoom from 'react-reveal/Zoom';
import ReactPlayer from 'react-player';
import Particles from 'react-particles-js';
import { GrGroup } from 'react-icons/gr';
import { GiPrivateFirstClass } from 'react-icons/gi'
import { GrLaunch } from 'react-icons/gr'
import { FaLinkedin, FaStackExchange } from 'react-icons/fa'
import { BsCurrencyExchange, BsBank } from 'react-icons/bs'
import { NextSeo } from 'next-seo';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Script from 'next/script' 
import Vimeo from '@u-wave/react-vimeo';

export default function Home() {

  const prefix = '';

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const ColoredLine = ({ color }) => (
    <div>
      <hr
        style={{
          color,
          backgroundColor: color,
          height: 5,
          width: "50px",
          margin: "auto",
          marginTop: "5px",
          marginBottom: "20px"
        }}
      />
    </div>
  );

  return (
    <div className={styles.container} style={{backgroundColor: "#000000",color:"#fff"}}>
      <Head>
        <link rel="icon" href="/assets/logo2.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Chivo&display=swap" rel="stylesheet"></link>
      </Head>

      <NextSeo
        title="Stake and Borrow | Hakuna Matata"
        description="Start staking and borrowing at the same time with MATATAs. Join the first Metaverse Launchpad project."
      />

      <Navbar style={{backgroundColor: "#000000"}} expand="lg"  className='navbar' >
        <Container className={"py-3"}>
          <Navbar.Brand href="#"><Image src={`${prefix}/assets/logoMatata2.png`} width={200} alt={"Hakuna Matata's Logo"} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Nav
              className="d-flex"
              navbarScroll
            >
              <Nav.Link href={`${prefix}/assets/whitepaper.pdf`} target='_blank' rel='noopener noreferrer'>White Paper</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#roadmap">Roadmap</Nav.Link>
              
              <Nav.Link href="#community">Community</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 

      <Particles 
        canvasClassName="particles"
                    params={{
                      particles: {
                        color: {
                          value: "#f68c1b"
                        },
                        line_linked: {
                          shadow: {
                            enable: true,
                            color: "#f68c1b",
                          },
                          width: 3
                        },
                        number: {
                          value: 15,
                          density: {
                            enable: true,
                            value_area: 500
                          }
                        }
                      }
                    }}
                    style={{
                      width: '100%',
                    }}
      />
      <main id="home" className={styles.main} style={{backgroundImage: `url("${prefix}/assets/logVideo3.gif")` }}>
      
        <Bounce>
          <h1 className={styles.title}>
            Earn up to 150% APY
          </h1>
        </Bounce>
        <Zoom delay={200}>
          <h4 className={"text-center"} style={{color: "#fddfc0"}}>Stake MATATA to earn up to 150% and Borrow up to 50% of your Stake Value in BUSD</h4>
        </Zoom>
        <ButtonGroup className="my-3">
          <a href="https://pancakeswap.finance/swap?outputCurrency=0xeEb97934F49E1Ef58FD29DF20d065a437D7C9f56"><Button className={"mx-2 rounded-button py-3 px-4"} variant="flat-primary" size={"lg"}>Buy Now</Button></a>
          <a href="https://stake.matatacoin.com/"><Button className={"mx-2 rounded-button py-3 px-4"} variant="flat-primary" size={"lg"}>Stake Now</Button></a>
          <a href="https://lending.matatacoin.com/"><Button className={"mx-2 rounded-button py-3 px-4"} variant="flat-primary" size={"lg"}>Borrow Now</Button></a>
         
 
        </ButtonGroup>
      </main>
      <Container style={{backgroundColor:"#000000", paddingTop: "5rem", paddingBottom: "5rem"}} fluid>
        <Row className={"px-3"} id={"features"}>
          <h2 className={"text-center text-white"}>Be your own bank</h2>
          <p className={"lead text-center text-white"}>Reasons to join Matata</p>
          <ColoredLine color={"#fff"} />
          <Col className={"d-flex align-items-stretch col-lg-3 col-md-6 col-12"}>
            <Bounce left>
              <Card className={"rounded-card feature-card"}>
                <Card.Body className={"p-4"}>
                  <Card.Title>Up to 150% APR</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Build generational wealth</Card.Subtitle>
                  <Card.Text>
                    The more you stake, the higher your Interest, the more we burn, the lesser there is on the market
                    <br/><br/>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Bounce>
          </Col>
          <Col className={"d-flex align-items-stretch col-lg-3 col-md-6 col-12"}>
              <Bounce left>
                <Card className={"rounded-card feature-card"}>
                  <Card.Body className={"p-4"}>
                    <Card.Title>Borrow against your stacked</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">50% LTV</Card.Subtitle>
                    <Card.Text>
                      Get up to 50% LTV of your Staked MATATA as a loan in stable coins (USDT) Repayable any time.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Bounce>
            </Col>
            <Col className={"d-flex align-items-stretch col-lg-3 col-md-6 col-12"}>
            <Bounce left>
              <Card className={"rounded-card feature-card"}>
                <Card.Body className={"p-4"}>
                  <Card.Title>Metaverse Launchpad</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Join the game early</Card.Subtitle>
                  <Card.Text>
                    Invest in the most promising Metaverse projects. Maximize your profit when projects got listed on other exchanges.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Bounce>
          </Col>
          <Col className={"d-flex align-items-stretch col-lg-3 col-md-6 col-12"}>
            <Bounce left>
              <Card className={"rounded-card feature-card"}>
                <Card.Body className={"p-4"}>
                  <Card.Title>Deflationary Asset</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Maximize profit</Card.Subtitle>
                  <Card.Text>
                    The Company buys back tokens from total supply and burns up to 2 $MATATA for every $MATATA staked.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Bounce>
          </Col>
        </Row>
      </Container>




      
      <Container style={{backgroundColor: "#000000",color:"#fff"}}>
        <Row className={"py-5 px-2"} id={"about"}>
          <h3 className={"text-center mt-5"}>Earn interest on your money</h3>
          <p className={"lead text-center"}>Borrow against your Stacked MATATAs</p>
          <Col className={"d-flex justify-content-center col-12 col-lg-6"}>
            <ReactPlayer
              url= {`${prefix}/assets/hmatata2.mp4`}
              width='100%'
              controls = {true}
              previewTabIndex={1}
              light= {`${prefix}/assets/bg1.png`}
              />
          </Col>
          <Col className={"d-flex align-content-center"}>
            <Bounce>
              <div className={"py-3 px-2"}>
                  <p style={{lineHeight: "175%"}}>
                  Stake your Matata and earn up to 150% interest, Claim your interest monthly for a steady income regardless of the market conditions.
        Leverage your Staked Matata to get a loan in USDT/BUSD of up to 50% of your Matata to maximize your profit or respond to an emergency need for money.
        With Matata, you are able to guarantee a better future for yourself and future generations by staking your MATATA you can earn tremendous interest on your money, borrow against your staked money and make optimum profit from the price appreciation
                  </p>
                  <ButtonGroup className="my-3">
                  <a href="https://pancakeswap.finance/swap?outputCurrency=0xeEb97934F49E1Ef58FD29DF20d065a437D7C9f56"><Button className={"mx-2 rounded-button py-3 px-3"} variant="flat-primary" size={"md"}>Buy Now</Button></a>
                  <a href={`${prefix}/assets/whitepaper.pdf`} target='_blank' rel='noopener noreferrer'>
                    <Button className={"mx-2 rounded-button py-3 px-3"}  variant="flat-outline-dark" size={"md"}>White Paper</Button>
                  </a>
                </ButtonGroup>
              </div>
            </Bounce>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className={"py-5"}>
          <h2 id={"roadmap"} className={"text-center"}>Roadmap</h2>
          <p className={"lead text-center"}>This timeline details our funding and development goals.</p>
          <Col>
            <VerticalTimeline lineColor={"#C6A148"}>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ border:"1px solid #C6A148", borderRadius: "30px", backgroundColor: "#C6A148" }}
                  contentArrowStyle={{ borderRight: '7px solid #f68c1b' }}
                  date="Q3 2021 (Done)"
                  iconStyle={{ background: '#C6A148', color: '#fff' }}
                  icon={<GrGroup />}
                  visible={true}
                >
                  <Bounce>
                    <h3>Community Launch</h3>
                    <p>
                      Building our community, Telegram, and Twitter to 1000 Members
                    </p>
                  </Bounce>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ border:"1px solid #C6A148", borderRadius: "30px", backgroundColor: "#C6A148" }}
                  contentArrowStyle={{ borderRight: '7px solid #C6A148' }}
                  date="Q4 2021 (Done)"
                  iconStyle={{ background: '#C6A148', color: '#fff' }}
                  icon={<GiPrivateFirstClass />}
                  visible={true}
                >
                  <Bounce>
                    <h3 className="vertical-timeline-element-title">Pre-IDO</h3>
                    <p>
                      Private sale to Early investors, Team Building for Regional ambassador and Partnership with Strategic Investors
                    </p>
                  </Bounce>
                </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ border:"1px solid #C6A148", borderRadius: "30px", backgroundColor: "#C6A148" }}
                contentArrowStyle={{ borderRight: '7px solid #C6A148' }}
                date="Q4 2021"
                iconStyle={{ background: '#C6A148', color: '#fff' }}
                icon={<GrLaunch />}
                visible={true}
              >
                <Bounce>
                  <h3 className="vertical-timeline-element-title">IEO and IDO launch</h3>
                  <p>
                    Initial Exchange offering on Centralised exchanges and LaunchPads
                  </p>
                </Bounce>
              </VerticalTimelineElement>
                    
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ border:"2px solid #C6A148", borderRadius: "30px", backgroundColor: "#C6A148"}}
                contentArrowStyle={{ borderRight: '7px solid #C6A148' }}
                date="Q1 2022 (Done)"
                iconStyle={{ background: '#C6A148', color: '#fff' }}
                icon={<BsCurrencyExchange />}
                visible={true}
              >
                <Bounce>
                  <h3 className="vertical-timeline-element-title">CEX Listing</h3>
                  <p>
                    Listing on centralized exchanges including but not limited to Bitmart, MEXC,…
                  </p>
                </Bounce>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ border:"2px solid #C6A148", borderRadius: "30px",backgroundColor: "#C6A148" }}
                contentArrowStyle={{ borderRight: '7px solid #C6A148' }}
                date="Q2 2022 (In Progress)"
                iconStyle={{ background: '#C6A148', color: '#fff' }}
                icon={<FaStackExchange />}
                visible={true}
              >
                <Bounce >
                  <h3 className="vertical-timeline-element-title">Launching of Staking and Launchpad Platforms</h3>
                  <p>
                    Launching of the staking platform and listing on DEX, (Pancake Swape).
                    Marketing launch with Celebrities, Telegram, Twitter, Youtube, and Instagram Influencers.
                  </p>
                </Bounce>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ border:"2px solid #C6A148", borderRadius: "30px",backgroundColor: "#C6A148" }}
                contentArrowStyle={{ borderRight: '7px solid #C6A148' }}
                date="Q3 2022 (Wait for it)"
                iconStyle={{ background: '#C6A148', color: '#fff' }}
                icon={<BsBank />}
                visible={true}
              >
                <Bounce>
                  <h3 className="vertical-timeline-element-title">Lending feature Launch</h3>
                  <p>
                    Launching of the Lending feature for Stakers to get a loan of up to 50% LTV of their Staked Token
                  </p>
                </Bounce>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>

      <Container className={"py-5"} style={{ color: "#fff", backgroundSize: "cover", background: " url(/assets/logoVideo3.png)" }} fluid>
        <Row className={"my-5"}>
          <Col>
              <h3 className={"text-center"}>Press articles</h3>
              <p className={"lead text-center"}>They talk about us</p>
              <div className={"text-center"}>
                <Bounce>
                  <a className={"mx-3 my-3"} target={"_blank"} rel={"noreferrer"} href={"https://u.today/press-releases/hakuna-matata-launches-aims-to-simplify-problems"}><Image className={"py-3"} width={200} src={"/assets/utoday.jpeg"} /></a>
                </Bounce>
                <Bounce>
                  <a className={"mx-3"} target={"_blank"} rel={"noreferrer"} href={"https://bitcoinist.com/hakuna-matata-unleashes-aims-to-glorify-living/"}><Image className={"py-3"} width={250} src={"/assets/bitcoinist.png"} /></a>
                </Bounce>
                
                <Bounce>
                  <a className={"mx-3"} target={"_blank"} rel={"noreferrer"} href={"https://www.nasdaq.com/press-release/hakuna-matata-begins-the-journey-aims-to-empower-humanity-2021-12-10"}><Image className={"py-3"} width={250} src={"/assets/nasdaq.png"} /></a>
                </Bounce>
                <Bounce>
                  <a className={"mx-3"} target={"_blank"} rel={"noreferrer"} href={"https://finance.yahoo.com/news/hakuna-matata-begins-journey-aims-125100418.html"}><Image className={"py-3"} width={250} src={"/assets/yahoo.png"} /></a>
                </Bounce>
                <Bounce>
                  <a className={"mx-3"} target={"_blank"} rel={"noreferrer"} href={"https://www.bloomberg.com/press-releases/2021-12-10/hakuna-matata-begins-the-journey-aims-to-empower-humanity"}><Image className={"py-3"} width={250} src={"/assets/bloomberg.png"} /></a>
                </Bounce>
                <Bounce>
                  <a className={"mx-3"} target={"_blank"} rel={"noreferrer"} href={"https://www.newsbtc.com/press-releases/hakuna-matata-set-sights-on-simplifying-the-art-of-living/"}><Image className={"py-3"} width={250} src={"/assets/newsbtc.png"} /></a>
                </Bounce>
              

           

              
              </div>
          </Col>
        </Row>

        <Row className={"my-5"}>
          <Col>
              <h3 className={"text-center"}>Partners and Integrations</h3>
              <p className={"lead text-center"}>Happy to work with our partners</p>
              <div className={"text-center"}>
                
                <Bounce>
                  <a className={"mx-3"} target={"_blank"} rel={"noreferrer"} href={"https://eboost.net.au/"}><Image width={250} src={"/assets/eboost.png"} /></a>
                </Bounce>
                <Bounce>
                  <a className={"mx-3"} target={"_blank"} rel={"noreferrer"} href={"https://bitcoinist.com/hakuna-matata-unleashes-aims-to-glorify-living/"}><Image className={"py-3"} width={150} src={"/assets/chainlink1.png"} /></a>
                </Bounce>
                <Bounce>
                  <a className={"mx-3"} target={"_blank"} rel={"noreferrer"} href={"https://www.investing.com/news/cryptocurrency-news/hakuna-matata--set-sights-on-simplifying-the-art-of-living-2708677"}><Image className={"py-3"} width={250} src={"/assets/bitmart.png"} /></a>
                </Bounce>
                <Bounce>
                  <a className={"mx-3"} target={"_blank"} rel={"noreferrer"} href={"https://www.investing.com/news/cryptocurrency-news/hakuna-matata--set-sights-on-simplifying-the-art-of-living-2708677"}><Image className={"py-3"} width={250} src={"/assets/binance.png"} /></a>
                </Bounce>
              </div>
          </Col>
        </Row>
      </Container>

      
      <Container style={{backgroundColor: "#000", paddingTop: "100px", paddingBottom: "100px"}} fluid>
        <Row>
          <Col>
            <h3 id={"community"} className={"text-center text-white"}>Community</h3>
            <p className={"lead text-center text-white"}>Join our chat and follow us on Twitter</p>
            <div className={"text-center mb-5"}>
              <Image src={`${prefix}/assets/logoMatata.png`} alt={"Hakuna Matata's Logo"} />
            </div>
            <div className={"d-flex justify-content-center"}>
              <Spin>
                <SocialIcon className={"mx-1 text-center"} url="https://t.me/Matatacoin" network={"telegram"} />
              </Spin>
              <Spin>
                <SocialIcon className={"mx-1"} url="https://twitter.com/matatacoin" />
              </Spin>
            </div>
          </Col>
        </Row>
      
      </Container>
    

      <footer className={styles.footer} style={{backgroundColor: "#000000",color:"#fff"}}>
        <a
          href="#home"
        >
          Powered by Matata Coin
        </a>
      </footer>
      <div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7RYGYP5QLR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7RYGYP5QLR');
          `}
        </Script>
      </div>
    </div>
  )
}
