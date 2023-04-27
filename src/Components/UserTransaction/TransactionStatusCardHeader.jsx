import { CardHeader, Row, Col, Container } from "reactstrap";
import { H4 } from "../../AbstractElements";
import { UserTransactions } from "../../Constant";
import React, { useState } from "react";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Calendar } from "react-feather";
import ColumnChartClass from "./ColumnChartClass";
import AreaChartClass from "./AreaChartClass";

const TransactionStatusCardHeader = () => {
  const [state, setState] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });
  const [showCalendar, setShowCalendar] = useState(false);

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (ranges) => {
    setState(ranges.selection);
  };

  return (
    <CardHeader className="pb-0">
      <div className="d-flex">
        <div className="flex-grow-1">
          <Row>
            <ColumnChartClass />
            <AreaChartClass />
          </Row>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <H4>{UserTransactions}</H4>
            </Col>

            <Col xs={12} md={6} className="text-md-end text-center">
              <div
                className="btn btn-link p-0 date-range-picker-button position-relative d-flex align-items-end justify-content-end"
                onClick={handleCalendarClick}
              >
                <Calendar />
              </div>
              {showCalendar && (
                <div
                  className="position-absolute w-100 date-range-picker-overlay p-1"
                  style={{ zIndex: "9999" }}
                >
                  <DateRangePicker
                    ranges={[state]}
                    onChange={handleDateChange}
                    minDate={addDays(new Date(), -30)}
                    maxDate={addDays(new Date(), 30)}
                    direction="vertical"
                    scroll={{ enabled: true }}
                  />
                </div>
              )}
            </Col>
          </Row>
        </div>
      </div>
    </CardHeader>
  );
};

export default TransactionStatusCardHeader;
