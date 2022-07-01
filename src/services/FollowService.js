import Axios from '../helpers/setupAxios';
export async function getFollowersService(user) {
    try {
      return await (
        await Axios.get(`/api/Follow/getFollowers`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          params:{
            "userId":`${user.id}`
          }
         
        })
        ).data;
    } catch (error) {
      console.log("err: ", error);
    }
  }