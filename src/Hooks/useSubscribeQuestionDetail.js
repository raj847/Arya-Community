import { getQuestionDetail } from "../Graphql/subscription";
import { useSubscription } from "@apollo/client";

export function useSubscribeQuestionDetail(id) {
  const {
    data: questionData,
    loading: loadingQuestionData,
    error: errorQuestionData,
  } = useSubscription(getQuestionDetail, { variables: { id } });
  return { questionData, loadingQuestionData, errorQuestionData };
}
