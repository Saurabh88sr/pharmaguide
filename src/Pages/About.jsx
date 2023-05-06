import React, { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Form, Button } from "react-bootstrap";


function About() {
  const [searchTerm, setSearchTerm] = useState('');

    const items = [
      {
        id: 0,
        name: 'Cobaol'
      },
      {
        id: 1,
        name: 'paracitamal'
      },
      {
        id: 2,
        name: 'advil'
      },
      {
        id: 3,
        name: 'PaHP'
      },
      {
        id: 4,
        name: 'ramm'
      },
      {
        id: 5,
        name: 'apple'
      },
      {
        id: 6,
        name: 'dgfaff'
      },
      {
        id: 7,
        name: 'rema'
      },
      {
        id: 8,
        name: 'sam'
      },
      {
        id: 9,
        name: 'cacpple'
      },
      {
        id: 10,
        name: 'reccdgfaff'
      },
      {
        id: 11,
        name: 'menrema'
      },
      {
        id: 12,
        name: 'java'
      },
      {
        id: 13,
        name: 'saurabh'
      },
      {
        id: 14,
        name: 'verma'
      },
      {
        id: 15,
        name: 'varanasi'
      },
      {
        id: 16,
        name: 'india'
      }
    ]
    // Your item list here

  const handleOnSearch = (string, results) => {
    setSearchTerm(string);
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    );
  };

  const handleSearch = () => {
    // Perform search or any other logic here
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="App">
    <header className="App-header ">
    <Form onSubmit={handleSearch} className="ms-5 w-100">
          <Button variant="dark" type="submit" className="mb-2">
              Search for Compare
            </Button>
            <Form.Group >
            <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
            </Form.Group>

            
          </Form>
        

      </header>
    </div>
  );
}

export default About;
