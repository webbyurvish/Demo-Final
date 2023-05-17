import "bootstrap/dist/css/bootstrap.css";
import "@/styles/card.css";
import "@/styles/style.css";
import "@/styles/login.css";
import "@/styles/account.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-free/css/all.css";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
