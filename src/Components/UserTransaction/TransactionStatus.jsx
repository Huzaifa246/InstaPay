import { Card, CardBody, Col, Table } from "reactstrap";
import TransactionStatusCardHeader from "./TransactionStatusCardHeader";
import {
  Account_Number,
  Currency,
  Beneficiary_Name,
  Status,
  Recieved,
  Sent,
} from "../../Constant";
import CenterAlignedPagination from "./../BonusUi/Pagination/PaganationsAlignment/CenterAlignedPagination";
import TransactionStatusCardTableBody from "./TransactionStatusCardTableBody";
import { Number } from "./../../Constant/index";

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
                  <th scope="col">{Beneficiary_Name}</th>
                  <th scope="col">{Account_Number}</th>
                  <th scope="col">{Sent}</th>
                  <th scope="col">{Recieved}</th>
                  <th scope="col">{Number}</th>
                  <th scope="col">{Currency}</th>
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
