import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import styles from "./layout.module.css"
export const Layout = () => {
  const params = useParams(); 
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  const Blog = () => {
    const blog = JSON.parse(localStorage.getItem("projects"))[
      parseInt(params.id) - 1
    ];

    return (
      <div className={styles.markup}>
        
        <div dangerouslySetInnerHTML={createMarkup(blog.body)}></div>
      </div>
    );
  };

  return (
    <div>
      <Blog />
    </div>
  );
};
