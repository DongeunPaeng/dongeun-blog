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
          src="https://via.placeholder.com/150"
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
