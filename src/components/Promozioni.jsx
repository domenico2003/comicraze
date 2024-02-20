import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import silverPlus from "../foto/silver.png";
import gold from "../foto/gold.jpg";
import platinum from "../foto/platinum.png";
const Promozioni = () => {
  return (
    <Container>
      <div className="text-center my-3">
        <span className=" px-4 py-2 box-commenti h1 text-decoration-underline fw-bold font-fumetti ">
          {" "}
          ABBONAMENTI!
        </span>
      </div>
      <Row xs={1} md={2} lg={3} className="justify-content-center">
        <Col>
          <Card className="card-mia  text-white my-4 animazioneHover">
            <Card.Img
              variant="top"
              className="img-card-abbonamenti"
              src={silverPlus}
            />
            <Card.Body>
              <Card.Title className="text-center text-truncate fw-bold font-fumetti letter-spacing m-0">
                Silver!
              </Card.Title>
              <Card.Text className="text-center">
                Abbonati per avere i seguenti vantaggi!
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush bg-dark text-white">
              <ListGroup.Item className="d-flex card-mia border-black text-white justify-content-between">
                <span className="fw-bold">Scoto acquisti:</span>{" "}
                <span className="text-decoration-underline">10%</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex card-mia border-black text-white justify-content-between">
                <span className="fw-bold">Sconto Spedizione:</span>{" "}
                <span className="text-decoration-underline">10%</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex card-mia border-black text-white justify-content-between">
                <span className="fw-bold">Durata:</span>{" "}
                <span className="text-decoration-underline">15 gg</span>
              </ListGroup.Item>
            </ListGroup>
            <div className=" card-mia text-white my-4 h5 text-center">
              {" "}
              <span className="fw-bold">Prezzo:</span>{" "}
              <span className="text-decoration-underline">1.99€</span>
            </div>
            <Button variant="success" className="rounded-top-0">
              {" "}
              ABBONATI{" "}
            </Button>
          </Card>
        </Col>

        <Col>
          <Card className="card-mia  text-white my-4 animazioneHover">
            <Card.Img
              variant="top"
              className="img-card-abbonamenti"
              src={gold}
            />
            <Card.Body>
              <Card.Title className="text-center text-truncate fw-bold font-fumetti letter-spacing m-0">
                Gold!
              </Card.Title>
              <Card.Text className="text-center">
                Abbonati per avere i seguenti vantaggi!
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush bg-dark text-white">
              <ListGroup.Item className="d-flex card-mia border-black text-white justify-content-between">
                <span className="fw-bold">Spedizione:</span>{" "}
                <span className="text-decoration-underline">Gratuita</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex card-mia  border-black text-white justify-content-between">
                <span className="fw-bold">Altro:</span>{" "}
                <span className="text-decoration-underline">
                  quelli abbonamento silver!
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex card-mia border-black text-white justify-content-between">
                <span className="fw-bold">Durata:</span>{" "}
                <span className="text-decoration-underline">30 gg</span>
              </ListGroup.Item>
            </ListGroup>
            <div className=" card-mia text-white my-4 h5 text-center">
              {" "}
              <span className="fw-bold">Prezzo:</span>{" "}
              <span className="text-decoration-underline">4.99€</span>
            </div>
            <Button variant="success" className="rounded-top-0">
              {" "}
              ABBONATI{" "}
            </Button>
          </Card>
        </Col>
        <Col>
          <Card className="card-mia  text-white my-4 animazioneHover">
            <Card.Img
              variant="top"
              className="img-card-abbonamenti"
              src={platinum}
            />
            <Card.Body>
              <Card.Title className="text-center text-truncate fw-bold font-fumetti letter-spacing m-0">
                Platinum!
              </Card.Title>
              <Card.Text className="text-center ">
                Abbonati per avere i seguenti vantaggi!
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush bg-dark text-white">
              <ListGroup.Item className="d-flex card-mia border-black text-white justify-content-between">
                <span className="fw-bold">Omaggio:</span>{" "}
                <span className="text-decoration-underline">
                  1 volume ad acquisto
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex card-mia  border-black text-white justify-content-between">
                <span className="fw-bold">Altro:</span>{" "}
                <span className="text-decoration-underline">
                  quelli abbonamento gold!
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex card-mia border-black text-white justify-content-between">
                <span className="fw-bold">Durata:</span>{" "}
                <span className="text-decoration-underline">45 gg</span>
              </ListGroup.Item>
            </ListGroup>
            <div className=" card-mia text-white my-4 h5 text-center">
              {" "}
              <span className="fw-bold">Prezzo:</span>{" "}
              <span className="text-decoration-underline">9.99€</span>
            </div>
            <Button variant="success" className="rounded-top-0">
              {" "}
              ABBONATI{" "}
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Promozioni;
