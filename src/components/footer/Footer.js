import { Col, Row, Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h2>رسالت میرحسین کاویانی</h2>
            <p>
              امیرحسین کاویانی با هدف تولید آموزش هایی ایجاد شده ، که حس شیرینِ
              یادگیری لذت بخش برنامه نویسی و طراحی وب رو تجربه کنید.
            </p>
          </Col>
          <Col style={{ textAlign: "left" }}>
            <img src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
