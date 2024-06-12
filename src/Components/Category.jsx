import { useEffect, useState } from "react";

export default function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <ul className="text-[#9F9F9F]">
        {category.map((cat, idx) => (
          <li
            className="p-4 hover:bg-[#E7E7E7] cursor-pointer hover:text-black"
            key={idx}
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
