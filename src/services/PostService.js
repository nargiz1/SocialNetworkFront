import Axios from "../helpers/setupAxios";

export async function getAllPostsService() {
  try {
    return await (
      await Axios.get(`/api/Post/getAllPosts`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        params: {            
            "skip": 0,
            "take": 6,
        }
      })
      ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}
