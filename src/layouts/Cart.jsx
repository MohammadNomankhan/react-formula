import CartItemCard from '../components/Cart/CartItemCard';
import CartShimmer from '../components/Cart/CartShimmer';
import CartPrice from '../components/Cart/CartPrice';
import useCart from '../components/Cart/useCart';


// Example usage
const Cart = () => {
    const {cart, isLoading, handleItemRemove, handleEditItem} = useCart();
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-2 sm:px-4 py-12">
            {!cart || isLoading 
                ? <CartShimmer />
                : <div className='w-full max-w-md flex flex-col gap-4'>
                    {cart.products.map(product => <CartItemCard key={product.id} item={product} removeItem={handleItemRemove} editItem={handleEditItem} />)}
                    <CartPrice cart={cart} />
                  </div>
            }
        </div>
    );
};

export default Cart;
