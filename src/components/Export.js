import React from "react";

const Export = ({ layout }) => {
  const exportHTML = () => {
    const html = layout
      .map((section) => {
        if (section.type === "text") {
          return `<div><p>${section.content}</p></div>`;
        }
        if (section.type === "image") {
          return `<div><img src="${section.content}" alt="User provided"/></div>`;
        }
        return `<div><h3>${section.type.toUpperCase()}</h3></div>`;
      })
      .join("");

    const blob = new Blob([html], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "layout.html";
    link.click();
  };

  return (
    <div style={{ width: "20%", padding: "1rem", backgroundColor: "#f9f9f9" }}>
      <h3>Export</h3>
      <button onClick={exportHTML}>Export as HTML</button>
    </div>
  );
};

export default Export;
