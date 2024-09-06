const CouponsAndDiscounts = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary mb-8">
          Coupons & Discounts
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Use the following coupon codes to enjoy discounts on your next rental!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className="bg-white rounded-lg shadow-lg p-6 border-dashed border-4 border-primary hover:shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {coupon.code}
              </h3>
              <p className="text-primary text-lg font-semibold mb-2">
                {coupon.discount} OFF
              </p>
              <p className="text-gray-600 mb-4">{coupon.description}</p>
              <button
                onClick={() => navigator.clipboard.writeText(coupon.code)}
                className="bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Copy Code
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 border border-primary">
          <h4 className="text-3xl font-semibold text-primary mb-6">
            How to Use a Coupon
          </h4>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-primary mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-lg text-gray-800">
                1. Select your bike and proceed to the checkout.
              </p>
            </div>
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-primary mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-lg text-gray-800">
                2. Enter the coupon code in the designated coupon field.
              </p>
            </div>
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-primary mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-lg text-gray-800">
                3. Enjoy your discount and complete your payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const coupons = [
  {
    id: 1,
    code: "SUMMER20",
    discount: "20%",
    description: "Get 20% off on all bikes. Valid until September 30, 2024.",
  },
  {
    id: 2,
    code: "FIRSTRENTAL",
    discount: "15%",
    description: "15% off for first-time renters.",
  },
];

export default CouponsAndDiscounts;
