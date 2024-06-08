import React, { useEffect, useState } from "react";
import { formatDate } from "../Helpers/helpers";
import Presidents from "./Presidents";

const Archive = ({ searchInputs }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formattedDate = `${searchInputs.year}/${searchInputs.month + 1}`;
  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "dakGsl89dvWtp72TvxtYL3CE527gCybo"; // Replace with your actual API key
      const url = `https://api.nytimes.com/svc/archive/v1/${formattedDate}.json?api-key=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const articleArray = data.response.docs.slice(0, 6);

  let index = 4;
  return (
    <div>
      <h1 className="bg-yellow-500">New York Times Archive</h1>

      <ul>
        {articleArray.map((article, index) => (
          <li key="index">
            <h3>Header: {article.headline.main}</h3>

            {article.multimedia[index] ? (
              <img
                src={`https://nytimes.com/${article.multimedia[index].url}`}
                alt="article-image"
              />
            ) : (
              <p>Snippet {article.snippet} </p>
            )}
          </li>
        ))}
      </ul>

      <Presidents searchInputs={searchInputs} />
    </div>
  );
};

export default Archive;
