import { FcApproval } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { Table } from "react-bootstrap";
import { useState } from "react";

export default function Tablazat(tabla) {

  const [valasz, setValasz] = useState([]);

  const handleChange = (e) => {
    setValasz(e.target.valasz);
  };
  
  return (
    <div>
      <h1>Szavak</h1>
      <Table>
        <thead>
          <tr>
            <th>Angol</th>
            <th>Magyar</th>
            <th>Visszajelzés</th>
          </tr>
        </thead>
        <tbody>
          {tabla.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.angol}</td>
              <td>
                <input value={valasz} type="text" onChange={handleChange} />
              </td>
              <td> {item.magyar === valasz ? <FcApproval /> : <FcCancel />}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
