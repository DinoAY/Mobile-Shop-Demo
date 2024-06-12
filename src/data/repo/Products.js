import { PRODUCTS } from "../../utils/endpoints";

export const getAll = async () => {
    const response = await fetch(PRODUCTS);

    return await response.json();
};

export const getSingleProduct = async (param) => {
    const response = await fetch(PRODUCTS + "/" + param);

    return await response.json();
};
