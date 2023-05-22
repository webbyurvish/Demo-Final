import "bootstrap/dist/css/bootstrap.css";
import "@/styles/card.css";
import "@/styles/style.css";
// import "@/styles/editProfile.css"
// import "@/styles/login.css";
import "@/styles/account.css";
import { Provider } from "react-redux";
import { config } from "@fortawesome/fontawesome-svg-core";
import { store, persistor } from "@/src/State-Management/store/store";
import { PersistGate } from "redux-persist/integration/react";
import "@fortawesome/fontawesome-free/css/all.css";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <Provider store={store}><PersistGate loading={true} persistor={persistor}><Component {...pageProps} /></PersistGate></Provider>;
}
