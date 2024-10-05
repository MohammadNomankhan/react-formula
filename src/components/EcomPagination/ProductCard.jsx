const ProductCard = ({product}) => {
    return <div className="mt-8 shadow-md flex bg-rose-100/50">
        <div className="w-96">
            <img src={product.thumbnail} className="w-full" />
        </div>
        <div className="p-4 flex flex-col gap-6">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button className="self-end p-2 rounded-md text-white bg-rose-500">add to cart</button>
        </div>
    </div>
}
export default ProductCard;