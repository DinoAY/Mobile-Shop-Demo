import { getCart } from "../data/repo/Cart";

export const getCartById = async (id) => {
    const response = await getCart(id);
    const result = await response.json();

    return await new Promise((resolve, reject) => {
        if (response.status === 200) {
            resolve(result);
        }

        reject(result.message);
    });
};
