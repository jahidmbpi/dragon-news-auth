import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
  const news = useLoaderData();
  const [singleNews, setSingleNews] = useState(null);
  useEffect(() => {
    const filteredData = news.find((news) => news?._id === id);
    setSingleNews(filteredData);
  }, [id, news]);

  return (
    <div>
      <h2>this is news details {singleNews?.details}</h2>
    </div>
  );
};

export default NewsDetails;
