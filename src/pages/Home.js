import { useEffect, useState } from "react";
import DataService from "../modell/DataService";
import Tablazat2 from "../view/Tablazat2";
//import Karytak from "../view/Kartyak";
import { Form } from "react-bootstrap";

export default function Home() {
  const DB = new DataService();
  const [objLista1, setObjLista1] = useState([]);
  const [objLista2, setObjLista2] = useState([]);
  const [value, setValue] = useState(["Emberitest"]);

  useEffect(() => {
    DB.getData("szavak/1", setObjLista1);
    DB.getData("szavak/2", setObjLista2);
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // const getCurrentList = () => {
  //   if (value === "Emberi test") {
  //     return objLista1;
  //   } else {
  //     return objLista2;
  //   }
  // };
  // const [width, setWidth] = useState(window.innerWidth);
  // const breakpoint = 700;
  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <div className="valaszto">
    {console.log(objLista1)}
    <h1>Szótár</h1>
      <Form.Group className="mb3">
        <Form.Label> Szavak</Form.Label>
        <Form.Select id="tema" value={value} onChange={handleChange}>
          <option value="Emberi test">Emberi test</option>
          <option value="Állatok">Állatok</option>
        </Form.Select>
      </Form.Group>
      <Tablazat2/>
      {/*<Tablazat szavak={value == "Emberi test" ? objLista1 : objLista2} />
        {width > breakpoint ? (
        <Tablazat szavak={value == "Emberi test" ? objLista1 : objLista2} />
      ) : (
        <Karytak szavak={getCurrentList()} />
      )}  */}
    </div>
  );
}
