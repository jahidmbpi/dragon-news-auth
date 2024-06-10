import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categorise, setCatagorise] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCatagorise(data));
  }, []);

  return (
    <div className=" space-x-6">
      <h2>All categorise</h2>

      {categorise.map((category) => (
        <Link
          className="ml-4 block text-xl font-medium"
          key={category.id}
          to={`/categoty/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
