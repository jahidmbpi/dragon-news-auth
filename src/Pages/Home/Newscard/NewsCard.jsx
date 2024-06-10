import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewsCard = ({ news }) => {
  const { details, image_url, title, _id } = news;
  console.log(news);
  return (
    <div>
      <div className="p-5">
        <h2 className="font-poppins font-bold">{title}</h2>
        <img src={image_url} alt="" />
        {details.length > 200 ? (
          <p>
            {news.details.slice(0, 200)}
            <Link className="text-blue-600 font-bold ml-4" to={`/news/${_id}`}>
              see more..
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
