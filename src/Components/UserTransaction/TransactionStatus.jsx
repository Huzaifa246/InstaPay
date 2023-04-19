import { Card, CardBody, Col, Table } from "reactstrap";
import TransactionStatusCardHeader from "./TransactionStatusCardHeader";
import {
  Account_Number,
  Country,
  Currency,
  Designation,
  Email,
  Name,
  Number,
  SkillLevel,
  Status,
} from "../../Constant";
import CenterAlignedPagination from "./../BonusUi/Pagination/PaganationsAlignment/CenterAlignedPagination";
import TransactionStatusCardTableBody from "./TransactionStatusCardTableBody";

const TransactionStatus = () => {
  return (
    <Col xl="12" lg="12" md="12">
      <Card className="employee-status">
        <TransactionStatusCardHeader />
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
                  <th scope="col">{Designation}</th>
                  <th scope="col">{SkillLevel}</th>
                  <th scope="col">{Status}</th>
                </tr>
              </thead>
              <TransactionStatusCardTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
      <CenterAlignedPagination />
    </Col>
  );
};

export default TransactionStatus;
