import React from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <br></br>
      <div>
        <Carousel />
      </div>

      <div className="m-4">
        <Body /> <Body /> <Body /> <Body />
        <Body /> <Body /> <Body /> <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
