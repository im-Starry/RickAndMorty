import React from "react";
import { Link } from "react-router-dom";

const CharaItem = (props) => {
  return (
    <div className="col mb-5 text-light">
      <div className="card h-100 bg-secondary rounded-3">
          <img className="card-img-top" src={props.chara.image} alt={props.chara.name} />
          <div className="card-body p-4">
              <div className="text-center">
                  <h4 className="fw-bolder">{props.chara.name}</h4>
                {props.chara.status} - {props.chara.species}
              </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center "><Link className="btn btn-outline-dark mt-auto" to={`/Details/${props.chara.id}`} ><i className="text-light">Details</i></Link></div>
          </div>
      </div>
  </div>
  );
};

export default CharaItem;
