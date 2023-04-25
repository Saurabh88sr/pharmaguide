import React, { useState } from "react";
import axios from "axios";
import { Form, Button, ListGroup } from "react-bootstrap";

function SearchMed() {
  const [data, setData] = useState([]);
  const [drugName, setDrugName] = useState("advil");
  const [messages, setMessages] = useState([]);

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

  return (
    <div>
      <div className="container justify-content-md-center p-3 mt-2 w-75">
        <h1>Identify Your Medicine</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              value={drugName}
              onChange={(event) => setDrugName(event.target.value)}
              placeholder="Type your message here"
            />
          </Form.Group>
          <Button variant="dark" type="submit" className="mb-5 mt-2">
            Submit
          </Button>
        </Form>
        <ListGroup className="mb-5">
          {data.map((item, index) => (
            <ListGroup.Item
              key={index}
              className="justify-content-md-center bg-light"
            >
              <div className="container justify-content-md-center bg-light">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-dark">Generic Name: ${item.generic_name}</p>
                <p className="text-dark">Generic Name: ${item.generic_name}</p>
                <p className="text-dark">Generic Name: ${item.generic_name}</p>
                <p className="text-dark">Generic Name: ${item.generic_name}</p>
                <p className="text-dark">Generic Name: ${item.generic_name}</p>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default SearchMed;
