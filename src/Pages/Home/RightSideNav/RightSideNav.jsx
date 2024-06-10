import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-3 p-4 mb-6">
        <h2 className="text-3xl">logIn with</h2>
        <button className="btn btn-outline w-full">
          <span>
            {" "}
            <FaGoogle />
          </span>{" "}
          login with google
        </button>
        <button className="btn btn-outline w-full">
          <span>
            {" "}
            <IoLogoGithub />
          </span>{" "}
          login with github
        </button>
      </div>
      <div className=" p-4 mb-6">
        <h2 className="text-3xl mb-4">Find Us On</h2>
        <button className=" items-center p-4 flex w-full rounded-t-lg border">
          <span>
            {" "}
            <FaFacebookF className="mr-3" />
          </span>{" "}
          Facebook
        </button>
        <button className="  items-center p-4 flex w-full border">
          <span className="text-blue-400">
            {" "}
            <FaTwitter className="mr-3" />
          </span>{" "}
          Twitter
        </button>
        <button className="items-center p-4 flex w-full border rounded-b-lg">
          <span>
            {" "}
            <FaTwitter className="mr-3" />
          </span>{" "}
          Twitter
        </button>
      </div>
      <div className="space-y-3 p-4 mb-6 bg-[#F3F3F3]">
        <h2 className="text-3xl">Q-Zone</h2>

        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
