import { employ } from "../../Data/Employe/Employ";
import { H5, Image } from "../../AbstractElements";
import { dynamicImage } from "../../Services";

const TransactionStatusCardTableBody = () => {
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
          <td>{item.type}</td>
          <td>{item.phone}</td>
          <td>{item.country}</td>
          <td>{item.amount}</td>
          <td>
            <span
              style={{
                backgroundColor: `${item.color}`,
                padding: "5px",
                borderRadius: "5px",
                color: "white",
              }}
            >
              {item.status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TransactionStatusCardTableBody;
