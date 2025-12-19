import React from "react";
import systemdoc from "../../assets/images/devicecomputer.png";

const Devicedocs = () => {
  const doc = [
    { name: "Receipt", img: systemdoc },
    { name: "Insurance papers", img: systemdoc },
    { name: "Warranty Doc", img: systemdoc },
    { name: "Receipt", img: systemdoc },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
      {doc.map((system) => (
        <div key={system}>
          <p>{system.name}</p>
          <img src={system.img} alt="doc-img" />
        </div>
      ))}
    </div>
  );
};

export default Devicedocs;
