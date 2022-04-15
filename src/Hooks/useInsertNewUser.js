import { InsertNewUser } from "../Graphql/mutation";
import { useMutation } from "@apollo/client";

export function useInsertNewUser() {
  const [insertUser, { error: errorInsertUser, loading: loadingInsertUser }] =
    useMutation(InsertNewUser);
  return { insertUser, errorInsertUser, loadingInsertUser };
}
