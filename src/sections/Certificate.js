import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import React from "react";
import Heading from "../components/Heading";
import { FaCertificate, FaLink } from "../components/Icons";
import * as styles from "./Certificate.module.css";

const Certificate = () => {
  const data = useStaticQuery(graphql`
    {
      allCertificateJson {
        edges {
          node {
            id
            title
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
    <section id="certificate">
      <Heading icon={FaCertificate} title="certificate" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-10">
        {data.allCertificateJson.edges.map(({ node }, index) => (
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
          </div>
        ))}
      </div>
   </section>
  );
};

export default Certificate;
