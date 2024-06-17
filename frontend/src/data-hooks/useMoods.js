import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useMoods = () => {
  const result = useSWR(
    `/moods`,
    async () =>
      await fetch(`${BASE_URL}/moods`, {
        headers: {
          Accept: "application/json",
        }
      }).then((res) => res.json())
  );

  return result;
};

export const useNewMood = () => {
  const result = useSWRMutation(
    "/moods",
    async (_, { arg }) => {
      return await fetch(`${BASE_URL}/moods`, {
        method: "POST",
        body: JSON.stringify(arg),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      });
    },
    { throwOnError: true }
  );

  return result
};
