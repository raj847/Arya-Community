import { gql } from "@apollo/client";

export const insertAnswerWithQuestionId = gql`
  mutation MyMutation($object: answer_insert_input!) {
    insert_answer_one(object: $object) {
      id
    }
  }
`;

export const InsertNewQuestion = gql`
  mutation MyMutation($object: question_insert_input!) {
    insert_question_one(object: $object) {
      id
    }
  }
`;

export const InsertNewQuestionComment = gql`
  mutation MyMutation($object: question_comments_insert_input!) {
    insert_question_comments_one(object: $object) {
      id
    }
  }
`;

export const InsertNewAnswerComment = gql`
  mutation MyMutation($object: answer_comments_insert_input!) {
    insert_answer_comments_one(object: $object) {
      id
    }
  }
`;

export const InsertNewUser = gql`
  mutation MyMutation($object: user_insert_input!) {
    insert_user_one(object: $object) {
      uid
    }
  }
`;

export const DeleteQuestion = gql`
  mutation MyMutation($id: Int!) {
    delete_tag(where: { question_id: { _eq: $id } }) {
      affected_rows
    }
    delete_question_comments(where: { question_id: { _eq: $id } }) {
      affected_rows
    }
    delete_answer_comments(where: { question_id: { _eq: $id } }) {
      affected_rows
    }
    delete_answer(where: { question_id: { _eq: $id } }) {
      affected_rows
    }
    delete_question_by_pk(id: $id) {
      id
    }
  }
`;

export const UpdateQuestion = gql`
  mutation MyMutation(
    $id: Int!
    $objects: [tag_insert_input!]!
    $code: String!
    $question: String!
    $title: String!
  ) {
    update_question_by_pk(
      pk_columns: { id: $id }
      _set: { title: $title, question: $question, code: $code }
    ) {
      id
    }
    delete_tag(where: { question_id: { _eq: $id } }) {
      affected_rows
    }
    insert_tag(objects: $objects) {
      affected_rows
    }
  }
`;

export const CreateBlog = gql`
  mutation MyMutation($object: blogs_insert_input = {}) {
    insert_blogs_one(object: $object) {
      id
    }
  }
`;

export const SubmitBlogComment = gql`
  mutation MyMutation($object: blog_comments_insert_input = {}) {
    insert_blog_comments_one(object: $object) {
      id
    }
  }
`;

export const DeleteUserBlog = gql`
  mutation MyMutation($id: Int!) {
    delete_blog_comments(where: { blog_id: { _eq: $id } }) {
      affected_rows
    }
    delete_blog_tag(where: { blog_id: { _eq: $id } }) {
      affected_rows
    }
    delete_blogs(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
