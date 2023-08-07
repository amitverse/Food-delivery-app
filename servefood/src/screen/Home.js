import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
export default function Home() {
  const [search, setsearch] = useState('')
  const [foodCat, setfoodCat] = useState([])
  const [foodIteams, setfoodIteams] = useState([])

  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json()
    // console.log(response[1], response[0])
    setfoodCat(response[1])
    setfoodIteams(response[0])
  }
  useEffect(() => {
    loaddata()
  }, [])

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

          <div className="carousel-inner " id='carousel'>
            <div className=" carousel-caption  " style={{ zIndex: "9" }}>
              <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search..." aria-label="Search" value={search}
                onChange={(e)=>{setsearch(e.target.value)}}/>
                {/* <button className="btn text-white bg-success" type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active" >
              <img src="https://source.unsplash.com/random/900x600/?burger" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x600/?pastry" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x600/?barbeque" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container'>
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="m-3, fs-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {
                    foodIteams !== []
                      ? foodIteams.filter((iteam) => (iteam.CategoryName === data.CategoryName) && (iteam.name.toLowerCase().includes(search.toLowerCase())))
                        .map((filterIteam) => {
                          return (
                            <div key={filterIteam._id} className="col-12 col-md-6 col-lg-3">
                              <Cards
                                foodIteam={filterIteam}
                                options={filterIteam.options[0]}
                              ></Cards>
                            </div>
                          )
                        }) : <div>No Iteam in this category</div>
                  }
                </div>
              )
            }) : <div>No such Category available</div>

        }
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
