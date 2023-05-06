import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import DrugTable from "../Identifier/DrugTable";
import GenericTable from "./GenericTable";

function MedicineCompare() {
  const [data, setData] = useState([]);
  const [genrData, setGenrData] = useState([]);
  const [drugName, setDrugName] = useState("advil");
  const [genrName, setGenrName] = useState("Dolo");

  const [messages, setMessages] = useState([]);
  // const [showRules, setShowRules] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = {
      text: drugName,
    };

    setMessages([...messages, message]);
    setDrugName("");
    const options = {
      method: "GET",
      url: "https://drug-info-and-price-history.p.rapidapi.com/1/druginfo",
      params: { drug: drugName },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "4fd660d289msh63b67201ed3a818p185564jsnb5cd3f16dcc6",
        "X-RapidAPI-Host": "drug-info-and-price-history.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // const toggleRules = () => {
  //   setShowRules(!showRules);
  // };
  const handleGenr = async (event) => {
    event.preventDefault();
    // setShowRules(!showRules);
    const message = {
      text: genrName,
    };
    setMessages([...messages, message]);
    setGenrName("");
    const options = {
      method: "GET",
      url: "https://drug-info-and-price-history.p.rapidapi.com/1/druginfo",
      params: { drug: genrName },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "4fd660d289msh63b67201ed3a818p185564jsnb5cd3f16dcc6",
        "X-RapidAPI-Host": "drug-info-and-price-history.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setGenrData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container justify-content-md-center  ">
        <h1 className="p-2">Compare Your Medicine</h1>
        <div className=" d-flex mb-4">
          <Form onSubmit={handleSubmit} className="ms-5 w-100">
          <Button variant="dark" type="submit" className="mb-2">
              Medicine Search
            </Button>
            <Form.Group >
              <Form.Control
                type="text"
                value={drugName}
                onChange={(event) => setDrugName(event.target.value)}
                placeholder="Type your Medicine here"
              />
            </Form.Group>
            
          </Form>
          <Form onSubmit={handleGenr} className="ms-5 w-100">
          <Button variant="dark" type="submit" className="mb-2">
              Search for Compare
            </Button>
            <Form.Group >
              <Form.Control
                type="text"
                value={genrName}
                onChange={(event) => setGenrName(event.target.value)}
                placeholder="Type your Medicine here"
              />
            </Form.Group>

            
          </Form>
        </div>
        <div className="justify-content-md-center d-flex">
          {data.map((item, index) => (
            <div key={index} className=" d-flex">
                <GenericTable />
              <DrugTable
                name={item.name}
                genrName={item.generic_name}
                // ingredients={item.active_ingredients}
                brand={item.brand_name}
                brandBaseName={item.brand_name_base}
                dosge={item.dosage_form}
                productType={item.product_type}
                pharmaClass={item.pharm_class}
                route={item.route}
                labeler={item.labeler_name}
                NDC={item.product_ndc}
                dcs={item.description}
              />
            </div>
          ))}
          {
            // showRules &&
            genrData.map((item, index) => (
              <div key={index} className=" d-flex">
                <DrugTable
                  name={item.name}
                  genrName={item.generic_name}
                  // ingredients={item.active_ingredients}
                  brand={item.brand_name}
                  brandBaseName={item.brand_name_base}
                  dosge={item.dosage_form}
                  productType={item.product_type}
                  pharmaClass={item.pharm_class}
                  route={item.route}
                  labeler={item.labeler_name}
                  NDC={item.product_ndc}
                  dcs={item.description}
                />
              </div>
            ))
          }

          {/* {showRules ? <DrugTable /> : ""} */}
        </div>
      </div>
    </div>
  );
}

export default MedicineCompare;

// import React, {  useState } from 'react';
// import axios from 'axios';

// function MedicineCompare() {
//   const [data, setData] = useState([]);
//   const[drugName, setDrugName] = useState("Advil");

//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       const options = {
//         method: 'GET',
//         url: 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo',
//         params: { drug: drugName },
//         headers: {
//           'content-type': 'application/octet-stream',
//           'X-RapidAPI-Key': '4fd660d289msh63b67201ed3a818p185564jsnb5cd3f16dcc6',
//           'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
//         }
//       };
//       try {
//         const response = await axios.request(options);
//         setData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//   return (
//     <div>
//       <h1>Advil Drug Information</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="drugName">Enter Name:</label>
//         <input type="text" id='drugName' value={drugName} onChange={(event)=> setDrugName(event.target.value)}/>
//         <button type='submit'>sesrch</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Generic Name</th>
//             <th>Brand Name</th>
//             <th>Description</th>
//             <th>Drug Class</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index,) => (
//             <tr key={index}>
//               <DrugTable name={item.name}
//               genrName={item.generic_name}/>
//               <td>{item.generic_name}</td>
//               <td>{item.BrandName}</td>
//               <td>{item.Description}</td>
//               <td>{item.labeler_name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default MedicineCompare;
