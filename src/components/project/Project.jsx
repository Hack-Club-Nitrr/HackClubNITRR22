import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getAllArticles } from "../../api";
export const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllArticles().then(function(value) {    setProjects(value);
})    
  }, []);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  return (
    <div>
      {projects.map((project, id) => {
        return (
          <div>
            id: {project.id}
            <br />
            title : {project.title}
            <br />
            author : {project.author}
            <br />
            date :{project.date}
            <br />
            <Link to={"/blogs/" + project.id + "/" + slugify(project.title)}>read</Link>
            <br />
            <hr />
            <br />
          </div>
        );
      })}
    </div>
  );
};
