import React from "react";
import { Link } from "react-router-dom";



const CharaDetails = (props) =>
{
    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={props.chara.image} alt={props.chara.name} /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">Character ID: <span className="fw-bold">{props.chara.id}</span> </div>
                        <h1 className="display-5 fw-bolder">{props.chara.name}</h1>
                        <div className="fs-5 mb-5">
                            <div className="text-decoration"> Status : {props.chara.status}</div>
                            <div className="text-decoration">Species : {props.chara.species}</div>
                            <div className="text-decoration">Type : {props.chara.type}</div>
                            <div className="text-decoration">Gender  : {props.chara.gender}</div>
                            
                        </div>
                        <p className="lead">Data By : rickandmortyapi.com</p>
                        <div className="d-flex">
                            <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                                <i className="bi-cart-fill me-1"></i>
                                Back To Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CharaDetails;