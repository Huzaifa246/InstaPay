import { employ } from "../../Data/Employe/Employ";
import { H5, Image } from "../../AbstractElements";
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
              <div className="flex-grow-1">
                <H5>{item.name}</H5>
              </div>
            </div>
          </td>
          <td>{item.AccountNo}</td>
          <td>{item.Sent}</td>
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
                alignContent: "center",
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
