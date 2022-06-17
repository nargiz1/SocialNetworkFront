import Axios from '../helpers/setupAxios';

export default async function LoginService(payload) {
    try {
        const response = await (await Axios.post(`/api/User/login`, payload, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                'accept':'application/json'
            }
        })).data;
        sessionStorage.setItem('token', JSON.stringify(response.token));
        sessionStorage.setItem('isLoggIn', true);
    } catch (error) {
        console.log('err: ', error);
    }
};
