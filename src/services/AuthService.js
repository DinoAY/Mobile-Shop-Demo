import { login } from "../data/repo/Auth";
import { API_TOKEN_KEY } from "../utils/helpers";

export const authenticate = async (username, password) => {
    const authData = {
        username: username,
        password: password,
    };

    const response = await login(JSON.stringify(authData));
    const result = await response.json();

    return await new Promise((resolve, reject) => {
        if (response.status === 200) {
            resolve(result);
        }

        reject(result.message);
    });
};

export const getToken = () => {
    return sessionStorage.getItem(API_TOKEN_KEY);
};
