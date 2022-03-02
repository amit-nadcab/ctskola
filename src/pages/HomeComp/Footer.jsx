import React from "react";
import { BsFacebook, BsTelegram, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container-fluid py-5" style={{ background: "#141A28" }}>
        <div className="row my-5 mx-5">
          <div className="col-lg-4 col-md-4 col-sm-12 text-center">
            <h5 style={{color: "#CDCFD4"}}>About Us</h5>
            <p>
              <a className="" style={{ fontWeight: "400" , color: "#CDCFD4" }}>
                About
              </a>
            </p>

            <p>
              <a  style={{ fontWeight: "400",color: "#CDCFD4" }}>
                Career
              </a>
            </p>

            <p>
              <a  style={{ fontWeight: "400",color: "#CDCFD4" }}>
                Business Contacts
              </a>
            </p>
            <p>
              <a  style={{ fontWeight: "400",color: "#CDCFD4" }}>
                Community
              </a>
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 text-center">
            <h5 style={{color: "#CDCFD4"}}>Service</h5>
            <p  style={{ fontWeight: "400", color: "#CDCFD4" }}>
              INR Trade
            </p>
            <p>
              <a
                href="#"
                
                style={{ fontWeight: "400", color: "#CDCFD4" }}
              >
                Request TOKEN
              </a>
            </p>
            <p  style={{ fontWeight: "400", color: "#CDCFD4" }}>
              Unique trade
            </p>
            <p  style={{ fontWeight: "400", color: "#CDCFD4" }}>
              Safe trade
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mysocial">
            <h5 style={{color: "#CDCFD4"}}>Social Links</h5>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a
                className="text-light text-decoration-none"
                href="https://www.facebook.com/CtsKola-102693045651442/"
                style={{ fontWeight: "400" }}
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook style={{ height: "20px", margin: "0px 5px" }} />
                <span className="align-top" style={{color: "#CDCFD4"}}>Facebook</span>
              </a>
              <a
                style={{ fontWeight: "400" }}
                className="text-light  text-decoration-none py-2"
                href="https://twitter.com/CtsKola/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterCircle
                  style={{ height: "20px", margin: "0px 5px" }}
                />
                <span className="align-top" style={{color: "#CDCFD4"}}>Twitter</span>
              </a>
              <a
                style={{ fontWeight: "400" }}
                className="text-light  text-decoration-none py-2"
                href="https://t.me/+ubgDH4F2B-ZiMDVl/"
                target="_blank"
                rel="noreferrer"
              >
                <BsTelegram style={{ height: "20px", margin: "0px 5px" }} />
                <span className="align-top" style={{color: "#CDCFD4"}}>Telegram</span>
              </a>
              <a
                style={{ fontWeight: "400" }}
                className="text-light  text-decoration-none"
                href="https://instagram.com/ctskola?utm_medium=copy_link/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram style={{ height: "20px", margin: "0px 5px" }} />
                <span className="align-top" style={{color: "#CDCFD4"}}>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
