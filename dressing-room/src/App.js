import React from "react";
import Wardrobe from "./Components/Wardrobe";
import DressingRoom from "./Components/DressingRoom";

function App() {
  return (
    <div className="App container-fluid p-5">
      <div className="row">
        <div className="col-8">
          <Wardrobe />
        </div>
        <div className="col-4">
          <DressingRoom />
        </div>
      </div>
    </div>
  );
}

export default App;
