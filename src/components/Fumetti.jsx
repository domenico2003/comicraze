import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { fumetti } from "../Fumetti";
import { useEffect } from "react";
const Fumetti = () => {
  useEffect(() => {
    console.log(fumetti);
  }, []);
  return (
    <Container>
      <div className="text-center my-3">
        <span className=" px-4 py-2 box-commenti h1 text-decoration-underline fw-bold font-fumetti ">
          {" "}
          Catalogo fumetti!
        </span>
      </div>

      <Row xs={1} sm={2} md={3} lg={4}>
        {fumetti?.map((obj) => (
          <Col key={obj?.id}>
            <Card className="card-mia  text-white my-4 animazioneHover">
              <Card.Img
                variant="top"
                className="img-card"
                src={obj?.immagine}
              />
              <Card.Body>
                <Card.Title className="text-center text-truncate fw-bold font-fumetti letter-spacing m-0">
                  {obj?.nome}
                </Card.Title>
                <Card.Text className="text-center descrizione">
                  {obj?.descrizione}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush bg-dark text-white">
                <ListGroup.Item className="d-flex card-mia border-black text-white justify-content-between">
                  <span className="fw-bold">Data di uscita:</span>{" "}
                  <span className="text-decoration-underline">
                    {obj.uscita}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex card-mia  border-black text-white justify-content-between">
                  <span className="fw-bold">N. Volumi:</span>{" "}
                  <span className="text-decoration-underline">
                    {obj?.volumi}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex card-mia text-white  justify-content-between">
                  {" "}
                  <span className="fw-bold">N. Capitoli:</span>{" "}
                  <span className="text-decoration-underline">
                    {obj?.capitoli}
                  </span>
                </ListGroup.Item>
              </ListGroup>
              <Button variant="success" className="rounded-top-0">
                {" "}
                ACQUISTA{" "}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Fumetti;
