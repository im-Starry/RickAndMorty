import React from "react";
import Footer2 from "../components/Footer2";
import Navigation from "../components/Navigation";
import AAA from "../assets/AAA.jpg"

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
                    <h2>HTML<span className="badge bg-warning ms-2 me-5"><i className="fab fa-html5"></i></span></h2>
                    <h2>CSS<span className="badge bg-primary ms-2 me-5"><i className="fab fa-css3-alt"></i></span></h2>
                    <h2>JavaScript<span className="badge bg-warning ms-2 me-5"><i className="fab fa-js-square"></i></span></h2>
                    <h2>React<span className="badge bg-info ms-2 me-5"><i className="fab fa-react"></i></span></h2>
                    <h2>Boodstrap<span className="badge bg-primary ms-2 me-5"><i className="fab fa-bootstrap"></i></span></h2>
                </div>
                <h2 >API By :<span className="badge bg-primary ms-2 me-5 mt-4"><a className="text-light" href="https://rickandmortyapi.com/documentation "target ="_blank">Rick Morty API</a></span></h2>
                {/* <a className="fab fa-instagram" href="https://www.instagram.com/im_grifff/"> </a> */}

                <div className="btn btn-outline-dark flex-shrink-0 mt-5 mb-5" to="#">
                    <i className="bi-cart-fill me-1"></i>Made By :
                </div>

    <div className="card mb-5" style={{maxWidth: 640+'px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={AAA} className="img-fluid rounded-start " alt="Foto Grifin"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h4 className="card-title ">Griffin M. Mumu, Jr</h4>
        <h6 className="card-text mb-4">205022010017 | Informatika</h6>
        <p className="card-text">Student From UNIVERSITAS KLABAT, Take majority in Computer Science, Live in Sonder, Minahasa, Sulawasi utara, Indonesia</p>
        <p className="card-text"><small className="text-muted"> "When life gives you lemons don't make lemonade, make pink lemonade. Be unique."</small></p>
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