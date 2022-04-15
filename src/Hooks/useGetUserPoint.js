import { useLazyQuery } from "@apollo/client";
import { GetUserPoint } from "../Graphql/query";

export function useGetUserPoint() {
  const [
    getUserPoint,
    { data: userData, loading: loadingGetUserPoint, error: errorGetUserPoint },
  ] = useLazyQuery(GetUserPoint);

  return { getUserPoint, userData, loadingGetUserPoint, errorGetUserPoint };
}
