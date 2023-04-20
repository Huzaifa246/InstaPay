import { employ } from "../../../../Data/Employe/Employ";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

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
          <td>
            <ButtonGroup>
              <Button variant="outline">
                <FaEye
                  style={{ color: "#00bcd4", boxShadow: "0 0 10px #00bcd4" }}
                />
              </Button>
              <Button variant="outline">
                <FaEdit
                  style={{ color: "#ffc107", boxShadow: "0 0 10px #ffc107" }}
                />
              </Button>
              <Button variant="outline">
                <FaTrash
                  style={{ color: "#f44336", boxShadow: "0 0 10px #f44336" }}
                />
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default EmployeeStatusCardTableBody;
