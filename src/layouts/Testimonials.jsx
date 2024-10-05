import { MoveLeft, MoveRight } from "lucide-react";
import { testimonials } from "../components/Testimonials/testimonials";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
import { useState } from "react";


const Testimonials = () => {
    const [startIdx, setStartIdx] = useState(0);

    const handleTestimonialChange = (action) => {
        if (action == 'LEFT') {
            setStartIdx(prevState => prevState == 0 ? 0 : prevState - 1);
        } else {
            setStartIdx(prevState => prevState == testimonials.length - 3 ? testimonials.length - 3 : prevState + 1);
        }
    }

    return <div className="flex justify-center mt-12">
        <div className="max-w-5xl w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl text-neutral-600 border-b-4 border-orange-400 mb-8 p-2">Customers Love AI's Autos</h2>
            <div className="flex items-center gap-2">
                <button className="p-2 bg-orange-500 rounded-full text-orange-100" onClick={() => handleTestimonialChange('LEFT')}><MoveLeft size={18} /></button>
                <div className="flex flex-wrap justify-center gap-4">
                    {testimonials.slice(startIdx,startIdx + 3).map(ele => (
                    <TestimonialCard key={ele.id} testimonial={ele}/>
                    ))}
                </div>
                <button className="p-2 bg-orange-500 rounded-full text-orange-100" onClick={() => handleTestimonialChange('RIGHT')}><MoveRight size={18} /></button>
            </div>
        </div>
    </div>
}

export default Testimonials;