import { Layout } from "@/src/Layouts/Layout";
import Mentors from "@/src/mentors-components/profiles/Mentors";
import { API_URL } from "@/config";
import axios from "axios";
import https from "https";

export default function Home() {
  // console.log(mentors);
  return (
    <Layout>
      <Mentors />
    </Layout>
  );
}

// export async function getServerSideProps({ params }) {
//   const options = {
//     httpsAgent: new https.Agent({
//       rejectUnauthorized: false,
//     }),
//   };

//   const { data: mentors } = await axios.get(`${API_URL}/api/mentor`, options);

//   return {
//     props: { mentors },
//   };
// }
