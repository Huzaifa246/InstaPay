import { employ } from "../../../../Data/Employe/Employ";
import { H5, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";

import Button from "react-bootstrap/Button";

const EmployeeStatusCardTableBody = () => {
  return (
    <tbody className="table-responsive">
      {employ.map((item, id) => (
        <tr key={id}>
          <td>
            <div className="d-flex">
              <Image
                attrImage={{
                  src: dynamicImage(`user/${item.img}`),
                  alt: "Image",
                }}
              />
              <div className="flex-grow-1">
                <H5>{item.name}</H5>
              </div>
            </div>
          </td>
          <td>{item.AccountNo}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.country}</td>
          <td>{item.defaultCurrancy}</td>
          <td>
            <div className="progress-showcase">
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className={`progress-bar bg-${item.color}`}
                  role="progressbar"
                  style={{ width: `${item.width}` }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </td>
          <td>
            <span className={`badge badge-light-${item.color}`}>
              {item.color}
            </span>
          </td>
          <td style={{ display: "flex", justifyContent: "space-around" }}>
            <i
              className="fa fa-eye"
              variant="outline"
              style={{ color: "#00bcd4", boxShadow: "0 0 10px #00bcd4" }}
            ></i>
            <i
              className="fa fa-edit"
              style={{ color: "#ffc107", boxShadow: "0 0 10px #ffc107" }}
            ></i>
            <i
              className="fa fa-trash-o"
              style={{ color: "#f44336", boxShadow: "0 0 10px #f44336" }}
            ></i>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default EmployeeStatusCardTableBody;
