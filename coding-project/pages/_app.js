import "bootstrap/dist/css/bootstrap.css";
import "@/styles/card.css";
import "@/styles/style.css";
import "@/styles/account.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-free/css/all.css";
import { Auth0Provider } from "@auth0/auth0-react";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const auth0Config = {
    domain: "dev-11vt3ebp5itl4cqx.us.auth0.com",
    clientId: "yUzUN52P5jsRtD0INGjOPSHnWHNRG6uX",
    authorizationParams: {},
  };

  if (typeof window !== "undefined") {
    auth0Config.authorizationParams.redirect_uri = "http://localhost:3000";
  }

  return (
    <Auth0Provider {...auth0Config}>
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
