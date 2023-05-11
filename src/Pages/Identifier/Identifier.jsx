import React, { useState } from "react";
import medicineData from "./medicineData.json";

const Identifier = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedShape, setSelectedShape] = useState("");
  const [matchedMedicines, setMatchedMedicines] = useState([]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  const handleSearch = () => {
    const filteredMedicines = medicineData.filter(
      (medicine) => medicine.color === selectedColor && medicine.shape === selectedShape
    );
    if (filteredMedicines.length > 0) {
      setMatchedMedicines(filteredMedicines);
    } else {
      setMatchedMedicines([]);
    }
  };

  return (
    <div className="container w-50 mt-4 cardcolor p-5">
      <h1 className="p-3">Pill Identifier</h1>
      <div className="p-2">
      <label htmlFor="color">Pill Imprint</label><br />
        <input type="text" className="form-control" placeholder="Pill Imprint" /><br />
        <label htmlFor="color">Color:</label><br />
        <select value={selectedColor} className="btn btn-secondary dropdown-toggle" onChange={handleColorChange}>
          <option value="">Select a color</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
          {/* Add more color options as needed */}
        </select>
      </div>
      <div className="p-2">
        <label htmlFor="shape">Shape: </label><br />
        <select value={selectedShape} className="btn btn-secondary dropdown-toggle" onChange={handleShapeChange}>
          <option value="">Select a shape</option>
          <option value="Round">Round</option>
          <option value="Oval">Oval</option>
          <option value="Square">Square</option>
          {/* Add more shape options as needed */}
        </select>
      </div>
      <button className="btn btn-dark" onClick={handleSearch}>Search</button>
      {matchedMedicines.length > 0 ? (
        <div>
          <h3>Matched Medicines:</h3>
          <ul>
            {matchedMedicines.map((medicine) => (
              <li key={medicine.name}>
                <p>Medicine Name: <strong>{medicine.name}</strong></p>
                <p>Color: {medicine.color}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Color and Shape is not optional</p>
      )}
    </div>
  );
};

export default Identifier;
