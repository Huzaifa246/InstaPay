import { Container, Row } from "reactstrap";
import H1 from "./../../../CommonElements/Headings/H1Element";

const Default = () => {
  return (
    <>
      <Container fluid={true} className="dashboard-default">
        <Row>
          <H1>Dashboard</H1>
        </Row>
      </Container>
    </>
  );
};

export default Default;
