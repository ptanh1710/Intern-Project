import { useContext } from 'react';
import { ShopContext } from '../contexts/shopContext';

export const useShopContext = () => {
    return useContext(ShopContext);
};
