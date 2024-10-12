import { Check, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';


const CartItemCard = ({ item, removeItem, editItem }) => {

    const discountedValue = item?.discountedTotal?.toFixed(2) || item?.discountedPrice?.toFixed(2);
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [qty, setQty] = useState(item.quantity);

    const handleSave = () => {
        setIsEdit(false);
        editItem(item.id, title, qty);
    }

    const handleRemove = () => removeItem(item.id);
    const handleEdit = () => setIsEdit(true);

    return (
        <div className="bg-white shadow-lg rounded-lg p-2 sm:p-4">
            <div className="flex flex-col sm:flex-row">
                <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover rounded-lg self-center" />
                <div className="flex flex-col flex-grow">
                    {!isEdit ? <h2 className="text-lg font-bold text-gray-800">{item.title}</h2> : <input autoFocus type='text' value={title} onChange={(e) => setTitle(e.target.value)} className='border border-stone-200 p-1 text-blue-600 text-lg rounded-md shadow-inner' />}
                    <div className="flex justify-between items-center mt-2">
                        {!isEdit 
                            ? <span className="text-sm text-gray-600">Quantity: {item.quantity}</span> 
                            : <select value={qty} className="border border-gray-300 p-1 rounded-md" onChange={(e) => setQty(e.target.value)}>
                                {["1", "2", "3", "more"].includes(qty.toString()) ? null : <option value={qty}>{qty}</option>}
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option>more</option>
                              </select>
                        }
                        <span className="text-sm text-red-600 line-through">${item.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-green-600 bg-green-100 rounded-full px-2 py-1">
                            {item.discountPercentage}% off
                        </span>
                        <span className="text-lg font-semibold text-gray-900">${discountedValue}</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 justify-end items-center mt-4">
                {!isEdit 
                    && <>
                        <button className="bg-blue-500 text-white text-sm p-2 w-full sm:w-20 text-center rounded-md hover:brightness-105 transition flex gap-1 justify-center items-center" onClick={handleEdit}>
                            <Pencil size={15}/> Edit
                        </button>
                        <button className="bg-red-500 text-white text-sm p-2 w-full sm:w-20 text-center rounded-md hover:brightness-105 transition flex gap-1 justify-center items-center" onClick={handleRemove}>
                            <Trash2 size={15}/> Delete
                        </button>
                        </>}
                {isEdit && <button className="bg-green-500 text-white text-sm p-2 w-full sm:w-20 text-center rounded-md hover:brightness-105 transition flex gap-1 justify-center items-center" onClick={handleSave}>
                    <Check size={15}/> Save
                </button>}
            </div>
        </div>
    );
};

export default CartItemCard;