import React, { useState } from "react";
import classes from "./BlogsContainer.module.css";
import LoadingBlogCard from "../../../Components/Loading/LoadingBlogCard";
import BlogCard from "./BlogCard";
// import { Button } from "@mui/material";
import Button from "../../../Components/Button/Button";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useDeleteUserBlog } from "../../../Hooks/useDeleteUserBlog";
import AlertMessage from "../../../Components/Alert/AlertMessage";
import CenteredSpinner from "../../../Components/Loading/CenteredSpinner";

function BlogsContainer({ data, error, loading, del }) {
  const history = useHistory();
  const uid = useSelector((state) => state.user.uid);
  const { deleteBlog, errorDeleteBlog, loadingDeleteBlog } =
    useDeleteUserBlog(uid);
  const [deleted, setDeleted] = useState(false);

  const clickHandler = () => {
    history.push("/blog/create-blog");
  };

  const deleteHandler = (id) => {
    setDeleted(true);
    deleteBlog({
      variables: {
        id: id,
      },
    });
  };

  const closeHandler = () => {
    setDeleted(false);
  };

  if (error) alert(error.message);
  if (!loading && data.blogs.length === 0)
    return (
      <div>
        <p className={classes.noBlogMessage}>
          You have not created any blog yet.
        </p>
        <Button
          theme="light"
          color="success"
          onClick={clickHandler}
          variant="outlined"
          className={classes.btn}
        >
          Create your first Blog
        </Button>
      </div>
    );
  return (
    <>
      {!loadingDeleteBlog && (
        <div className={classes.grid}>
          {loading && [1, 2, 3, 4].map((e) => <LoadingBlogCard key={e} />)}
          {!loading &&
            data.blogs.map((blog) => {
              return (
                <BlogCard
                  id={blog.id}
                  key={blog.id}
                  author={blog.author}
                  image={blog.image}
                  tags={blog.blog_tags}
                  title={blog.title}
                  deleteAble={del}
                  onDelete={deleteHandler}
                />
              );
            })}
        </div>
      )}
      {loadingDeleteBlog && <CenteredSpinner />}
      <AlertMessage
        show={deleted && !errorDeleteBlog && !loadingDeleteBlog}
        message="Successfully deleted blog."
        type="success"
        onClose={closeHandler}
      />
      <AlertMessage
        show={deleted && errorDeleteBlog && !loadingDeleteBlog}
        message="Something went wrong."
        type="error"
        onClose={closeHandler}
      />
    </>
  );
}

export default BlogsContainer;
