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
          title="Your Room Booked!"
          subtitle="With full transparency and no extra hidden charges"
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