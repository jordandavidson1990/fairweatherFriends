import React, { useState } from "react";
import Cube from "../components/cube/cube";

export default function CubePage() {
  const [showCube, setShowCube] = useState(false);

  const handleShowCube = () => {
    setShowCube(true);
  };
  return (
    <div>
      cube
      {showCube ? (
        <Cube />
      ) : (
        <button value="Show the Cube" onClick={handleShowCube} />
      )}
    </div>
  );
}
