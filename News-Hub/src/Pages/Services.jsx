import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Categorylist from './CategoryList';

export default function Services() {

    let [article, setarticle] = useState([]);
    
    useEffect(()=>{
        fetch("https://inshorts.vercel.app/news/top")
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                setarticle(data["data"]["articles"]);
            })
    })
    


  return (
    <>
      <section className="w3l-about-breadcrumb">
    <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 pt-5 pb-4">
        <div className="container pt-lg-5 pt-md-3 py-lg-4 pb-md-3">
            <h2 className="title">News Articles</h2>
            <ul className="breadcrumbs-custom-path mt-2">
                <li><Link to="/">News</Link></li>
                <li className="mx-2">/ </li>
                <li className="active">Article</li>
            </ul>
        </div>
    </div>
</section>



<div className="w3l-news" id="news">
        <section id="grids5-block" className="py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <h3 className="title-big text-center">News Articles</h3>
            <div className="row mt-lg-5 mt-4">
              {article.map((value) => {
                return (
                  <div className="col-lg-6 col-md-6 mt-md-0 mt-sm-4 mb-5">
                    <div className="grids5-info shadow-lg">
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
                          <Link to={value.sourceUrl}>{value.title}</Link>
                        </h4>
                        <p className="category mt-4 mb-4">
                        <span className="fa fa-bookmark mr-2"></span>{" "}
                          {value.categoryNames[0]},{value.categoryNames[1]}
                        </p>
                        <p>{value.content}</p>
                        <Link
                          to={value.sourceUrl}
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

      <Categorylist/>
    </>
  )
}