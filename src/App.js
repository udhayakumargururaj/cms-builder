import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Section from "./components/Section";
import Preview from "./components/Preview";
import Export from "./components/Export";

const templates = {
  blog: [
    { id: "1", type: "header", content: "Welcome to My Blog" },
    { id: "2", type: "text", content: "This is a sample blog post." },
    { id: "3", type: "footer", content: "Thank you for visiting!" },
  ],
  portfolio: [
    { id: "1", type: "header", content: "My Portfolio" },
    { id: "2", type: "image", content: "https://via.placeholder.com/150" },
    { id: "3", type: "text", content: "Here are some of my works." },
  ],
};

function App() {
  navigator.userAgentData
  .getHighEntropyValues([
    "architecture",
    "model",
    "platform",
    "platformVersion",
    "fullVersionList",
  ])
  .then((ua) => {
    alert(ua.model);
  });
  const [selectedTemplate, setSelectedTemplate] = useState("blog");
  const [layout, setLayout] = useState(templates[selectedTemplate]);

  const handleTemplateChange = (event) => {
    const templateName = event.target.value;
    setSelectedTemplate(templateName);
    setLayout(templates[templateName]);
  };

  const moveSection = (dragIndex, hoverIndex) => {
    const updatedLayout = [...layout];
    const [movedItem] = updatedLayout.splice(dragIndex, 1);
    updatedLayout.splice(hoverIndex, 0, movedItem);
    setLayout(updatedLayout);
  };

  return (
    <React.Fragment>
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <h1>CMS Builder</h1>

        {/* Template Selector */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Select a Template: </label>
          <select value={selectedTemplate} onChange={handleTemplateChange}>
            <option value="blog">Blog</option>
            <option value="portfolio">Portfolio</option>
          </select>
        </div>

        {/* Drag-and-Drop Layout */}
        <div
          style={{
            border: "1px solid #ddd",
            padding: "1rem",
            background: "#f9f9f9",
            borderRadius: "5px",
            minHeight: "200px",
          }}
        >
          {layout.map((section, index) => (
            <Section
              key={section.id}
              index={index}
              id={section.id}
              type={section.type}
              content={section.content}
              moveSection={moveSection}
            />
          ))}
        </div>
      </div>
    </DndProvider>
     <Preview layout={layout} />
     <Export layout={layout} />
     </React.Fragment>
  );
}

export default App;
