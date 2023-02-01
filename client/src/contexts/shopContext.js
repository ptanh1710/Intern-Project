import { createContext, useState, useEffect } from 'react';
import categoriesApi from '../api/categoriesApi';
import productsApi from '../api/productsApi';

const ShopContext = createContext();

function ShopProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    // Fetch Categories
    const fetchCategory = async () => {
        const categoryList = await categoriesApi.getAll();
        setCategories(categoryList.data);
    };

    // Fetch Products
    const fetchProduct = async (params) => {
        const productList = await productsApi.getAll(params);
        setProducts(productList.data);
    };

    const values = { categories, fetchCategory, products, fetchProduct };

    return (
        <ShopContext.Provider value={values}>{children}</ShopContext.Provider>
    );
}

export { ShopContext };
export default ShopProvider;
