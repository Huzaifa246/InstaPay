import Chart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { areaSpalineTransaction } from "./apexDataTransaction";

const AreaChartClass = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <div id="basic-apex">
          <Chart
            options={areaSpalineTransaction.options}
            series={areaSpalineTransaction.series}
            height="350"
            type="area"
          />
        </div>
      </Card>
    </Col>
  );
};

export default AreaChartClass;
