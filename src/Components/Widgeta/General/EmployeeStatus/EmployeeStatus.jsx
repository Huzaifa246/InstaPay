import { Card, CardBody, Col, Table } from "reactstrap";
import EmployeeStatusCardHeader from "./EmployeeStatusCardHeader";
import {
  Account_Number,
  Actions,
  Country,
  Currency,
  Email,
  Name,
  Number,
  SkillLevel,
  Status,
} from "../../../../Constant";
import EmployeeStatusCardTableBody from "./EmployeeStatusCardTableBody";
import CenterAlignedPagination from "./../../../BonusUi/Pagination/PaganationsAlignment/CenterAlignedPagination";

const EmployeeStatus = () => {
  return (
    <Col xl="12" lg="12" md="12">
      <Card className="employee-status">
        <EmployeeStatusCardHeader />
        <CardBody>
          <div className="table-responsive">
            <Table className="table-bordernone">
              <thead>
                <tr>
                  <th scope="col">{Name}</th>
                  <th scope="col">{Account_Number}</th>
                  <th scope="col">{Email}</th>
                  <th scope="col">{Number}</th>
                  <th scope="col">{Country}</th>
                  <th scope="col">{Currency}</th>
                  <th scope="col">{SkillLevel}</th>
                  <th scope="col">{Status}</th>
                  <th scope="col" className="text-center">
                    {Actions}
                  </th>
                </tr>
              </thead>
              <EmployeeStatusCardTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
      <CenterAlignedPagination />
    </Col>
  );
};

export default EmployeeStatus;
