import React from "react";
import Header from "../Header/Header";

const Cards = (props) => {
  const { picture, time, name, about } = props.exercise;
  return (
    <div>
        <div className="col">
          <div className="card h-100">
            <img src={picture} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <small className="card-text">
                {about.slice(0, 100)}...
              </small>
              <h6>For age: 15-20</h6>
              <h6>Time required: {time}s</h6>
            </div>
            <button className="btn btn-primary">Add to list</button>
          </div>
        </div>
      
    </div>
  );
};

export default Cards;
