import { useState, useEffect } from "react";

const URL = import.meta.env.VITE_BASE_URL

const BabyNames = ({ searchInputs, loading, setLoading }) => {
  const[babyNames, setBabyNames] = useState([])

  useEffect(() => {
    // console.log(searchInputs.year)
    // console.log(`${URL}/api/babies/${searchInputs.year}`)
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
  return (
    <div>
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
