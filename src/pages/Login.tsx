const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://nordvpn.com/wp-content/uploads/blog-social-nordvpn-login-and-sign-up-process-explained-1200x628-2.png"
          alt="Sign In"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-4xl font-bold text-center mb-8 text-primary">
            Sign In
          </h2>
          <form className="space-y-6">
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
                // value={formData.email}
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
                // value={formData.password}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-md w-full hover:bg-opacity-90 transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
