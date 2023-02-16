import React from "react";
import locationBar from "./../assets/img/location.svg";

const Card = (props) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center gap-4">
        {/* <div className="card-image"></div> */}
        <img
          className="card-image"
          src={props.imageUrl}
          alt="card"
        />
        <div className="card-data">
          <div className="card--location">
            <img className="locationBar" src={locationBar} alt="location" />
            <span className="city">{props.location}</span>
            <span className="maps ms-2">View on Google Maps</span>
          </div>
          <div className="card-title">{props.title}</div>
          <div className="my-2 card--date">{props.startDate} - {props.endDate}</div>
          <div className="text-muted my-1 card-para">{props.description}</div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Card;
