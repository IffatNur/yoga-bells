import React from "react";
import './Cards.css';

const Cards = (props) => {
  const { picture, time, name, about} = props.exercise;
  const { getExerciseTime } = props;
  return (
    <div>
        <div className="col">
          <div className="card h-100 border border-3 shadow-lg">
            <img src={picture} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <small className="card-text">
                {about.slice(0, 100)}...
              </small>
              <h6>For age: 15-20</h6>
              <h6>Time required: {time}s</h6>
            </div>
            <button onClick={() => getExerciseTime(time)} className="btn btn-primary">Add to list</button>
          </div>
        </div>
      
    </div>
  );
};

export default Cards;
