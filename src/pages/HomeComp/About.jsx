import React, { useEffect } from "react";
//import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import { FcSalesPerformance, BiGitCompare, HiCubeTransparent } from 'react-icons/all'
import Card from './Card';

export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <Header />
      {/* <Banner image={"about_us.png"} /> */}
      <div className="wrap-about">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-md-6 about-img">
              <img src="./img/pngwing.com-1.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <h4 className="about-top">CTSKOLA</h4>
              <h2 className="about-head">Who Are We</h2>
              <p className="about-paraOne">
                Ctskola has everything you need to buy, sell, and trade crypto.
                An intuitive experience from the start.
              </p >
              <p className="about-paraTwo">From day one, we designed and built a streamlined crypto exchange for newcomers and experts alike.</p>
              <p className="about-paraOne"> Make easy deposits and withdrawals, measure your portfolio's performance and keep track of all of your crypto in one convenient place.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5" style={{ background: "#141A28" }}>
        <div className="container mx-auto">
          <h2 className="text-center py-4">Ctskola Key Features</h2>
          <div className="row d-flex align-center justify-content-center">
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center" data-aos="zoom-in-up">
              <Card title="Real-Time Price"
                content="Find the crypto data you need  whether you’re looking to trade on a new to the exchange, invest in a fresh currency."
                comp={<FcSalesPerformance style={{ fontSize: "3rem", color: "#CB9615" }} className="m-3" />} />
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center" data-aos="zoom-in-up">
              <Card title="Comparisons"
                content="Find the crypto data you need  whether you’re looking to trade on a new to the exchange, invest in a fresh currency."
                comp={<BiGitCompare style={{ fontSize: "3rem", color: "#CB9615" }} className="m-3" />} />
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center" data-aos="zoom-in-up">
              <Card title="Transparent"
                content="Find the crypto data you need  whether you’re looking to trade on a new to the exchange, invest in a fresh currency."
                comp={<HiCubeTransparent style={{ fontSize: "3rem", color: "#CB9615" }} className="m-3" />} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
