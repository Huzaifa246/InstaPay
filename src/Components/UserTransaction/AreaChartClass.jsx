import Chart from "react-apexcharts";
import { Card, Col } from "reactstrap";
import { areaSpalineTransaction } from "./apexDataTransaction";

const AreaChartClass = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <Col
      sm="11"
      md="6"
      xl="6"
      className={`box-col-6 ${isMobile ? "mobile" : ""}`}
    >
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
