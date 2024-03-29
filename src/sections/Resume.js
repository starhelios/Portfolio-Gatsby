import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { FaLink, IoIosDocument } from "../components/Icons";

const Resume = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "resume/preview.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1200, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <section id="resume">
      <Heading icon={IoIosDocument} title="Resume" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:gap-8 items-center">
        <div className="col-span-1 md:col-span-3">
          <OutboundLink
            href="https://drive.google.com/file/d/1cxxRNNLelpDCkYiuO91LaCb7VD_1X32C/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-64 md:h-48 lg:h-64 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
          >
            <FaLink className="absolute" color="#FFF" size="5rem" />
            <GatsbyImage
              alt="Link to Resume PDF"
              className="absolute w-full h-64 md:h-48 lg:h-64 object-cover rounded-lg hover:opacity-50 duration-200"
              imgStyle={{ objectPosition: "top" }}
              image={data.file.childImageSharp.gatsbyImageData}
            />
            <span className="sr-only">Download Resume</span>
          </OutboundLink>
        </div>
        <div className="col-span-1 md:col-span-3">
          <h5 className="text-lg lg:text-xl font-semibold">
            To those HRs out there who need a more organized and minimal version
            of my information, you can download the trusted PDF version here:
          </h5>

          <Button
            className="mt-8"
            icon={IoIosDocument}
            title="Download Resume"
            onClick={() =>
              window.open("https://drive.google.com/file/d/1cxxRNNLelpDCkYiuO91LaCb7VD_1X32C/view?usp=sharing", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
