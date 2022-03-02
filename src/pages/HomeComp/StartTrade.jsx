import React from "react";
import { Link } from "react-router-dom";

export default function StartTrade() {
  return (
    <>
      <div className="container-fluid text-dark" style={{background: "#141A28"}}>
        <div className="row text-center py-5">
          <div className="col-12">
            <h4 style={{color: "#CDCFD4"}}>Start Trading now</h4>
            <div className="my-4">
              <Link className="mx-4 px-4" to="/login" style={{
                  backgroundColor: "#04DA9A",
                  padding: "6px 10px",
                  color: "white",
                  borderRadius: "3px",
                }}
                >Register Now</Link>
              <Link
                className="btn btn-light px-4 mx-4"
                
                to="/exchange/btc-inr"
              >
                Trade Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
