import React from "react";
import Footer2 from "../components/Footer2";
import Navigation from "../components/Navigation";


const About = () =>
{
    return(
        <>
            <div style={{paddingBottom : 70 }}>
                <Navigation />
                <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Rick and Morty</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            Get to know all character from Rick and Morty
          </p>
        </div>
      </div>
    </header>
            <div className="container mt-4">
                
                <h1 className="text-center mb-3 ">About Page</h1>
                <div className="btn btn-outline-dark flex-shrink-0 mt-3 mb-5" to="#">
                    <i className="bi-cart-fill me-1"></i>Made with :
                </div>
            
                <div className ="d-flex flex-row">
                    <h2>HTML<span className="badge bg-warning ms-2 me-5"><i class="fab fa-html5"></i></span></h2>
                    <h2>CSS<span className="badge bg-primary ms-2 me-5"><i class="fab fa-css3-alt"></i></span></h2>
                    <h2>JavaScript<span className="badge bg-warning ms-2 me-5"><i class="fab fa-js-square"></i></span></h2>
                    <h2>React<span className="badge bg-info ms-2 me-5"><i class="fab fa-react"></i></span></h2>
                    <h2>Boodstrap<span className="badge bg-primary ms-2 me-5"><i class="fab fa-bootstrap"></i></span></h2>
                </div>

                <div className="btn btn-outline-dark flex-shrink-0 mt-5 mb-5" to="#">
                    <i className="bi-cart-fill me-1"></i>Made By :
                </div>

    <div className="card mb-3  mb-5 pb-5" style={{maxWidth: 540+'px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="" className="img-fluid rounded-start " alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

            </div>
            <Footer2 />
            </div>
        </>
    );
}

export default About;