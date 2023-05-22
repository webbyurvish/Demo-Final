import React from "react";

export default function Mentor({ mentor }) {
  console.log(mentor);
  return (
    <div className="col-lg-4">
      <div className="mentor-card-cover">
        <div className="card-inner">
          <div className="row align-items-center justify-content-between mentor-location">
            <div className="location-cover">
              <a href="javascript:void(0)">
                <i className="fa-solid fa-location-dot"></i>
                <p>{mentor.country}</p>
              </a>
            </div>
            <a href="javascript:void(0)">
              <i className="fa-regular fa-heart"></i>
            </a>
          </div>
          <div className="card-img">
            <img
              src="https://api.codingcoach.io/avatars/tns/abcb24517b43bf54000984ef4b2291fd"
              alt=""
            />
          </div>
          <h2>{mentor.name}</h2>
          <span>{mentor.title}</span>
          <p>{mentor.about}</p>
          <div className="technology">
            <ul>
              {mentor.skills.map(skill => {
                return <li>
                  <a href="javascript:void(0)">{skill}</a>
                </li>
              })}
            </ul>
          </div>
        </div>
        <div className="go-to-profile">
          <a href={`/mentor/${mentor.id}`}>
            <i className="fa-regular fa-hand-point-right"></i>
            <p>Go To Profile</p>
          </a>
        </div>
      </div>
    </div >
  );
}
