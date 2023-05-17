import React from "react";
import { Layout } from "@/src/Layouts/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import https from "https";
import { API_URL } from "@/config";

export default function UserPage({ mentor }) {
  console.log(mentor);
  return (
    <Layout>
      <div className="row justify-content-center">
        <a href="/">Back to mentors list</a>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-5 mentor-detail">
          <div className="mentor-card-cover">
            <div className="card-inner">
              <div className="row align-items-center justify-content-between mentor-location">
                <div className="location-cover">
                  <a href="javascript:void(0)">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>IN</p>
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
                  <li>
                    <a href="javascript:void(0)">nodejs</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">reactjs</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">react native</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">redux</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">git</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="go-to-profile">
              <a href="javascript:vid(0)">
                <i className="fa-regular fa-hand-point-right"></i>
                <p>Go To Profile</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const options = {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  };

  const { data: mentor } = await axios.get(
    `${API_URL}/mentors/${params.id}`,
    options
  );

  return {
    props: { mentor },
  };
}
