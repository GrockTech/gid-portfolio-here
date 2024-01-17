import React from "react";

const About = () => {
  return (
    <div name="about" className=" min-h-screen w-full bg-black px-6">
      <div className="max-w-screen-lg p mx-auto flex flex-col justify-center h-full w-full ">
        <div className="pb-8 mt-10 text-center">
          <br />
          <p className="text-white text-4xl mt-8 font-bold inline border-b-4 border-gray-500">
            About Me{" "}
          </p>
        </div>
        <p className="text-white mt-4 text-xl text-justify">
          I'm Gideon Oti Arhin, a seasoned Full Stack Developer with over three
          years of hands-on experience in the dynamic world of web development.
          My journey began as a passionate Frontend Developer, where I honed my
          skills and crafted user-centric experiences for two impactful years.
          <br />
          Professional Journey: Full Stack Expertise: My proficiency spans the
        entire web development spectrum, encompassing both frontend and backend
        technologies. I bring a holistic approach to building robust and
        scalable applications. Tech Enthusiast: I thrive on embracing
        cutting-edge technologies, always seeking innovative solutions to
        deliver top-notch products. My commitment to staying abreast of industry
        trends ensures I bring the latest and best practices to every project.
        </p>
       
        <br />
        <p className="text-white text-xl"></p>
      </div>
    </div>
  );
};

export default About;
