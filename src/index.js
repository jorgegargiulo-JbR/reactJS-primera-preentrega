import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "bulma/css/bulma.min.css";
import "./styles.css";


const element =  document.getElementById("root");

const root = ReactDom.createRoot(element);




root.render(<App/>);