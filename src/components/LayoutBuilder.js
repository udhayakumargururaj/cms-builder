import React from "react";

const LayoutBuilder = ({ setLayout }) => {
  return (
    <div style={{ width: "20%", padding: "1rem", backgroundColor: "#f4f4f4" }}>
      <h3>Layout Builder</h3>
      <button onClick={() => setLayout("blog")}>Load Blog Template</button>
      <button onClick={() => setLayout("portfolio")}>Load Portfolio Template</button>
    </div>
  );
};

export default LayoutBuilder;
