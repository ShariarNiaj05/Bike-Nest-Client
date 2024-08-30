import ceo from "/shariar.png";
import cto from "/cto.jpg";
import ho from "/ho.jpg";
const OurTeam = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
      {/* Our Team Title */}

      <h2 className="text-3xl font-extrabold text-primary">Our Team</h2>
      {/* Description */}
      <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
        Meet the amazing team behind BikeNest. Our dedicated professionals are
        committed to providing you with the best bike rental experience.
      </p>

      {/* Team Members Section */}
      <div className="mt-10 flex flex-col lg:flex-row gap-8 justify-center items-center">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center">
          <img className="w-32 h-32 rounded-full" src={cto} alt="Emely" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">John Smith</h3>
          <p className="text-secondary">Chief Technology Officer</p>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center bg-blue-50 p-8 rounded-lg shadow-lg">
          <img
            className="size-32 object-cover rounded-full border-4 border-secondary"
            src={ceo}
            alt="Shariar"
          />
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            Shariar Islam
          </h3>
          <p className="text-secondary">Founder & CEO</p>
          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-secondary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center">
          <img className="w-32 h-32 rounded-full" src={ho} alt="Mariana" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Emily Johnson
          </h3>
          <p className="text-secondary">Head of Operations</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
