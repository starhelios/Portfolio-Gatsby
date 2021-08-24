import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import React from "react";
import Heading from "../components/Heading";
import { FaDev, FaLink } from "../components/Icons";
import * as styles from "./Projects.module.css";

const Projects = () => {
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
                gatsbyImageData(width: 400, layout: CONSTRAINED)
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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-10">
        {data.allProjectsJson.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className={`${styles.project} wow fadeIn`}
            style={{
              animationDelay: `${index * 150 + 150}ms`,
            }}
          >
            <OutboundLink
              href={node.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-48 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
            >
              <FaLink className="absolute" color="#FFF" size="5rem" />
              <GatsbyImage
                className="absolute w-full h-full object-cover rounded-lg hover:opacity-50 duration-200"
                alt={node.title}
                image={node.image.childImageSharp.gatsbyImageData}
              />
              <span className="sr-only">{node.title}</span>
            </OutboundLink>
            <h5 className="mt-4 w-5/6 truncate font-semibold">
              {node.title}
            </h5>
            <p className="mt-4 text-sm">{node.description}</p>

            <p className="pb-0 flex text-xs font-semibold">
              {node.tags.map(x => (
                <span key={x} className="mr-2">
                  #{x}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
   </section>
  );
};

export default Projects;
