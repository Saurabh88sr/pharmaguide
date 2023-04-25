import React, {  useState } from 'react';
import axios from 'axios';

function MedicineCompare() {
  const [data, setData] = useState([]);
  const[drugName, setDrugName] = useState("Advil");

    const handleSubmit = async (event) => {
      event.preventDefault();
      const options = {
        method: 'GET',
        url: 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo',
        params: { drug: drugName },
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': '4fd660d289msh63b67201ed3a818p185564jsnb5cd3f16dcc6',
          'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div>
      <h1>Advil Drug Information</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="drugName">Enter Name:</label>
        <input type="text" id='drugName' value={drugName} onChange={(event)=> setDrugName(event.target.value)}/>
        <button type='submit'>sesrch</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Description</th>
            <th>Drug Class</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index,) => (
            <tr key={index}>
              <td>{item.generic_name}</td>
              <td>{item.BrandName}</td>
              <td>{item.Description}</td>
              <td>{item.labeler_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicineCompare;
