import { createContext, useState, useEffect } from 'react';
import categoriesApi from '../api/categoriesApi';
import productsApi from '../api/productsApi';

const ShopContext = createContext();

function ShopProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});

    // Can Clean up Function when data was returned => need additional upgrade

    // Fetch Categories
    const fetchCategory = async () => {
        const categoryList = await categoriesApi.getAll();
        setCategories(categoryList.data);
    };

    // Fetch Products
    const fetchProducts = async (params) => {
        const productList = await productsApi.getAll(params);
        setProducts(productList.data);
    };

    // Fetch Product Detail with ID
    const fetchProductDetail = async (id) => {
        const productDetail = await productsApi.get(id);
        setProduct(productDetail.data);
    };

    const values = {
        categories,
        fetchCategory,
        products,
        fetchProducts,
        product,
        fetchProductDetail,
    };

    return (
        <ShopContext.Provider value={values}>{children}</ShopContext.Provider>
    );
}

export { ShopContext };
export default ShopProvider;
