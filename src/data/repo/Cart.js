import { getToken } from "../../services/AuthService";
import { CART } from "../../utils/endpoints";

export const getCart = async (param) => {
    return await fetch(CART + "/" + param, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
};
