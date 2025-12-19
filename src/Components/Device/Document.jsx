import sys from "../../assets/images/devicecomputer.png";

const Document = () => {
  const doc = [
    { id: 1, title: "Receipt", img: sys },
    { id: 2, title: "Insurance papers", img: sys },
    { id: 3, title: "Warranty doc", img: sys },
    { id: 4, title: "Receipt", img: sys },
  ];
  return (
    <div className="text-white">
      <h1 className="text-2xl">Documents</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center py-3 gap-3">
        {doc.map((obj, index) => (
          <div key={index}>
            <h1>{obj.title}</h1>
            <img src={obj.img} alt="" className="mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Document;
