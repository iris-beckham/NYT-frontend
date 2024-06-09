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
    <div className="baby-container dm-serif-text-regular">
      {babyNames.length > 0 ? (
        <>
          <h1>Popular Names</h1>
          <div className="names">
            <h2 className="boy">{babyNames[0].name }</h2>
            <h2 className="girl">{babyNames[1].name }</h2>
          </div>
        </>
      ) : (
        <h2>NO POPULAR NAMES RECORDED</h2>
      )}
    </div>
  )
};

export default BabyNames;
