const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover the best reasons to rent a bike with us. We prioritize
          quality, flexibility, and customer satisfaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Single Benefit Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/64178/price-tag.svg"
                alt="Best Prices"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">
                Best Prices
              </h3>
              <p className="text-gray-600">
                Affordable prices with no hidden fees, ensuring you get the best
                deal every time.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/70289/bike.svg"
                alt="Wide Selection"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">
                Wide Selection
              </h3>
              <p className="text-gray-600">
                A variety of bikes to choose from, tailored to meet different
                preferences and needs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/42509/support.svg"
                alt="Customer Service"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">
                24/7 Customer Support
              </h3>
              <p className="text-gray-600">
                Our dedicated team is here to help anytime you need assistance,
                ensuring a smooth rental experience.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/127575/location-sign.svg"
                alt="Convenient Locations"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">
                Convenient Locations
              </h3>
              <p className="text-gray-600">
                Multiple pickup and drop-off locations, making it easy to rent
                and return your bike wherever you are.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn4.iconfinder.com/data/icons/flexible-working-hours/500/yul1346_10_flexible_working-512.png"
                alt="Flexible Rental Periods"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">
                Flexible Rental Periods
              </h3>
              <p className="text-gray-600">
                Rent for as little or as long as you like, with flexible options
                that fit your schedule.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/440779/notification-maintenance.svg"
                alt="Well-Maintained Bikes"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">
                Well-Maintained Bikes
              </h3>
              <p className="text-gray-600">
                Our bikes are regularly serviced and maintained to ensure your
                safety and comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
