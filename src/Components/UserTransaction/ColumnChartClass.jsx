import Chart from "react-apexcharts";
import { Card, Col } from "reactstrap";
// import { ColumnChart } from "../../Constant/index";
import { apexDataTransaction } from "./apexDataTransaction";
// import HeadingCommon from "../../Common/Component/HeadingCommon";

const ColumnChartClass = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <Col
      sm="11"
      md="6"
      xl="6"
      className={`box-col-6 ${isMobile ? "mobile" : ""}`}
    >
      <Card>
        <div id="column-chart">
          <Chart
            options={apexDataTransaction.options}
            series={apexDataTransaction.series}
            type="bar"
            height={350}
            className="flex-grow-1"
          />
        </div>
      </Card>
    </Col>
  );
};

export default ColumnChartClass;
