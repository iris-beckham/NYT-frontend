import { useEffect, useState } from "react";
const URL = import.meta.env.VITE_BASE_URL;

const Presidents = ({ searchInputs }) => {
  const [presidents, setPresidents] = useState([]);
  useEffect(() => {
    fetch(`${URL}/api/presidents`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setPresidents(data);
      });
  }, []);

  return (
    <div className="bg-purple-300">
      <div>Presidents</div>
    </div>
  );
};

export default Presidents;
