import { createContext, useState, useEffect } from 'react';
import categoriesApi from '../api/categoriesApi';
import productsApi from '../api/productsApi';

const ShopContext = createContext();

function ShopProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});

    // Can Clean up Function when data was returned => need an additional upgrade

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

    // Không nên gọi detail id tại đây
    // Fetch Product Detail with ID => Warning: Perfromance memory leak
    const fetchProductDetail = async (id, params) => {
        const productDetail = await productsApi.get(id, params);
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
