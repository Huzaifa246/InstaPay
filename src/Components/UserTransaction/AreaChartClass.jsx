import Chart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { AmountPayed } from "../../Constant/index";
import { areaSpalineTransaction } from "./apexDataTransaction";
import HeadingCommon from "../../Common/Component/HeadingCommon";

const AreaChartClass = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <HeadingCommon Heading={AmountPayed} />
        <CardBody className="pt-0">
          <div id="basic-apex">
            <Chart
              options={areaSpalineTransaction.options}
              series={areaSpalineTransaction.series}
              height="350"
              type="area"
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AreaChartClass;
