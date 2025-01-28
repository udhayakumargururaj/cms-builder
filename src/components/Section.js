import React from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemType = "SECTION";

const Section = ({ id, index, type, content, moveSection }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item, monitor) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveSection(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        marginBottom: "1rem",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#fff",
        cursor: "move",
      }}
    >
      <strong>{type.toUpperCase()}</strong>: {type === "image" ? <img src={content} alt="Preview" style={{ maxWidth: "100%" }} /> : content}
    </div>
  );
};

export default Section;
