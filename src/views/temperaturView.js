import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '.././styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Bilder*/
import temperatur from '../images/Temperatur.png';
import maskot from '../images/Maskot.png';
import bredbubbla from '../images/bredbubbla.png';
import litenpilv from '../images/liten-pil-v.png';
import litenpilh from '../images/liten-pil-h.png';
import mellanPil from '../images/mellan-pil.png';
/* Komponenter*/
import ImgCarousel from '../components/ImgCarousel';
import ViewLink from '../components/ViewLink';

/* Använder Row, Col och Container för att fördela innehållet på sidan.
Använder style för att hårdkoda anpassningar för layoutstrukturen och utseende,
anpassande justeringar för placering och storlek, och utseeende som rundade 
hörn och färgval m.m.*/
export function TemperaturView() {
  return (
    /* Bakgrundsbild */
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '92px',
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2014/12/04/02/02/wall-556100_960_720.jpg")',
      }}
    >
      {/* Container för innehåll */}
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Vitt block */}
        <div
          style={{
            width: '1337px',
            marginTop: '54px',
            backgroundColor: 'white',
            borderRadius: '30px',
            borderTop: 'solid 30px #F76245',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* Block för innehåll*/}
          <div
            style={{
              width: '992px',
              marginTop: '35px',
              backgroundColor: 'white',
              borderRadius: '30px',
            }}
          >
            {/* Rad ett, text och bild vänster, video höger*/}
            <Row>
              <h1 className="font-link-h1" style={{ textAlign: 'center' }}>
                Temperatur
              </h1>
              <p
                className="font-link-p-ingress"
                style={{ textAlign: 'center' }}
              >
                Här kommer du lära dig om att jordens temperatur ökar och varför
              </p>
            </Row>
            <Row style={{ marginLeft: 'none', marginTop: '40px' }}>
              <img
                src={temperatur}
                style={{ width: '10%', height: '10%', marginTop: '33px' }}
              />
              <Col style={{ marginRight: '15px', paddingTop: '30px' }}>
                <h2 className="font-link-h2">Klimatet har förändrats</h2>
                <p className="font-link-p">
                  Observationer och mätningar visar att klimatet redan
                  förändrats och det på grund av människans förbränning av
                  fossila bränslen. Förbränningen påverkar klimatet negativt och
                  har därför förvärrat växthuseffekten, vilket leder till en
                  ökad temperaturen på jorden.
                </p>
                <p className="font-link-p">
                  {' '}
                  Om uppvärmningen stiger över 1,5 grad kommer det få
                  katastrofala följder på vår planet. Dessa följder kan
                  exempelvis vara extremare väder, mer regn för vissa delar av
                  världen och inget regn alls för andra delar av världen.{' '}
                  <ViewLink />
                </p>
                {/* Länkar/importerar in popup-rutan  */}
              </Col>
              <Col
                style={{
                  backgroundColor: '#F76245',
                  width: '472px',
                  paddingTop: '30px',
                  paddingBottom: '30px',
                  borderRadius: '30px',
                  border: 'solid 1px black',
                  marginLeft: '15px',
                  marginTop: '30px',
                  height: '354px',
                }}
              >
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                  <iframe
                    className="ratio ratio-16x9"
                    src="https://www.youtube.com/embed/uQ2hcqlTR8c"
                    title="YouTube video"
                    allowFullScreen
                    style={{
                      width: '385px',
                      height: '194px',
                      borderRadius: '',
                    }}
                  ></iframe>
                </Row>
                <Row
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '27px',
                  }}
                >
                  <h2
                    className="font-link-h2"
                    style={{
                      textAlign: 'center',
                      width: '365px',
                      height: '67px',
                      paddingTop: '12px',
                      backgroundColor: 'white',
                      borderRadius: '20px',
                      border: 'solid 1px black',
                      boxShadow: '1px 3px 10px black',
                    }}
                  >
                    En varmare värld
                  </h2>
                </Row>
              </Col>
            </Row>
            {/* Rad två, block med maskot och pratbubbla på röd bakgrund*/}
            <Row
              style={{
                width: '992px',
                height: '387px',
                backgroundColor: '#F76245',
                borderRadius: '30px',
                border: 'solid 1px black',
                paddingTop: '57px',
                display: 'flex',
                justifyContent: 'center',
                boxShadow: '1px 3px 10px black',
                marginTop: '56px',
              }}
            >
              <Col
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '',
                }}
              >
                <img
                  src={maskot}
                  style={{
                    width: '150px',
                    height: '150px',
                    marginTop: '50px',
                    marginRight: '40px',
                  }}
                />
                <img
                  src={bredbubbla}
                  style={{ width: '689px', height: '274px' }}
                />
              </Col>
              <Row
                style={{
                  textAlign: 'right',
                  paddingTop: '5px',
                  paddingBottom: '5px',
                  marginLeft: '-80px',
                }}
              >
                <ViewLink />
              </Row>{' '}
              {/* Länkar/importerar in popup-rutan */}
            </Row>
            {/* Rad tre, bildspel vänter och text till höger*/}
            <Row style={{ marginTop: '70px' }}>
              {/* Bild-galleri */}
              <Col>
                <ImgCarousel />
                {/* Länkar/importerar in bildspelet */}
              </Col>
              <Col>
                <h2 className="font-link-h2">Risker och konsvekvenser</h2>
                <p className="font-link-p">
                  Vår planet, jorden, blir varmare och varmare. Det på grund av
                  de fortsatta utsläppen av växthusgaser, som exempelvis kommer
                  från bilar, industrier och flygplan. Den globala
                  uppvärmningen, alltså hela jordens temperatur, kan leda till
                  stora och katastrofala följder. Dessa följder är många, men
                  några av dem är att, glaciärerna smälter, torka,
                  översvämningar och skogsbränder.
                </p>
                <p className="font-link-p">
                  Djur och natur drabbas hårt av den stigande temperaturen.
                  Uppvärmningen måste stoppas för att förhindra att djur utrotas
                  och värdefull natur där djuren lever, inte försvinner.{' '}
                  <ViewLink />
                </p>
                {/* Länkar/importerar in popup-rutan */}
              </Col>
            </Row>
            {/* Block med innehåll,diagram med text, faktaruta, maskot med pratbubbla */}
            <div
              style={{
                width: '992px',
                backgroundColor: '#F76245',
                borderRadius: '30px',
                border: 'solid 1px black',
                paddingTop: '57px',
                marginTop: '70px',
                display: 'flex',
                justifyContent: 'center',
                boxShadow: '1px 3px 10px black',
              }}
            >
              <div
                style={{
                  width: '896px',
                  backgroundColor: 'white',
                  borderRadius: '30px',
                  paddingTop: '36px',
                  marginBottom: '60px',
                }}
              >
                {/* Rad fyra, rubrik för diagram */}
                <Row>
                  <h2 className="font-link-h2" style={{ textAlign: 'center' }}>
                    Jordens temperatur förändras
                  </h2>
                </Row>
                {/* Rad fem, diagrammet */}
                <Row
                  style={{
                    paddingLeft: '48px',
                    paddingRight: '48px',
                    marginTop: '34px',
                  }}
                >
                  <Col>
                    <img
                      src="https://www.digitalasparet.se/hot/c/dia5/media/mm2_fodsl14.gif"
                      style={{
                        width: '798px',
                        border: 'solid 1px black',
                        borderRadius: '30px',
                      }}
                    />
                  </Col>
                </Row>
                {/* Rad sex, text om diagrammet */}
                <Row
                  style={{
                    paddingLeft: '48px',
                    paddingRight: '48px',
                    marginTop: '45px',
                  }}
                >
                  <p className="font-link-p" style={{ textAlign: 'left' }}>
                    Diagrammet ovan visar hur jordens temperatur förändras över
                    tid år 1880-2016. Alltså, hur det blir kallare eller varmare
                    under åren som passerar. På den vertikala linjen visas
                    temperaturen och på den horisontella visas åren.{' '}
                    <ViewLink />
                  </p>
                  {/* Länkar/importerar in popup-rutan */}
                </Row>
                {/* Rad sju, faktaruta till vänster, maskot med pratbubbla till höger */}
                <Row
                  style={{
                    paddingLeft: '48px',
                    paddingRight: '48px',
                    paddingBottom: '60px',
                    marginTop: '45px',
                  }}
                >
                  <Col
                    style={{
                      border: 'solid 5px #F76245',
                      borderRadius: '30px',
                      paddingBottom: '60px',
                      marginBotton: '57px',
                      boxShadow: '1px 3px 10px black',
                    }}
                  >
                    <h2
                      className="font-link-h2"
                      style={{ textAlign: 'center', marginTop: '28px' }}
                    >
                      Kort fakta
                    </h2>
                    <ul className="font-link-p">
                      <li>Snötecket på norra halvklotet har minskat.</li>
                      <li>
                        Mängden nederbörd på norra halvklotet har ökat över
                        land.
                      </li>
                      <li>
                        Havsytan nivå har ökat i genomsnitt 3,7 mm per år mellan
                        2006-2018. Ökning orsakas av avsmältning från
                        landbaserad is.
                      </li>
                      <li>2020 blev det varmaste året i Sverige.</li>
                    </ul>
                    <p style={{ textAlign: 'center' }}>
                      <ViewLink />
                    </p>
                    {/* Länkar/importerar in popup-rutan  */}
                  </Col>
                  <Col style={{ paddingTop: '70px' }}>
                    <Row style={{ display: 'flex', justifyContent: 'center' }}>
                      <img src={mellanPil} />
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: 'center' }}>
                      <img
                        src={maskot}
                        style={{ width: '50%', height: '50%' }}
                      />
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
            {/* Rad åtta, maskot med pratbubblor*/}
            <Row style={{ marginTop: '46px' }}>
              <Col
                style={{
                  display: 'flex',
                  justifyContent: 'right',
                  paddingLeft: '150px',
                }}
              >
                <img src={litenpilv} />
              </Col>
              <Col
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '50px',
                }}
              >
                <img src={maskot} style={{ width: '100px', height: '100px' }} />
              </Col>
              <Col
                style={{
                  display: 'flex',
                  justifyContent: 'left',
                  paddingRight: '150px',
                }}
              >
                <img src={litenpilh} />
              </Col>
            </Row>
            {/* Rad nio, quiz-knapp*/}
            <Row>
              <Col
                style={{
                  paddingTop: '57px',
                  paddingBottom: '48px',
                  marginTop: '70px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <button className="quizButton">Quiz</button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}
