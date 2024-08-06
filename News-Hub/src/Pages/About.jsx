import React from "react";
import { Link } from "react-router-dom";

import Categorylist from "./CategoryList";

export default function About() {
  return (
    <>
      <section className="w3l-about-breadcrumb">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 pt-5 pb-4">
          <div className="container pt-lg-5 pt-md-3 py-lg-4 pb-md-3">
            <h2 className="title">News Category</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li>
                <a href="index.html">News</a>
              </li>
              <li className="mx-2">/ </li>
              <li className="active">Category</li>
            </ul>
          </div>
        </div>
      </section>
      <Categorylist/>
      {/* <section className="w3l-team py-5" id="team">
        <div className="container py-lg-5 py-md-4 py-2">
          <h3 className="title-big text-center mx-0 mb-lg-5 mb-4">
            News Category
          </h3>
          <div className="row team-row">
            <div className="col-lg-4 col-sm-6 team-wrap ">
              <div className="team-member text-center">
                <div className="team-img">
                  <img
                    src="../assets/images/catagories/cricket.jpeg"
                    alt="sports-news"
                    className="img-fluid radius-image"
                    style={{ height: "225px" }}
                  />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p
                        style={{ fontSize: "45px", fontWeight: "200" }}
                        className="mt-4"
                      >
                        Sport
                      </p>
                      <div className="socials mt-4">
                        <Link to="/cricket">
                          <i className="fa fa-paper-plane"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/cricket">
                  <h6 className="team-title">Cricket News</h6>
                </Link>
                
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 team-wrap mt-sm-0 mt-5">
              <div className="team-member text-center">
                <div className="team-img">
                  <img
                    src="../assets/images/catagories/business.jpeg"
                    alt="business-news"
                    className="img-fluid radius-image"
                    style={{ height: "225px" }}
                  />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p
                        style={{ fontSize: "45px", fontWeight: "200" }}
                        className="mt-4"
                      >
                        Business
                      </p>
                      <div className="socials mt-4">
                        <Link to="/business">
                          <i className="fa fa-paper-plane"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/business">
                  <h6 className="team-title">Business News</h6>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 team-wrap mt-lg-0 mt-5">
              <div className="team-member last text-center">
                <div className="team-img">
                  <img
                    src="../assets/images/catagories/science.jpeg"
                    alt="science-news"
                    className="img-fluid radius-image"
                    style={{ height: "225px" }}
                  />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p
                        style={{ fontSize: "45px", fontWeight: "200" }}
                        className="mt-4"
                      >
                        Science
                      </p>
                      <div className="socials mt-4">
                        <a href="/science">
                          <i className="fa fa-paper-plane"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/science">
                  <h6 className="team-title mb-5">Science News</h6>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 team-wrap mt-lg-0 mt-5">
              <div className="team-member last text-center">
                <div className="team-img">
                  <img
                    src="../assets/images/catagories/technology.jpeg"
                    alt="technology-news"
                    className="img-fluid radius-image"
                    style={{ height: "225px" }}
                  />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p
                        style={{ fontSize: "45px", fontWeight: "200" }}
                        className="mt-4"
                      >
                        Technology
                      </p>
                      <div className="socials mt-4">
                        <a href="/technology">
                          <i className="fa fa-paper-plane"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/technology">
                  <h6 className="team-title">Technology News</h6>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 team-wrap mt-lg-0 mt-5">
              <div className="team-member last text-center">
                <div className="team-img">
                  <img
                    src="../assets/images/catagories/entetainment.jpeg"
                    alt="entertainment-news"
                    className="img-fluid radius-image"
                    style={{ height: "225px" }}
                  />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p
                        style={{ fontSize: "45px", fontWeight: "200" }}
                        className="mt-4"
                      >
                        Entertainment
                      </p>
                      <div className="socials mt-4">
                        <a href="/entertainment">
                          <i className="fa fa-paper-plane"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/entertainment">
                  <h6 className="team-title">Entertainment News</h6>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 team-wrap mt-lg-0 mt-5">
              <div className="team-member last text-center">
                <div className="team-img">
                  <img
                    src="../assets/images/catagories/world.jpeg"
                    alt="world news"
                    className="img-fluid radius-image"
                    style={{ height: "225px" }}
                  />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p
                        style={{ fontSize: "45px", fontWeight: "200" }}
                        className="mt-4"
                      >
                        World
                      </p>
                      <div className="socials mt-4">
                        <a href="/world">
                          <i className="fa fa-paper-plane"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/world">
                  <h6 className="team-title mb-5">World News</h6>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 team-wrap mt-lg-0 mt-5">
              <div className="team-member last text-center">
                <div className="team-img">
                  <img
                    src="../assets/images/catagories/education.jpeg"
                    alt="education-news"
                    className="img-fluid radius-image"
                    style={{ height: "225px" }}
                  />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p
                        style={{ fontSize: "45px", fontWeight: "200" }}
                        className="mt-4"
                      >
                        Education
                      </p>
                      <div className="socials mt-4">
                        <a href="/education">
                          <i className="fa fa-paper-plane"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/education">
                  <h6 className="team-title">Education News</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="w3l-clients py-5" id="clients">
    <div className="call-w3 py-lg-5 py-md-4 py-2">
        <div className="container">
            <h3 className="title-big text-center">Our Clients</h3>
            <div className="company-logos text-center mt-sm-5 mt-4">
                <div className="row logos">
                    <div className="col-lg-2 col-md-3 col-4">
                        <img src="assets/images/brand1.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4">
                        <img src="assets/images/brand2.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4">
                        <img src="assets/images/brand3.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 mt-md-0 mt-4">
                        <img src="assets/images/brand4.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                        <img src="assets/images/brand5.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                        <img src="assets/images/brand6.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 mt-4">
                        <img src="assets/images/brand3.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 mt-4">
                        <img src="assets/images/brand6.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 mt-4">
                        <img src="assets/images/brand5.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 mt-4">
                        <img src="assets/images/brand1.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 mt-4">
                        <img src="assets/images/brand2.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 mt-4">
                        <img src="assets/images/brand4.png" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */}
    </>
  );
}
