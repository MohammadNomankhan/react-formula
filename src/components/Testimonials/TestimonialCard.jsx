const TestimonialCard = ({testimonial}) => {
    return <div className="rounded-lg  overflow-clip border border-gray-300 w-64">
        <div className="py-4 bg-gradient-to-r from-[#FBAB7E] to-[#F7CE68] flex flex-col gap-3 justify-center items-center">
            <img src={`https://robohash.org/${testimonial.name}?bgset=bg1`} className="w-24 rounded-full" />
            <p className="text-xl text-white">{testimonial.name}</p>
        </div>
        <div className="p-4">
            <p className="text-center mb-4">{testimonial.stars} stars</p>
            <p className="text-neutral-600 leading-relaxed">{testimonial.review}.</p>
        </div>
    </div>
}
export default TestimonialCard;