import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyEditor } from "./components/editor/MyEditor";
import { Team } from "./components/team/Team";
import {Project} from "./components/project/Project"
import {Layout} from "./components/blog/Layout"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="texteditor" element={<MyEditor />} />
        <Route path="team" element={<Team />} />
        <Route path="projects" element={<Project/>} />
        <Route path="blogs/:id" element={<Layout/>} />

      </Routes>{" "}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
