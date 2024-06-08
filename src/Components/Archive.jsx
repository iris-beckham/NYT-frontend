import React, { useEffect, useState } from "react";

const Archive = ({ searchInputs, loading, setLoading }) => {
  const [data, setData] = useState(null);
  
  const [error, setError] = useState(null);

  // const formattedDate = `${searchInputs.year}/${searchInputs.month + 1}`;
  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "dakGsl89dvWtp72TvxtYL3CE527gCybo"; // Replace with your actual API key
      const url = `https://api.nytimes.com/svc/archive/v1/${searchInputs.year}/${searchInputs.month}.json?api-key=${apiKey}`;

      try {
        setLoading(true); // Set loading state to true before fetching data
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Set loading state to false after fetching data
      }
    };

    fetchData();
  }, [searchInputs]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const articleArray = data.response.docs.slice(0, 6);

  return (
    <div className="bg-yellow-500">
      <h1>New York Times Archive</h1>

      <ul>
        {articleArray.map((article, index) => (
          <li key={index}>
            <h3>Header: {article.headline.main}</h3>

            {article.multimedia.length > 0 ? (
              <img
                src={`https://nytimes.com/${article.multimedia[article.multimedia.length - 1].url}`}
                alt="article-image"
              />
            ) : (
              <p>Snippet: {article.snippet ? article.snippet.substring(0, 100) + '...' : article.abstract.substring(0, 100) + '...' } </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Archive;
