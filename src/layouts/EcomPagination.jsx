import { useState } from "react";
import ProductCard from "../components/EcomPagination/ProductCard";
import { products } from "../components/EcomPagination/products";
import clsx from "clsx";
const PAGE_SIZE = 9;

const EcomPagination = () => {
    const [pageIdx, setPageIdx] = useState(0);
    const pages = Array.from({length: Math.ceil(products.length / PAGE_SIZE)}, (_, idx) => idx+1);

    return <div className="flex flex-col justify-center items-center py-60 bg-stone-100 px-4">
        <div className="w-full max-w-2xl">
            <div className="mb-8 pb-2 border-b-2 border-gray-200 flex gap-12 flex-col">
                <h2 className="text-3xl font-medium text-slate-600 text-center">Footpath's big billion days</h2>
                <div className="self-end flex gap-2">
                    {pages.map((page, idx) => <button key={idx} onClick={() => setPageIdx(idx)} className={clsx("w-4 text-sm rounded-sm border", pageIdx == idx ? 'bg-rose-100 border-rose-500': 'bg-gray-300 border-gray-500')}>{page}</button>)}
                </div>
            </div>
            <div>
                {products.slice(9 * (pageIdx), 9 * (pageIdx + 1)).map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
        </div>
    </div>
}


export default EcomPagination;
// /**
//  * items 0 to 9
//  * items 9 to 18
//  * items 18 to 27
//  * /

// 9(n) to 9(n+1)
// 9(n) to 9 (n+1)
// 9(n) to 9(n=1)