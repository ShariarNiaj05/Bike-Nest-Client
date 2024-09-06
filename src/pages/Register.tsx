const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-accent">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden flex">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png?f=webp"
            alt="Sign Up"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center mb-8 text-primary">
            Create An Account
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-md w-full hover:bg-opacity-90 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
