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
              animationDelay: `${index * 100 + 100}ms`,
            }}
          >
            <OutboundLink
              href={node.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:h-48 h-64 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg mb-8"
            >
              <FaLink className="absolute" color="#FFF" size="5rem" />
              <GatsbyImage
                className="absolute w-full h-full object-cover rounded-lg hover:opacity-50 duration-200"
                alt={node.title}
                image={node.image.childImageSharp.gatsbyImageData}
              />
              <span className="sr-only">{node.title}</span>
            </OutboundLink>
          </div>
        ))}
      </div>
   </section>
  );
};

export default Certificate;
