import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Categorylist from './CategoryList';

export default function Searchpage() {

  let [category, setcategory] = useState([]);

  let searchcate = useLocation().search.split('=')[1];
  
  useEffect(()=>{
    fetch(`https://inshortsapi.vercel.app/news?category=${searchcate}`)
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setcategory(data["data"]);
    })
  })
  return (
    <>
     <section className="w3l-about-breadcrumb">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 pt-5 pb-4">
          <div className="container pt-lg-5 pt-md-3 py-lg-4 pb-md-3">
            <h2 className="title">{searchcate.charAt(0).toUpperCase() + searchcate.slice(1)} News</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li><Link to="/">Category</Link></li>
              <li className="mx-2">/ </li>
              <li className="active">{searchcate.charAt(0).toUpperCase() + searchcate.slice(1)} News</li>
            </ul>
          </div>
        </div>
      </section>
      <Categorylist/>
      <div className="w3l-news" id="news">
        <section id="grids5-block" className="">
          <div className="container py-lg-5 py-md-4 py-2">
            <h3 className="title-big text-center">{searchcate.charAt(0).toUpperCase() + searchcate.slice(1)} News</h3>
            <div className="row mt-lg-5 mt-4">
              {category.map((value) => {
                return (
                  <div className="col-lg-6 col-md-6 mt-md-0 mt-sm-4 mb-5 ">
                    <div className="grids5-info">
                      <Link to={value.readMoreUrl} className="d-block zoom">
                        <img
                          src={value.imageUrl}
                          alt=" news image"
                          className="img-fluid news-image"
                          style={{ height: "300px" }}
                        />
                      </Link>
                      <div className="blog-info">
                        <h4>
                          <Link to={value.readMoreUrl}>{value.title}</Link>
                        </h4>
                        <p className="date">
                          <span className="fa fa-calendar mr-2"></span>{" "}
                          {value.date}
                        </p>
                        <Link
                          to={value.readMoreUrl}
                          className="btn btn-news mt-4 "
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
