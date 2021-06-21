import React from "react";
import Balloon4 from "../MainCom/Balloon4.svg";

function Home() {
  return (
    <>
      <div className="container" id="header">
        <div className="container p-3 d-flex justify-content-between align-items-center">
          <div className="row d-flex justify-content-between align-items-center mx-auto">
            <div className="col-10 col-md-5 my-2 mx-auto order-2 order-md-1">
              <div className="content-div">
                <div>
                  <h1>
                    This <strong>React Website</strong> <br />
                  </h1>
                  <h1>
                    made by <strong>Manish</strong>
                  </h1>
                </div>
                <br />
                <p>
                  I create this website using bootstarp, react icons, google font, react routers, react hooks,
                  and Api's for weather & covid statewise cases app & for image finder.
                </p>
              </div>
            </div>
            <div className="col-10 col-md-5 my-2 mx-auto order-1 order-md-2">
              <div className="content-div">
                <img src={Balloon4} alt="" className="animated" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
