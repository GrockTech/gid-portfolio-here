import React from "react";
import GidPhoto from "../assets/pf.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen  w-full bg-gradient-to-b
     from-black to-gray-800 "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center mt-4 px-4 h-full  md:flex-row"
      >
        <div className="flex flex-col justify-center h-full g-8 ">
          <h4 className="text-4xl sm:text-5xl font-bold text-white md:space-y-18 ml-4">
            I'm a fullStack
            <br/> Developer
          </h4>

          <p className="text-gray-500 py-4 max-w-md ml-4 text-justify">
            I am a passionate Full Stack Developer with three years of industry
            experience. I am proficient in both frontend and backend
            development. I excel at creating robust and user friendly web
            applications. I am a detail oriented problem solver who follows best
            practices for code documentation and project management. I am
            committed to staying up-to-date with the latest technologies and a
            drive for excellence. I would be a valuable asset to any development
            or organization.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2
            flex items-center space-x-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="group-hover:rotate-90  duration-300">
                <FaArrowCircleRight className="p-2" size={40} />
              </span>
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <img
          style={{width: "300px", height: "300px"}}
            src={GidPhoto}
            alt="my profile"
            className="rounded-2xl mx-8 w-2/3 md:w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
