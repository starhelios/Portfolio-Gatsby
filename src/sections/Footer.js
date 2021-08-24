import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="pt-24 pb-8 text-xs leading-relaxed opacity-25">
        <div>Copyright {new Date().getFullYear()} Jackson Noda.</div>
      </div>
    </section>
  );
};

export default Footer;
