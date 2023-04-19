import { CardHeader, Row, Col } from "reactstrap";
import { H4 } from "../../AbstractElements";
import { UserTransactions } from "../../Constant";
import React, { useState } from "react";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Calendar } from "react-feather";

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
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <H4>{UserTransactions}</H4>
        </Col>
        <Col xs={12} md={6} className="text-md-end text-center">
          <div className="date-range-picker-container">
            <div
              className="date-range-picker-icon"
              onClick={handleCalendarClick}
            >
              <Calendar />
            </div>
            {showCalendar && (
              <DateRangePicker
                ranges={[state]}
                onChange={handleDateChange}
                minDate={addDays(new Date(), -30)}
                maxDate={addDays(new Date(), 30)}
                direction="vertical"
                scroll={{ enabled: true }}
              />
            )}
          </div>
        </Col>
      </Row>
    </CardHeader>
  );
};

export default TransactionStatusCardHeader;
