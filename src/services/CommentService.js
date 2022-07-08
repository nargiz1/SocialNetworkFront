import Axios from "../helpers/setupAxios";
export async function CommentPostService(payload) {
  try {
    return await (
      await Axios.post(`/api/Comment/commentPost`, payload, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}
