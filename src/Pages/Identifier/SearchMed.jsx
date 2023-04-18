import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, { useState } from "react";


const SearchMed =()=>{
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState([]);
  
    const handleInputChange = (event) => {
      setInputText(event.target.value);
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const message = {
        text: inputText,
      };
      setMessages([...messages, message]);
      setInputText("");
  
      // const response = await axios.post('/api/chat', { message });
      // const chatResponse = response.data;
      // setMessages([...messages, chatResponse]);
    };

    return(
        <>
          <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1 className="text-center mt-5 mb-4">
            Identify your Medicine
          </h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type your message here"
              />
            </Form.Group>
            <Button variant="dark" type="submit" className="mb-5 mt-2">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
        </>
    );
};

export default SearchMed;