import React from "react";

const Preview = ({ layout }) => {
  return (
    <div className="preview-container" style={{ marginTop: "2rem" }}>
      <h2>Preview</h2>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "1rem",
          background: "#f9f9f9",
          borderRadius: "5px",
        }}
      >
        {layout.map((section) => {
          switch (section.type) {
            case "header":
              return <h1 key={section.id}>{section.content}</h1>;
            case "text":
              return <p key={section.id}>{section.content}</p>;
            case "image":
              return <img key={section.id} src={section.content} alt="Preview" style={{ maxWidth: "100%" }} />;
            case "footer":
              return <footer key={section.id}>{section.content}</footer>;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Preview;
