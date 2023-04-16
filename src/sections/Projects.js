import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import React, { useContext } from "react";
import Heading from "../components/Heading";
import ThemeContext from "../context/ThemeContext";
import { FaDev, FaLink } from "../components/Icons";

const Projects = () => {
  const { dark } = useContext(ThemeContext);

  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            description
            tags
            website
            image {
              childImageSharp {
                gatsbyImageData(width: 1200, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section id="projects">
      <Heading icon={FaDev} title="Projects" />

      <div className="">
        {data.allProjectsJson.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className="wow fadeIn w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20"
            style={{
              animationDelay: `${index * 100 + 100}ms`,
            }}
          >
            <OutboundLink
              href={node.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-screen-sm h-96 bg-black relative cursor-pointer rounded-lg shadow-lg relative"
            >
              <FaLink className="absolute left-1/2 top-1/2" color="#FFF" size="5rem" style={{transform: "translate(-50%, -50%)"}} />
              <GatsbyImage
                className="w-full h-full rounded-lg hover:opacity-50 duration-200"
                imgClassName="w-full"
                alt={node.title}
                image={node.image.childImageSharp.gatsbyImageData}
                objectFit="fill"
              />
              <span className="sr-only">{node.title}</span>
            </OutboundLink>
            <div className="text-left">
              <h5 className="lg:text-xl text-lg truncate font-semibold">
                {node.title}
              </h5>
              <p className="mt-4 lg:text-lg text-md">{node.description}</p>

              <p className="w-full pb-0 flex flex-wrap lg:text-md text-sm font-semibold">
                {node.tags.map(x => (
                  <span key={x} className={`${dark ? "bg-white text-black" : "bg-black text-white"} mr-2 mb-2 rounded-md pr-2 pl-2 pt-1 pb-1`}>
                    {x}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
   </section>
  );
};

export default Projects;
