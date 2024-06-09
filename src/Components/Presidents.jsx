import { useEffect, useState } from "react";
const URL = import.meta.env.VITE_BASE_URL;

const Presidents = ({ searchInputs, loading, setLoading }) => {
  const [presidents, setPresidents] = useState([]);


  useEffect(() => {
    fetch(`${URL}/api/presidents`)
      .then((res) => res.json())
      .then((data) => {
        setPresidents(data);
      });
  }, []);

  const findPres = (presArr, year) => {
    if(presArr && year) {
      const modArr = presArr.filter(p => p.term_start.split('-')[0] && year < p.term_end.split('-')[0])
      if(modArr[0]) {
         return (
          <>
          <img src={modArr[0].image} alt={modArr[0].pres_name} />
          <h2>{modArr[0].pres_name}</h2>
          </>
        )
        }
    }
    
  }

  if(loading) return null;

  return (
    <div className="pres-container dm-serif-text-regular">
      <div>
        <h1>President</h1>
        {findPres(presidents, searchInputs.year)}
      </div>
    </div>
  );
};

export default Presidents;
