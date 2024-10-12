import { useEffect, useState } from 'react';
import * as cartServices from './cartServices';

const useCart = () => {
    const [cart, setCart] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCartFetch = async () => {
        try {
            setIsLoading(true);
            setError(null);
            setCart(null);
            const fetchedCart = await cartServices.fetchCart();
            setCart(fetchedCart);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        handleCartFetch();
    }, []);

    const handleItemRemove = async (productId) => {
        const updatedCart = [...cart.products].filter(cartItem => cartItem.id != productId);
        try {
            setIsLoading(true);
        const newFetchedCart = await cartServices.removeCartItem(updatedCart);
        setCart(newFetchedCart);
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    const handleEditItem = async (productId, title, quantity) => {
        const itemToEdit = cart.products.find(product => product.id == productId);
        const updatedItem = {...itemToEdit, title, quantity};
        try {
            setIsLoading(true);
            const newFetchedCart = await cartServices.editCartItem(updatedItem);
            setCart(newFetchedCart);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return {cart, isLoading, handleItemRemove, handleEditItem};
}

export default useCart;