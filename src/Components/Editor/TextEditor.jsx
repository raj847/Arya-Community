import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase/firebase";

function TextEditor({ editorState, onChange }) {
  const uploadImageCallback = async (file) => {
    const fileref = ref(storage, `question/${file.name}`);
    async function uploadImg() {
      const imgUrl = await uploadBytes(fileref, file).then(() =>
        getDownloadURL(fileref).then((url) => url)
      );
      return imgUrl;
    }

    const url = await uploadImg();

    return new Promise((resolve, reject) => {
      resolve({
        data: {
          link: url,
        },
      });
    });
  };
  return (
    <>
      <Editor
        editorStyle={{
          backgroundColor: "#fff",
          color: "#333533",
          padding: "0 1rem",
          fontWeight: "",
          border: "1px solid #333533",
          minHeight: "150px",
          borderRadius: "5px",
          marginTop: "1rem",
          boxShadow: "2px 2px 3px 0px #00000040 inset",
        }}
        toolbarStyle={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          border: "none",
          padding: "0",
        }}
        wrapperStyle={{
          border: "1px solid #333533",
          borderRadius: "7px",
          padding: "1.2rem",
          backgroundColor: "white",
          boxShadow: "1px 1px 4px 0px #00000040",
        }}
        toolbar={{
          image: { uploadCallback: uploadImageCallback },
        }}
        editorState={editorState}
        onEditorStateChange={onChange}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
      ></Editor>
    </>
  );
}

export default TextEditor;
