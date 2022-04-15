import React from "react";
import Container from "../../../Components/Container/Container";
// import { Container } from "@mui/material";
import BlogsContainer from "./BlogsContainer";
import classes from "./MainBlog.module.css";
import Button from "../../../Components/Button/Button";
import { useHistory } from "react-router";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useQuery } from "@apollo/client";
import { GetBlogs } from "../../../Graphql/query";

function MainBlog() {
  const history = useHistory();
  const { data, error, loading } = useQuery(GetBlogs);
  const clickHandler = () => {
    history.push("/blog/create-blog");
  };
  return (
    <Container>
      <div className={classes.flex}>
        <div className={classes.left}>
          <h2>Blogs</h2>
          <p>Read to add more insight, write to help others.</p>
        </div>
        <div className={classes.right}>
          <Button className={classes.btn} theme="light" onClick={clickHandler}>
            <LibraryBooksIcon />
            Create Blog
          </Button>
        </div>
      </div>
      <BlogsContainer data={data} error={error} loading={loading} />
    </Container>
  );
}

export default MainBlog;
