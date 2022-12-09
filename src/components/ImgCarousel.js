import Carousel from 'react-bootstrap/Carousel';
import '.././styles.css';

/* Använer React bootstrap Carusel för att skapa ett klickbart bildspel:
https://react-bootstrap.github.io/components/carousel/ */

function NoTransitionExample() {
  return (
    <Carousel slide={false} variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/07/21/02/40/large-2524509_960_720.jpg"
          alt="First slide"
          style={{
            width: '487px',
            borderRadius: '30px',
            border: 'solid 5px #F76245',
            paddingBottom: '100px',
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/06/25/17/36/rain-1479303_960_720.jpg"
          alt="Second slide"
          style={{
            width: '487px',
            borderRadius: '30px',
            border: 'solid 5px #F76245',
            paddingBottom: '100px',
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/07/23/08/16/dry-856544_960_720.jpg"
          alt="Third slide"
          style={{
            width: '487px',
            borderRadius: '30px',
            border: 'solid 5px #F76245',
            paddingBottom: '100px',
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;
