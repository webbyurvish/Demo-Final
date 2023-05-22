import { API_URL } from "@/config";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Mentor from "../Mentor";
import { Layout } from "@/src/Layouts/Layout";

export default function Mentors({ mentors }) {
  console.log(mentors);

  return (
    <Layout>
      {mentors.length < 1 && <h3>There is no mentors to show</h3>}
      {mentors.length > 0 && <div className="row">
        {mentors.map((mentor) => (
          <Mentor mentor={mentor} />
        ))}
      </div>}
    </Layout>
  );
}
