import React from 'react';
import Head from "next/head";
import PropTypes from "prop-types";
import Navbar from "../navbar/Navbar.comp";
import Footer from "../footer/Footer.comp";
import styles from './Page.module.scss';
import Adventure from "../../utils/adventure";

const shh = new Adventure();
shh.init();

const Page = ({meta, margin, children}) => {

  const marginClass = margin ? styles[`m-${margin}`] : styles.m_reg

  return (
    <div>
      <Head>
        <title>{meta.name}</title>
        <meta name="description" content={meta.desc} />
      </Head>
      <Navbar />
      <div className={marginClass}>
        {children}
      </div>
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
