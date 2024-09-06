interface Testimonial {
  id: number;
  name: string;
  review: string;
  image?: string;
}

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center  border border-primary transform transition-transform duration-300 hover:scale-105"
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

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Great bike rental service! The bikes were in top condition and the booking process was seamless.",
    image:
      "https://img.freepik.com/free-photo/young-male-posing-isolated-against-blank-studio-wall_273609-12356.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725408000&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "Had an amazing experience riding through the city. Will definitely rent again!",
    image:
      "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
  },
  {
    id: 3,
    name: "Sam Wilson",
    review:
      "Affordable prices and excellent customer service. Highly recommend!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48kgQNS7jHuRO0_X6Qv5PCh-chkE0_E8uRA&s",
  },
];

export default Testimonials;
