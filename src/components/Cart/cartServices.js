export const fetchCart = async () => {
    const response = await fetch('https://dummyjson.com/carts/5');
    if (!response.ok) {
        const errorMsg = await response.json();
        throw new Error(errorMsg);
    } else {
        const data = await response.json();
        return data;
    }
}


export const removeCartItem = async (updatedCart) => {
    const response = await fetch('https://dummyjson.com/carts/5', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            products: updatedCart
        }),
    });
    if (!response.ok) {
        const errorMsg = await response.json();
        throw new Error(errorMsg);
    } else {
        const data = await response.json();
        return data;
    }
}

export const editCartItem = async (updatedCartItem) => {
        const response = await fetch('https://dummyjson.com/carts/5', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                merge: true,
                products: [updatedCartItem]
            })
        });
        if (!response.ok) {
            const errorMsg = await response.json();
            throw new Error(errorMsg);
        } else {
            const data = await response.json();
            return data;
        }
}
