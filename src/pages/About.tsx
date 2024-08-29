import Contact from "@/components/custom/Contact";
import Title from "@/components/custom/Title";

const About = () => {
  return (
    <div>
      <div className="my-20">
        <Title>About Us</Title>

        <div className="">
          <p className=" max-w-[720px] mx-auto mt-5 text-center p-3 rounded-md">
            Welcome to BikeNest, your trusted partner in sustainable and
            convenient transportation. Founded with a passion for eco-friendly
            mobility, we strive to transform the way people explore and commute
            within cities. At BikeNest, we believe that every journey should be
            an enjoyable experience, whether you're heading to work, embarking
            on a weekend adventure, or simply exploring new corners of your
            city. Our commitment to quality service, community engagement, and
            environmental responsibility sets us apart as a leader in the bike
            rental industry.
          </p>

          {/* who we are and what we do div  */}
          <div className=" flex flex-col lg:flex-row gap-5  max-w-7xl mx-auto">
            {/* who we are div  */}
            <div className=" flex-1 h-52">
              <h2 className=" pl-8 text-start mt-16 text-2xl font-bold">
                Our Mission
              </h2>

              <p className=" mt-5 bg-slate-100  h-64 p-8 rounded-md text-justify">
                At BikeNest, our mission is to make transportation accessible,
                affordable, and sustainable by providing a reliable bike rental
                service. We are committed to promoting eco-friendly mobility
                solutions that cater to diverse needs, whether for daily
                commuting, leisure rides, or exploring new destinations. Our
                goal is to empower individuals and communities by offering a
                convenient and environmentally responsible alternative to
                traditional transportation methods.
              </p>
            </div>

            {/* what we do div  */}
            <div className=" flex-1">
              <div className=" flex-1">
                <h2 className=" pl-8  text-start mt-16 text-2xl font-bold">
                  Our Journey
                </h2>

                <p className="  mt-5 bg-slate-100 md:h-64 p-8 rounded-md text-justify">
                  At Bike Nest, we specialize in providing a comprehensive range
                  of sporting goods for athletes, sports enthusiasts, and casual
                  players alike. Our extensive catalog features high-quality
                  equipment, apparel, and accessories for various sports. We are
                  dedicated to offering a seamless and enjoyable shopping
                  experience, ensuring you have everything you need to excel in
                  your sport and stay active.
                </p>
              </div>
            </div>
          </div>

          {/* our mission and vision div  */}
          <div className="w-full  bg-slate-100 mt-28">
            <div className="flex flex-col lg:flex-row lg:max-w-7xl mx-auto justify-between">
              {/* our mission div  */}
              <div className="w-full lg:w-[50%] lg:max-w-xl lg:py-28 px-3">
                <h2 className="text-2xl font-bold w-40 mb-5 text-black">
                  Our Mission
                </h2>
                <p className="  text-justify">
                  At BikeNest, our mission is to make transportation accessible,
                  affordable, and environmentally friendly for everyone. We are
                  dedicated to providing a seamless and enjoyable biking
                  experience through our extensive fleet of well-maintained
                  bicycles and user-friendly booking system. By promoting
                  cycling as a primary mode of transportation, we aim to reduce
                  carbon emissions, alleviate urban congestion, and contribute
                  to healthier lifestyles. We are committed to continuous
                  innovation and community collaboration to ensure that our
                  services not only meet but exceed the evolving needs of our
                  customers.
                </p>
              </div>
              {/* our Vision div  */}
              <div className="w-full lg:w-[50%] lg:max-w-xl py-28 px-3">
                <h2 className="text-2xl font-bold w-40 mb-5 text-black">
                  Our Vision
                </h2>
                <p className=" text-justify">
                  At BikeNest, our vision is to lead the way in transforming
                  urban transportation by making cycling the preferred mode of
                  travel for everyone. We envision a future where cities are
                  greener, healthier, and more connected, with cycling at the
                  heart of this transformation. By providing innovative and
                  accessible bike rental solutions, we aim to reduce the
                  reliance on fossil fuels, decrease traffic congestion, and
                  promote a culture of sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Contact />

        <div>
          {/* who we are and what we do div  */}
          <div className=" flex flex-col lg:flex-row gap-5  max-w-7xl mx-auto">
            {/* who we are div  */}
            <div className=" flex-1 h-52">
              <h2 className=" pl-8 text-start mt-16 text-2xl font-bold">
                Contribution
              </h2>

              <p className=" mt-5 bg-slate-100  h-64 p-8 rounded-md text-justify">
                At BikeNest, we are dedicated to making a meaningful
                contribution to the environment, our communities, and the
                broader goal of sustainable living. Our commitment extends
                beyond just providing a bike rental service; it's about creating
                a lasting positive impact on the world around us.
              </p>
            </div>

            {/* what we do div  */}
            <div className=" flex-1">
              <div className=" flex-1">
                <h2 className=" pl-8  text-start mt-16 text-2xl font-bold">
                  Location
                </h2>

                <p className="  mt-5 bg-slate-100 md:h-64 p-8 rounded-md text-justify">
                  <p>Office Address: BikeNest Headquarters, </p>
                  <p> 123 Greenway Avenue Eco City, ST 56789</p>
                  <p> Phone: (123) 456-7890</p>
                  <p> Email: support@bikenest.com</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
