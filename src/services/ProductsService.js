import { getAll, getSingleProduct } from "../data/repo/Products";

export const getAllProducts = async () => {
    const products = [];

    const result = await getAll();

    result.products.forEach((product) => {
        products.push({
            id: product.id,
            brand: product.brand,
            title: product.title,
            price: product.price,
            image: product.thumbnail,
        });
    });

    return products;
};

export const getProductById = async (id) => {
    const result = await getSingleProduct(id);

    return result;
};
