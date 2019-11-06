import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Nav from "../components/nav";

const Home = ({ notes }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <main>
      <ul>
        {notes.map(({ id, title, description }) => (
          <li key={id}>
            {title} - {description}
          </li>
        ))}
      </ul>
    </main>

    <style jsx>{``}</style>
  </div>
);

// TODO: Generate a query for this portion
// How to know it requires a query?
Home.propTypes = {
  notes: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

Home.defaultProps = {
  notes: [],
};

export default Home;
