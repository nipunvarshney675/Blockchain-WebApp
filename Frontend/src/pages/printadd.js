import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";

import Banner from "../components/Banner";
import Services from "../components/Services";
//import FeaturedRooms from "../components/FeaturedRooms";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="New Room added successfully!!"
          subtitle="According to data you provided."
        >
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <Services />
      {/* {<FeaturedRooms /> */}
    </>
  );
};

export default home;