import React, { useState } from 'react';
import './App.css';

function App() {
  // Define the customization options
  const fabrics = ['#4A90E2', '#4A4A4A', '#D0021B', '#F5A623', '#7ED321', '#F8E71C'];
  const legs = ['#A52A2A', '#D2B48C', '#8B4513', '#FFE4C4', '#DAA520'];

  // Define state for current selections
  const [selectedFabric, setSelectedFabric] = useState(fabrics[0]);
  const [selectedLegs, setSelectedLegs] = useState(legs[0]);

  // Function to update fabric color
  const handleFabricChange = (fabric) => {
    setSelectedFabric(fabric);
  };

  // Function to update leg color
  const handleLegChange = (leg) => {
    setSelectedLegs(leg);
  };

  return (
    <div className="App">
      <h1>Customize Your Chair</h1>
      <div className="product-container">
        <div className="chair-preview">
          {/* Chair image preview, customized by fabric and leg color */}
          <div className="chair" style={{ backgroundColor: selectedFabric }}>
            <div className="legs" style={{ backgroundColor: selectedLegs }}>
              {/* Legs can be displayed here */}
            </div>
          </div>
        </div>

        {/* Fabric selection */}
        <div className="options">
          <h3>Select Fabric Color:</h3>
          <div className="fabric-options">
            {fabrics.map((fabric, index) => (
              <button
                key={index}
                style={{ backgroundColor: fabric }}
                className={`option-btn ${fabric === selectedFabric ? 'active' : ''}`}
                onClick={() => handleFabricChange(fabric)}
              ></button>
            ))}
          </div>

          {/* Legs selection */}
          <h3>Select Legs Color:</h3>
          <div className="legs-options">
            {legs.map((leg, index) => (
              <button
                key={index}
                style={{ backgroundColor: leg }}
                className={`option-btn ${leg === selectedLegs ? 'active' : ''}`}
                onClick={() => handleLegChange(leg)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
