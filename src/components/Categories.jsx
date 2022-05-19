import React, { useState } from "react";

function Categories({ onChoose }) {
  // eslint-disable-next-line
  const [categories, setCategories] = useState([
    {
      key: "all",
      name: "Все",
    },
    {
      key: "chairs",
      name: "Стулья",
    },
    {
      key: "tables",
      name: "Столы",
    },
  ]);
  return (
    <div className="categories">
      {categories.map((value) => (
        <div key={value.key} onClick={() => onChoose(value.key)}>
          {value.name}
        </div>
      ))}
    </div>
  );
}

export default Categories;
