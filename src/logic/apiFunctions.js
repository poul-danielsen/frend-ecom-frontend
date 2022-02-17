import { apiUri } from "./apiVariables";

const categoryUri = `${apiUri}/category`
const productUri = `${apiUri}/product`

const fetchAndParse = async (basePath, id) => {
    let uri = basePath;
    if (id) {
        uri = `${basePath}/${id}`
    }

    const res = await fetch(uri);

    if (res.ok) {
        const resParsed = await res.json();
        return resParsed;
    }

    throw new Error(`Error status: ${res.status}`)
}

const fetchCategories = async (id) => {
    try {
        const categories = await fetchAndParse(categoryUri, id);
        return categories;
    } catch (err) {
        throw new Error(`Could not retrieve categories. ${err.message}`)
    }
}

const fetchProductById = async (id) => {
    if(!id || !Number.isInteger(+id)) {
        throw new Error("Invalid product id.")
    }

    try {
        const product = await fetchAndParse(productUri, id);
        return product;
    } catch (err) {
        throw new Error(`Could not retrieve product. ${err.message}`)
    }
}

const filterByCategory = (product, categoryId) => {
    let present = false;
    for (let i = 0; i < product.categoryId.length; i++) {
        if (product.categoryId[i] === +categoryId) {
            present = true;
        }
    }
    return present;
}

const fetchProducts = async (categoryId) => {
    try {
        let products = await fetchAndParse(productUri);

        if(categoryId && Number.isInteger(+categoryId)){
            products = products.filter(product => filterByCategory(product, categoryId));
        }

        return products;

    } catch (err) {
        throw new Error(`Could not retrieve products. ${err.message}`);
    }
}

export {
    fetchCategories,
    fetchProductById,
    fetchProducts,
}