import { gql } from "@apollo/client";

export const GetAllQuestion = gql`
  query MyQuery {
    question {
      id
      question
      user_id
      title
      username
      timestamp
      tags {
        tag
        id
      }
      answers {
        id
      }
    }
  }
`;

export const getQuestionDetailById = gql`
  query MyQuery($id: Int!) {
    question_by_pk(id: $id) {
      id
      code
      question
      title
      user_id
      username
      tags {
        id
        tag
      }
      answers {
        answer
        id
        user_id
      }
      question_comments {
        comment
        id
        user_id
        author
      }
    }
  }
`;

export const GetQuestionsByTag = gql`
  query MyQuery($tag: String!) {
    question(where: { tags: { tag: { _eq: $tag } } }) {
      username
      user_id
      title
      code
      id
      question
      timestamp
      tags {
        id
        tag
      }
      answers {
        id
      }
    }
  }
`;

export const GetUserPoint = gql`
  query MyQuery($uid: String!) {
    user_by_pk(uid: $uid) {
      point
    }
  }
`;

export const GetUserQuestions = gql`
  query MyQuery($user_id: String!) {
    question(where: { user_id: { _eq: $user_id } }) {
      id
      question
      code
      title
      user_id
      username
      tags {
        id
        tag
        question_id
      }
    }
  }
`;
export const GetBlogs = gql`
  query MyQuery {
    blogs {
      id
      image
      title
      user_id
      author
      blog_tags {
        id
        tag
      }
    }
  }
`;

export const GetBlogDetail = gql`
  query MyQuery($id: Int!) {
    blogs_by_pk(id: $id) {
      author
      content
      id
      image
      title
      user_id
      blog_tags {
        id
        tag
      }
    }
  }
`;

export const GetUserBlogs = gql`
  query MyQuery($user_id: String!) {
    blogs(where: { user_id: { _eq: $user_id } }) {
      author
      id
      image
      title
      user_id
      blog_tags {
        id
        tag
      }
    }
  }
`;
