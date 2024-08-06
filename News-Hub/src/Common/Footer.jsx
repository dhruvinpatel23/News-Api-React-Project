import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <section className="w3l-footer-29-main">
        <div className="footer-29 py-5">
          <div className="container py-lg-4">
            <div className="row footer-top-29">
              <div className="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
                <div className="footer-logo mb-4">
                  <Link className="navbar-brand" to="">
                    Daily News
                  </Link>
                </div>
                <p>
                  We are real pros at digital and web design. We work for our
                  clients to provide them with the best service and products. We
                  value every project as we get invaluable experience.
                </p>
                <div className="main-social-footer-29 mt-4">
                  <Link to="#facebook" className="facebook">
                    <span className="fa fa-facebook"></span>
                  </Link>
                  <Link to="#twitter" className="twitter">
                    <span className="fa fa-twitter"></span>
                  </Link>
                  <Link to="#instagram" className="instagram">
                    <span className="fa fa-instagram"></span>
                  </Link>
                  <Link to="#linkedin" className="linkedin">
                    <span className="fa fa-linkedin"></span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5">
                <ul>
                  <h6 className="footer-title-29">Useful Links</h6>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="#blog"> Blog posts</Link>
                  </li>
                  <li>
                    <Link to="#pricing"> Pricing plans</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Resources</h6>
                <ul>
                  <li>
                    <Link to="/">News</Link>
                  </li>
                  <li>
                    <Link to="/about">Category</Link>
                  </li>
                  <li>
                    <Link to="/services">Article</Link>
                  </li>
                  <li>
                    <Link to="/">Search</Link>
                  </li>
                  <li>
                    <Link to="#customers">Detailed News</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Instagram posts</h6>
                <div className="post1">
                  <Link to="#url" className="post-title">
                    Practice Safe Design. Always Use...
                  </Link>
                  <p>
                    We work for our clients to provide them with the best
                    service
                  </p>
                </div>
                <div className="post1 mt-4">
                  <Link to="#url" className="post-title">
                    How to Start when You...{" "}
                  </Link>
                  <p>
                    We work for our clients to provide them with the best
                    service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <section className="w3l-copyright text-center">
        <div className="container">
          <p className="copy-footer-29">
            © 2024 Daily News. All rights reserved. Design by{" "}
            <Link to="https://w3layouts.com/" target="_blank">
              Dhruvin Patel
            </Link>
          </p>
        </div>
      </section>
    </section>
    </>
      
  )
}
