import Container from "../../../Components/Container/Container";
import React, { useState, useRef } from "react";
import TitleInput from "./TitleInput";
import Card from "../../../Components/Card/Card";
import classes from "./CreateBlog.module.css";
import TagInputCard from "./TagInputCard";
import { convertToRaw, EditorState } from "draft-js";
import BlogInputCard from "./BlogInputCard";
import { storage } from "../../../Firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { LinearProgress } from "@mui/material";
import { useCreateBlog } from "../../../Hooks/useCreateBlog";
import draftToHtml from "draftjs-to-html";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import Button from "../../../Components/Button/Button";
import AlertMessage from "../../../Components/Alert/AlertMessage";
import CenteredSpinner from "../../../Components/Loading/CenteredSpinner";

function CreateBlog() {
  const uid = useSelector((state) => state.user.uid);
  const { createblog, errorCreateBlog, loadingCreateBlog } = useCreateBlog(uid);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const imageRef = useRef();
  const [loadingImage, setImageLoading] = useState(false);
  const username = useSelector((state) => state.user.username);
  const history = useHistory();

  const editorChangeHandler = (state) => {
    setEditorState(state);
  };
  const titleChangeHandler = (e) => {
    if (e.target.value.trim().length > 35) return;
    setTitle(e.target.value);
  };

  const addTagHandler = (tag) => {
    setTags((prev) => [...prev, { tag }]);
  };

  const removeTagHandler = (removedTag) => {
    setTags((prev) => prev.filter(({ tag }) => tag !== removedTag));
  };

  const uploadImageHandler = (e) => {
    // setImageLoading(true);
    const files = imageRef.current.files;
    const file = files[0];
    const fileRef = ref(storage, `blog-img/${uuidv4()}`);
    uploadBytes(fileRef, file)
      .then((res) => {})
      .catch((err) => {
        setImageLoading(false);
      })
      .then(() => {
        getDownloadURL(fileRef).then((url) => {
          setUrl(url);
          setImageLoading(false);
        });
      });
    imageRef.current.files = e.target.files;
    e.target.files = files;
  };

  const backHandler = () => {
    history.push("/forum");
  };

  const closeHandler = () => {
    setSubmitted(false);
  };

  const submitHandler = () => {
    setSubmitted(true);
    createblog({
      variables: {
        object: {
          author: username,
          user_id: uid,
          image: url,
          title: title,
          content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
          blog_tags: {
            data: tags,
          },
        },
      },
    });
  };

  return (
    <Container>
      <h2 className={classes.title}>Create your Blog</h2>
      {loadingCreateBlog && <CenteredSpinner />}
      {!loadingCreateBlog && (
        <>
          <TitleInput value={title} onChange={titleChangeHandler} />
          <Card>
            <h3 className={classes.subtitle}>Your blog thumbnail</h3>
            {!loadingImage && (
              <input
                ref={imageRef}
                onChange={uploadImageHandler}
                required
                type="file"
                accept="png, jpg"
              />
            )}
            {loadingImage && <LinearProgress />}
          </Card>
          <TagInputCard
            tags={tags}
            addTag={addTagHandler}
            removeTag={removeTagHandler}
          />
          <BlogInputCard state={editorState} onChange={editorChangeHandler} />
          <div className={classes.btnWrapper}>
            <Button onClick={backHandler} theme="light">
              Cancel
            </Button>
            <Button onClick={submitHandler} theme="dark">
              Create
            </Button>
          </div>
          <AlertMessage
            message="Successfully create blog"
            onClose={closeHandler}
            show={submitted && !errorCreateBlog && !loadingCreateBlog}
            type="success"
          />
          <AlertMessage
            message="Something went wrong"
            onClose={closeHandler}
            show={submitted && errorCreateBlog && !loadingCreateBlog}
            type="error"
          />
        </>
      )}
    </Container>
  );
}

export default CreateBlog;
