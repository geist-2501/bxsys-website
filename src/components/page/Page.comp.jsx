import React from 'react';
import Head from "next/head";
import PropTypes from "prop-types";
import Navbar from "../navbar/Navbar.comp";
import Footer from "../footer/Footer.comp";

const Page = ({meta, children}) => {
  return (
    <div>
      <Head>
        <title>{meta.name}</title>
        <meta name="description" content={meta.desc} />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

Page.propTypes = {
  meta: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.string
  })
}

Page.defaultProps = {
  meta: {
    name: "BXSYS",
    desc: "Made with next.js"
  }
}

export default Page;
