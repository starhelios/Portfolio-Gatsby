import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Social from "../components/Social";
import Subtitle from "../components/Subtitle";

const Hero = () => {
  const [showSocial, setShowSocial] = useState(false);
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(height: 128, placeholder: NONE, layout: CONSTRAINED)
        }
      }
      profile: file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
          gatsbyImageData(height: 1200, placeholder: NONE, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <section id="hero" className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-16 justify-center lg:justify-start items-center mt-8 md:mt-12 lg:mt-0">
        <div className="w-full col-span-2">
          <GatsbyImage
            alt="Jackson Noah"
            className="max-w-lg h-auto mx-auto lg:mx-0"
            image={data.profile.childImageSharp.gatsbyImageData}
          />
        </div>
        <div className="col-span-3 text-center lg:text-left">
          <GatsbyImage
            alt="Jackson Noah"
            className="max-w-lg max-h-32 mx-auto lg:mx-0"
            image={data.logo.childImageSharp.gatsbyImageData}
          />

          <h1 className="sr-only">
            Jackson Noah&apos;s Portfolio <br />
            Full Stack Engineer from FL, USA
          </h1>

          <div className="text-center lg:text-left flex flex-col items-center lg:ml-4 lg:items-start">
            <Subtitle onDone={() => setShowSocial(true)} />

            <div className="w-full md:w-auto h-6 my-6">
              {showSocial && <Social />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
