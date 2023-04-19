import { employ } from "../../Data/Employe/Employ";
import { Image } from "../../AbstractElements";
import { dynamicImage } from "../../Services";

const TransactionStatusCardTableBody = () => {
  return (
    <tbody>
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
          <td>{item.designation}</td>
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
        </tr>
      ))}
    </tbody>
  );
};

export default TransactionStatusCardTableBody;
