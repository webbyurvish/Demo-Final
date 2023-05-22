import React from "react";
import Account from "@/src/User-Profile/Account";
import axios from "axios";
const https = require("https");
import { API_URL } from "@/config";

export default function index({ mentor }) {
    return (
        <div>
            <Account mentor={mentor} />
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const options = {
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
    };

    const { mentorId } = params;

    // Fetch mentors for the category
    const { data: mentor } = await axios.get(
        `${API_URL}/mentors/${mentorId}`,
        options
    );

    return {
        props: {
            mentor
        },
    };
}