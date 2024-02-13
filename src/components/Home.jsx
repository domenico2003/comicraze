import { Card, Col, Container, Row } from "react-bootstrap";
import banner from "../foto/banner.jpg";
import onePiece from "../foto/onePiece.jpg";
import aot from "../foto/aot.jpg";
import demonslayer from "../foto/demon_slayer.webp";
import myHeroHacademia from "../foto/myHeroAcademia.jpg";

let Home = () => {
  return (
    <Container fluid>
      <Card className="bg-dark text-white mt-3">
        <Card.Img src={banner} alt="Card image" />

        <Card.ImgOverlay>
          <Row sx={2} className="h-100">
            <Col className="text-center mt-auto mb-auto">
              <Card.Title className="font-fumetti titolo text-decoration-underline">
                ComiCraze
              </Card.Title>
              <Card.Text className="sottotitolo fs-3 fw-bold d-none d-sm-block">
                La fumetteria più pazza che ci sia!!!
              </Card.Text>
            </Col>
            <Col></Col>
          </Row>
        </Card.ImgOverlay>
      </Card>{" "}
      <p className="fs-1 font-fumetti text-decoration-underline text-center my-5 text-white  titolo-annuncio px-3">
        Ultime notizie!
      </p>
      <Row sx={1} md={2} className="mb-5">
        <Col className=" mt-auto mb-auto animazioneHover" data-aos="fade-right">
          <Card className="bg-dark text-white mt-3 position-relative ">
            <div className="card-notizie"></div>
            <Card.Img src={onePiece} alt="Card image" />

            <Card.ImgOverlay className="card-notizia ">
              <Card.Title className="font-fumetti text-center fs-1 text-decoration-underline">
                Capitolo 1107
              </Card.Title>
              <Card.Text>
                Sul finire del capitolo precedente abbiamo visto i pirati
                giganti Dory e Brogy arrivare su Egghead in cerca di Rufy, di
                cui conoscono la forma Gear 5. Saranno loro a salvare i Mugiwara
                in ONE PIECE 1107, oppure è solo l'avanguardia dei Pirati del
                Rosso? Nel nuovo capitolo scopriremo anche se il Distorted
                Future di Bonney è in grado di replicare Nika e se Vegapunk
                morirà, oppure se verrà salvato da una delle sue invenzioni
                geniali. A ogni modo, dovremo attendere. ONE PIECE è in pausa e
                il capitolo 1107 uscirà il 18 febbraio 2024.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>{" "}
        </Col>
        <Col className="d-none d-md-flex">
          <div className="box-commenti p-5 text-center mt-auto mb-auto ms-auto me-auto">
            <div>
              <p className="m-0 fw-bold">Mario Rossi:</p>
              <p className="m-0">"non vedo l'ora!!"</p>
            </div>
            <hr className="border-2 border-black" />
            <div>
              <p className="m-0 fw-bold">Luigi Verdi:</p>
              <p className="m-0">"Sarà emozionante!"</p>
            </div>
            <hr className="border-2 border-black" />
            <div>
              <p className="m-0 fw-bold">Sofia Bianchi:</p>
              <p className="m-0">"Non sto più nella pelle!"</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row sx={1} md={2} className="mb-5">
        <Col className="d-none d-md-flex">
          {" "}
          <div className="box-commenti p-5 text-center mt-auto mb-auto ms-auto me-auto">
            <div>
              <p className="m-0 fw-bold">Alessia Moretti:</p>
              <p className="m-0">"Non Può essere!!"</p>
            </div>
            <hr className="border-2 border-black" />
            <div>
              <p className="m-0 fw-bold">Luca Conti:</p>
              <p className="m-0">"Non ci voglio credere..."</p>
            </div>
            <hr className="border-2 border-black" />
            <div>
              <p className="m-0 fw-bold">Chiara Ferrari:</p>
              <p className="m-0">"Mi mancherà."</p>
            </div>
          </div>
        </Col>
        <Col className=" mt-auto mb-auto animazioneHover" data-aos="fade-left">
          <Card className="bg-dark text-white mt-3 position-relative ">
            <div className="card-notizie"></div>
            <Card.Img src={aot} alt="Card image" />

            <Card.ImgOverlay className="card-notizia ">
              <Card.Title className="font-fumetti text-center fs-1 text-decoration-underline">
                Attack on Titan:si Conclude la Storia Epica Dopo una Decade
              </Card.Title>
              <Card.Text>
                Dopo un'avventura di dieci anni piena di colpi di scena e
                suspense, il creatore di Attack on Titan, Hajime Isayama, ha
                annunciato la conclusione del manga, lasciando i fan in
                trepidante attesa per il destino finale dei protagonisti in
                questa saga distopica.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>{" "}
        </Col>
      </Row>
      <Row sx={1} md={2} className="mb-5">
        <Col className="animazioneHover mt-auto mb-auto" data-aos="fade-right">
          <Card className="bg-dark text-white mt-3 position-relative ">
            <div className="card-notizie"></div>
            <Card.Img src={demonslayer} alt="Card image" />

            <Card.ImgOverlay className="card-notizia ">
              <Card.Title className="font-fumetti text-center fs-1 text-decoration-underline">
                Demon Slayer: Kimetsu no Yaiba - Il Manga Continua a Dominare le
                Classifiche
              </Card.Title>
              <Card.Text>
                L'adattamento cartaceo del popolare anime continua a trionfare
                nelle classifiche di vendita dei manga in Giappone e nel mondo.
                Con una narrazione coinvolgente e uno stile artistico unico,
                Demon Slayer continua a catturare l'immaginazione dei lettori,
                consolidando il suo status di fenomeno globale
              </Card.Text>
            </Card.ImgOverlay>
          </Card>{" "}
        </Col>
        <Col className="d-none d-md-flex">
          {" "}
          <div className="box-commenti p-5 text-center mt-auto mb-auto ms-auto me-auto">
            <div>
              <p className="m-0 fw-bold">Matteo Russo:</p>
              <p className="m-0">"Continuiamo così!!"</p>
            </div>
            <hr className="border-2 border-black" />
            <div>
              <p className="m-0 fw-bold">Martina Colombo:</p>
              <p className="m-0">"Speriamo contiui così."</p>
            </div>
            <hr className="border-2 border-black" />
            <div>
              <p className="m-0 fw-bold">Federico De Angelis:</p>
              <p className="m-0">"D'altronde è il migliore!"</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row sx={1} md={2} className="mb-5">
        <Col className="d-none d-md-flex">
          <div className="box-commenti p-5 text-center mt-auto mb-auto ms-auto me-auto">
            <div>
              <p className="m-0 fw-bold">Sara Costa:</p>
              <p className="m-0">"Sono Contenta degli sviluppi!!"</p>
            </div>
            <hr className="border-2 border-black" />
            <div>
              <p className="m-0 fw-bold">Lorenzo Rizzo:</p>
              <p className="m-0">"Speriamo non finisca presto."</p>
            </div>
            <hr className="border-2 border-black" />
            <div>
              <p className="m-0 fw-bold">Andrea Marini:</p>
              <p className="m-0">"non vedo l'ora!"</p>
            </div>
          </div>
        </Col>
        <Col className="animazioneHover mt-auto mb-auto" data-aos="fade-left">
          <Card className="bg-dark text-white mt-3 position-relative ">
            <div className="card-notizie"></div>
            <Card.Img src={myHeroHacademia} alt="Card image" />

            <Card.ImgOverlay className="card-notizia ">
              <Card.Title className="font-fumetti text-center fs-1 text-decoration-underline">
                My Hero Academia: Nuovi Sviluppi Aggiungono Tensione al Manga
              </Card.Title>
              <Card.Text>
                Il manga My Hero Academia, che segue le avventure degli studenti
                della U.A. High School in un mondo popolato da supereroi, sta
                attirando l'attenzione dei fan con nuovi sviluppi che promettono
                di cambiare radicalmente il destino dei personaggi principali.
                Con nuovi nemici e alleati, il mondo dei supereroi è destinato a
                essere scosso da eventi epici.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>{" "}
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
