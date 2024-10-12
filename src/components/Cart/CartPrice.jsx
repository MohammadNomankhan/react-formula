import clsx from "clsx";

const CartPrice = ({ cart }) => {
    return <div className="bg-yellow-50 p-6 rounded-lg shadow-lg border border-yellow-200">
        <h3 className='font-medium text-2xl mb-4'>Price Details</h3>
        <div className='flex flex-col gap-2'>
            <p className='flex justify-between items-center'><span>Price ({cart.totalQuantity} items)</span><span>${cart.total.toLocaleString()}</span></p>
            <p className='flex justify-between items-center text-green-500'><span>Discount</span><span>-${(cart.total - cart.discountedTotal).toFixed(2)}</span></p>
            <p className='flex justify-between items-center'><span>Delivery Charges</span><span className='text-green-500'><span className={clsx('mr-1', cart.discountedTotal > 1000 ? 'line-through' : '')}>${49}</span>{cart.discountedTotal > 1000 && 'FREE Delivery'}</span></p>
            <p className='flex justify-between items-center py-1 my-1 border-dashed border-t-2 border-b-2 border-gray-300'><span>Total Amount</span><span>${cart.discountedTotal > 1000 ? cart.discountedTotal.toFixed(2).toLocaleString() : (cart.discountedTotal + 49).toFixed(2).toLocaleString()}</span></p>
            <p className='font-medium text-green-500'>You will save ${cart.discountedTotal > 5000 ? (cart.total - cart.discountedTotal + 49).toFixed(2) : (cart.total - cart.discountedTotal).toFixed(2)} on this order</p>
        </div>
    </div>
}

export default CartPrice;