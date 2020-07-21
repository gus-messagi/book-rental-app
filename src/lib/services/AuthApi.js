import api from './Api';
import parseJwt from '../helpers/auth';

export const auth = (url, payload) => {
    const apiRequest = api.post(url, payload)
        .then((result) => {
            sessionStorage.setItem('token', result.data.accessToken);
            return result.status;
        })
        .catch((err) => err);

    return apiRequest;
};

export const loadSession = async (token) => {
    if (!token) return null;
    const currentUser = parseJwt(token);
    const userData = await api.get(`/users?id=${currentUser.sub}`);
    return userData.data[0];
};
