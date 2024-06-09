import { useState, useEffect } from "react";

const URL = import.meta.env.VITE_BASE_URL

const BabyNames = ({ searchInputs, loading, setLoading }) => {
  const[babyNames, setBabyNames] = useState([])

  useEffect(() => {
    if(searchInputs) {
        fetch(`${URL}/api/babies/${searchInputs.year}`)
        .then((res) => res.json())
        .then((data) => {
        // console.log(data)
        if(data) {

          setBabyNames(data);
          }
      });
    }
  }, [searchInputs]);

  // console.log(babyNames)

  if(loading) return null;
  return (
    <div className="bg-cyan-300">
      {babyNames.length > 0 ? (
        <>
          <h2>BOY: {babyNames[0].name }</h2>
          <h2>GIRL: {babyNames[1].name }</h2>
        </>
      ) : (
        null
      )}
    </div>
  )
};

export default BabyNames;
