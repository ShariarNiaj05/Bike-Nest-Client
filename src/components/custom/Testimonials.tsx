interface Testimonial {
  id: number;
  name: string;
  review: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Great bike rental service! The bikes were in top condition and the booking process was seamless.",
    image: "/images/john.jpg", // Optional profile image
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "Had an amazing experience riding through the city. Will definitely rent again!",
    image: "/images/jane.jpg",
  },
  {
    id: 3,
    name: "Sam Wilson",
    review:
      "Affordable prices and excellent customer service. Highly recommend!",
    image: "/images/sam.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 object-cover rounded-full mb-4"
                />
              )}
              <p className="italic text-gray-700 mb-4">
                &quot;{testimonial.review}&quot;
              </p>
              <p className="font-semibold text-gray-900">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
