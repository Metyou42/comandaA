import { CookieProvider } from "contexts/cookieContext";
import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <CookieProvider>
        <App />

        <ToastContainer />
    </CookieProvider>,
    document.querySelector("#root")
);

serviceWorker.unregister();
