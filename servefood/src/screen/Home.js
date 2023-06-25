import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
export default function Home() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Carousel/>
      </div>
      <div>
        <Cards/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
