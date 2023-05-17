import { Layout } from "@/src/Layouts/Layout";
import Mentors from "@/src/mentors-components/profiles/Mentors";
import { API_URL } from "@/config";
import axios from "axios";
import https from "https";

export default function Home({ mentors }) {
  console.log(mentors);
  return (
    <div>
      <Mentors mentors={mentors} />
    </div>
  );
}

export async function getServerSideProps() {
  const options = {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  };

  const { data: mentors } = await axios.get(`${API_URL}/mentors/all`, options);

  return {
    props: { mentors },
  };
}
