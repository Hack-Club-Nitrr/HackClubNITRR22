import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import axios from "axios";
import styles from "./editor.module.css"

export const MyEditor = () => {
  const [resState,setResState] = useState('');
  const handleBlog = () => {
    const data={
      title: "sample title",
      author:"aditya ray",
      body:convertedContent,
      slug: 'sample_slug'
    }
    const url="https://peaceful-river-16673.herokuapp.com/providers/add_project/"
    axios.post(url, data).then((response)=>{
      console.log(response)
      setResState(response.data.body)
    })
  }
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    setConvertedContent(markup);
    console.log(convertedContent)
  };
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  function uploadImageCallBack(file) {
    return new Promise((resolve, reject) => {
      const timestamp = Date.now() / 1000;
      var data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "hcnitrr");
      data.append("cloud_name", "dcxwex73e");
      data.append("api_key", "744965478629596");
      data.append("timestamp", timestamp);
      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://api.cloudinary.com/v1_1/dcxwex73e/image/upload",
        true
      );
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText).secure_url;
        resolve({ data: { link: response } });
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });


  }

  return (
    <div className={styles.markup}>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
        
          image: {
            uploadCallback: uploadImageCallBack,
            previewImage: true,
            alt: { present: true, mandatory: false },
          },
        }}
      />

      <button onClick={()=>{handleBlog(false)}}>save progress</button>
      <button onClick={()=>{handleBlog(true)}}>Publish</button>
    </div>
  );
};
