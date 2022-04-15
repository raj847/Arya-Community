import { useQuery } from "@apollo/client";
import React from "react";
import { useSelector } from "react-redux";
import Container from "../../Components/Container/Container";
import { GetUserBlogs } from "../../Graphql/query";
import BlogsContainer from "../Blog/MainBlog/BlogsContainer";

function BlogList() {
  const uid = useSelector((state) => state.user.uid);
  const { data, loading, error } = useQuery(GetUserBlogs, {
    variables: {
      user_id: uid,
    },
  });
  return (
    <Container>
      <h2>Your Blogs</h2>
      <BlogsContainer del={true} data={data} loading={loading} error={error} />
    </Container>
  );
}

export default BlogList;
