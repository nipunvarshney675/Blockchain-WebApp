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
          title="luxurious rooms"
          subtitle="With full transparency and no extra hidden charges"
        >
          <Link to="/room" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      {/* {<FeaturedRooms /> */}
    </>
  );
};

export default home;