import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '.././styles.css';

/* Andvänt bReact ootstrap Modal för att skapa en popupruta när "källa" klikas, för
att presentera källinformation:
https://react-bootstrap.github.io/components/modal/ */

function ViewLink() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Länk text som visas*/}
      <a
        variant="primary"
        onClick={handleShow}
        className="ViewLink"
        style={{
          backgroundColor: '',
          color: 'black',
          fontWeight: 'bold',
          fontStyle: 'italic',
          fontFamily: 'Courier New',
          fontSize: '16pt',
        }}
      >
        Källa
      </a>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton style={{ border: '' }}>
          {/* Rubrik*/}
          <Modal.Title>
            <h2
              className="font-link-h2"
              closeButton
              style={{ textAlign: 'center' }}
            >
              Källa
            </h2>
          </Modal.Title>
        </Modal.Header>
        {/* Underrubriker med länktext under vardera rubrik*/}
        <Modal.Body>
          <p
            className="font-link-p-ingress"
            style={{ fontWeight: 'bold', fontSize: '16pt' }}
          >
            Naturvårdsverket, WWF och SMHI
          </p>
          <p>
            https://www.naturvardsverket.se/amnesomraden/klimatforandringar/
          </p>
        </Modal.Body>
        <Modal.Body>
          <p
            className="font-link-p-ingress"
            style={{ fontWeight: 'bold', fontSize: '16pt' }}
          >
            WWF
          </p>
          <p>https://www.wwf.se/klimat/konsekvenser/</p>
        </Modal.Body>
        <Modal.Body>
          <p
            className="font-link-p-ingress"
            style={{ fontWeight: 'bold', fontSize: '16pt' }}
          >
            SMHI
          </p>
          <p>
            https://www.smhi.se/klimat/klimatet-da-och-nu/klimatindikatorer/klimatindikator-temperatur-1.2430
          </p>
        </Modal.Body>
        {/* Knapp för att stänga pupup-rutan */}
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              backgroundColor: '#2E8336',
              border: 'none',
              height: '53px',
              width: '100px',
              borderRadius: '4px',
              boxShadow: '1px 3px 10px black',
            }}
          >
            Stäng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewLink;
