import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Categorylist from './CategoryList';




export default function CategoryNews() {
  const { category } = useParams(); // Get the dynamic category from the URL
  const [categorynews, setcategorynews] = useState([]);

  useEffect(() => {
    fetch(`https://inshortsapi.vercel.app/news?category=${category}`)
      .then((response) => response.json())
      .then((data) => setcategorynews(data["data"]));
  }, [category]); // Refetch data when category changes

  return (
    <>
      <section className="w3l-about-breadcrumb">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 pt-5 pb-4">
          <div className="container pt-lg-5 pt-md-3 py-lg-4 pb-md-3">
            <h2 className="title">{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li><Link to="/">Category</Link></li>
              <li className="mx-2">/ </li>
              <li className="active">{category.charAt(0).toUpperCase() + category.slice(1)} News</li>
            </ul>
          </div>
        </div>
      </section>
      
      <Categorylist/>

      <div className="w3l-news" id="news">
        <section id="grids5-block" className="py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <h3 className="title-big text-center">{category.charAt(0).toUpperCase() + category.slice(1)} News</h3>
            <div className="row mt-lg-5 mt-4">
              {categorynews.map((value) => (
                <div className="col-lg-6 col-md-6 mt-md-0 mt-sm-4 mb-5" key={value.id}>
                  <div className="grids5-info">
                    <a href="#blog-single" className="d-block zoom">
                      <img
                        src={value.imageUrl}
                        alt=""
                        className="img-fluid news-image"
                        style={{ height: "300px" }}
                      />
                    </a>
                    <div className="blog-info">
                      <h4>
                        <Link to={value.readMoreUrl}>{value.title}</Link>
                      </h4>
                      <p className="date">
                        <span className="fa fa-calendar mr-2"></span>{" "}
                        {value.date}
                      </p>
                      <p>{value.content}</p>
                      <Link
                        to={value.readMoreUrl}
                        className="btn btn-news mt-4 "
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
}
