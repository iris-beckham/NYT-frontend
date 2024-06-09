import React, { useEffect, useState } from "react";
import { writeOutMonth } from "../Helpers/helpers";
// import Skeleton from "react-loading-skeleton";
import { Box, ExternalLink } from "lucide-react";

const API_KEY = import.meta.env.VITE_NYT_API_KEY;

const Archive = ({ searchInputs, loading, setLoading }) => {
  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

  // const formattedDate = `${searchInputs.year}/${searchInputs.month + 1}`;
  useEffect(() => {
    // console.log(API_KEY)
    const fetchData = async () => {
      const url = `https://api.nytimes.com/svc/archive/v1/${searchInputs.year}/${searchInputs.month}.json?api-key=${API_KEY}`;

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
  const { day, month, year } = searchInputs;
  return (
    <div className="section">

      <ul className="m-3 grid articles md:grid-cols-3 xl:grid-cols-6 ">
        {articleArray.map((article, index) => (
          <li className="child p-50% rounded-sm hover:scale-105 transition-transform duration-300 hover:border-none  hover:shadow-lg hover:shadow-grey-200" key={index}>
            <div className="px-5">
              <div className="flex justify-center">
                <h3 className="dm-serif-text-regular text-center pt-3 px-1"> {article.headline.main}</h3>
                <a href={article.web_url} target="_blank"><ExternalLink size={15} className="hover:text-slate-400" /></a>
              </div>
              <div className="flex justify-center">
                <hr className="border-black my-3 w-1/2" />
              </div>

              {article.multimedia.length > 0 ? (
                <div className="flex justify-center">
                  <img className="archive-image px-2 mb-1"
                    src={`https://nytimes.com/${article.multimedia[article.multimedia.length - 1].url}`}
                    alt="article-image"
                  />
                </div>
              ) : (
                <p className="noto-sans-sogdian-regular"> {article.snippet ? article.snippet.substring(0, 100) + '...' : article.abstract.substring(0, 100) + '...'} </p>
              )}
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Archive;
