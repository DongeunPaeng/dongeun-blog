import { Row, Col, Media, Image } from "react-bootstrap";

const AuthorIntro = () => (
  <Row>
    <Col md="8">
      <Media className="mb-4 admin-intro">
        <Image
          roundedCircle
          width={64}
          height={64}
          className="mr-3"
          src="https://www.dropbox.com/s/7cwt1tz4v1r4ew4/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202020-07-26%2018.32.31.png?raw=1"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
          <p className="welcome-text">
            My name is Dongeun Paeng and I am running a startup. I'm also a
            freelancing devleoper for multilple clients.
          </p>
        </Media.Body>
      </Media>
    </Col>
  </Row>
);

export default AuthorIntro;
