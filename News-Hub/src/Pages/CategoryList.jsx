import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "cricket",
  "business",
  "technology",
  "science",
  "world",
  "education",
  "entertainment",
  "football"
];

export default function Categorylist() {
  return (
    <>
      <section id="moreservices">
        <div className="container">
          <div className="row">
            {categories.map((cat) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2" key={cat}>
                <Link to={`/${cat}`} className="area-box">
                  <div className="text-center">
                    <span
                      className={`fa fa-${
                        cat === "cricket"
                          ? "trophy"
                          : cat === "business"
                          ? "briefcase"
                          : cat === "technology"
                          ? "desktop"
                          : cat === "science"
                          ? "flask"
                          : cat === "world"
                          ? "globe"
                          : cat === "education"
                          ? "book"
                          : cat === "entertainment"
                          ? "film"
                          : cat === "football"
                          ? "futbol-o"
                          : "star"
                      } fa-1x`} /* Reduced icon size */
                    ></span>
                    <div className="mt-1">
                      <h4 className="title-head">
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          #moreservices {
            padding: 10px;
          }

          .area-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            background-color: #f9f9f9;
            border-radius: 5px;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
            text-decoration: none;
            padding: 8px; /* Further reduced padding */
            color: #3b3663;
          }

          .area-box:hover {
            background-color: #e9ecef;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
          }

          .title-head {
            color: #3b3663;
            text-decoration: none;
            font-size: 0.9rem; /* Reduced font size */
          }

          .title-head:hover {
            color: #ff668a;
          }

          .fa-1x {
            color: #ff668a; /* Default color for icons */
            transition: color 0.3s ease;
            font-size: 1.5rem; /* Adjusted font size for icons */
          }

          .area-box:hover .fa-1x {
            color: #3b3663; /* Change icon color on hover */
          }

          @media (max-width: 575.98px) {
            .area-box {
              padding: 6px; /* Further reduced padding for smaller screens */
            }

            .fa-1x {
              font-size: 1.25rem; /* Adjusted font size for smaller screens */
            }

            .title-head {
              font-size: 0.85rem;
            }
          }

          @media (max-width: 767.98px) {
            .area-box {
              padding: 7px;
            }

            .fa-1x {
              font-size: 1.35rem;
            }

            .title-head {
              font-size: 0.9rem;
            }
          }

          @media (max-width: 991.98px) {
            .area-box {
              padding: 8px;
            }

            .fa-1x {
              font-size: 1.5rem;
            }

            .title-head {
              font-size: 0.95rem;
            }
          }

          @media (max-width: 1199.98px) {
            .area-box {
              padding: 9px;
            }

            .fa-1x {
              font-size: 1.65rem;
            }

            .title-head {
              font-size: 1rem;
            }
          }
        `}</style>
      </section>
    </>
  );
}
