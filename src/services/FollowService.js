import Axios from "../helpers/setupAxios";
export async function followService(payload) {
  try {
    return await (
      await Axios.post(`/api/Follow/follow`, payload, {
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
export async function deleteFollowerService(payload) {
  try {
    return await (
      await Axios.post(`/api/Follow/deleteFollower`, payload, {
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
export async function unFollowService(payload) {
  try {
    return await (
      await Axios.post(`/api/Follow/unFollow`, payload, {
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
export async function getFollowersService(user) {
  try {
    return await (
      await Axios.get(`/api/Follow/getFollowers`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        params: {
          userId: `${user.id}`,
        },
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}
export async function getSubscribesService(user) {
  try {
    return await (
      await Axios.get(`/api/Follow/getSubscribes`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        params: {
          userId: `${user.id}`,
        },
      })
    ).data;
  } catch (error) {
    console.log("err: ", error);
  }
}

