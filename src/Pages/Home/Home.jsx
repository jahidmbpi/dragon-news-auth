import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import BreakingNews from "./BreakingNews/BreakingNews";
import LeftSideNav from "./LeftSideNav/LeftSideNav";
import RightSideNav from "./RightSideNav/RightSideNav";
import NewsCard from "./Newscard/NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1  md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border">
          {news.map((newsdata) => (
            <NewsCard key={newsdata?._id} news={newsdata}></NewsCard>
          ))}
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
