import React from "react";
import ReactDOM from "react-dom/client";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./components/Main";
import "./styles/index.css";

/**
 * React entry point
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Sidebar />
		<Main />
	</React.StrictMode>
);
