import EmployeeStatus from "./EmployeeStatus/EmployeeStatus";
import { Container, Row } from "reactstrap";

const General = () => {
  return (
    <>
      <div>
        <Container fluid={true} className="general-widget">
          <Row>
            <EmployeeStatus />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default General;
