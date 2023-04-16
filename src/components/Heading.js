import React from "react";
import PropTypes from "prop-types";

const Heading = ({ icon, title }) => {
  const Icon = icon;

  return (
    <div className="heading flex items-center pb-8 mb-5">
      <Icon size="2.0rem" className="mr-5 text-green-400" />
      <h6 className="font-bold uppercase text-xl text-green-400 leading-none">{title}</h6>
    </div>
  );
};

Heading.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

export default Heading;
