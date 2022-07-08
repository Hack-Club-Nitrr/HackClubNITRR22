import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import styles from "./layout.module.css"
import { getAllArticles } from "../../api";

export const Layout = () => {
  const params = useParams(); 
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  const [blog, setBlog]=useState([])
  const Blog = () => {
    getAllArticles().then(function(value) {
       setBlog(value[parseInt(params.id) - 1])
    })  

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
