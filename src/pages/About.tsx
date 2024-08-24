import Contact from "@/components/custom/Contact";
import Title from "@/components/custom/Title";

const About = () => {
  return (
    <div>
      <div className="my-20">
        <Title>About Us</Title>

        <div className="">
          <p className=" max-w-[720px] mx-auto mt-5 text-center p-3 rounded-md">
            Discover a wide range of high-quality sporting goods for every
            athlete and sports enthusiast. Enjoy a seamless shopping experience
            with our intuitive platform and comprehensive selection. Elevate
            your game with Sports Sphere!
          </p>

          {/* who we are and what we do div  */}
          <div className=" flex flex-col lg:flex-row gap-5  max-w-7xl mx-auto">
            {/* who we are div  */}
            <div className=" flex-1 h-52">
              <h2 className=" pl-8 text-start mt-16 text-2xl font-bold">
                Who We Are
              </h2>
              <h3 className=" pl-8  text-start text-base font-medium">
                Elevate Your Game
              </h3>
              <p className=" mt-5 bg-slate-100  h-64 p-8 rounded-md text-justify">
                At Sports Sphere, we're passionate about sports and committed to
                helping athletes and enthusiasts reach their full potential. Our
                platform offers a diverse selection of high-quality equipment,
                apparel, and accessories for all types of sports. We aim to
                provide a seamless and enjoyable shopping experience, supporting
                you in every step of your athletic journey. Join us and elevate
                your game with the best in sporting goods.
              </p>
            </div>

            {/* what we do div  */}
            <div className=" flex-1">
              <div className=" flex-1">
                <h2 className=" pl-8  text-start mt-16 text-2xl font-bold">
                  What We Do
                </h2>
                <h3 className=" pl-8  text-start text-base font-medium">
                  Your Ultimate Sporting Goods Destination
                </h3>
                <p className="  mt-5 bg-slate-100 md:h-64 p-8 rounded-md text-justify">
                  At Sports Sphere, we specialize in providing a comprehensive
                  range of sporting goods for athletes, sports enthusiasts, and
                  casual players alike. Our extensive catalog features
                  high-quality equipment, apparel, and accessories for various
                  sports. We are dedicated to offering a seamless and enjoyable
                  shopping experience, ensuring you have everything you need to
                  excel in your sport and stay active.
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
                  Our mission at Sports Sphere is to empower athletes and sports
                  enthusiasts by providing them with top-quality sporting goods
                  and an exceptional shopping experience. We strive to be the
                  go-to destination for all your sporting needs, supporting your
                  journey towards fitness, performance, and an active lifestyle.
                  With a commitment to excellence and customer satisfaction, we
                  aim to help you elevate your game and achieve your goals.
                </p>
              </div>
              {/* our Vision div  */}
              <div className="w-full lg:w-[50%] lg:max-w-xl py-28 px-3">
                <h2 className="text-2xl font-bold w-40 mb-5 text-black">
                  Our Vision
                </h2>
                <p className=" text-justify">
                  Our vision at Sports Sphere is to become the leading
                  e-commerce platform for sporting goods, recognized for our
                  diverse selection, exceptional quality, and outstanding
                  customer experience. We aspire to inspire and support athletes
                  and sports enthusiasts worldwide by continually enhancing our
                  offerings and services. Our goal is to foster a community
                  where everyone can access the best equipment and resources to
                  pursue their passion for sports and an active lifestyle.
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
                Teams and Contribution
              </h2>

              <p className=" mt-5 bg-slate-100  h-64 p-8 rounded-md text-justify">
                At Sports Sphere, we are passionate about sports and committed
                to supporting athletes and enthusiasts in reaching their full
                potential. Our dedicated team works tirelessly to curate a
                diverse selection of high-quality equipment, apparel, and
                accessories for all types of sports. We aim to provide a
                seamless and enjoyable shopping experience, ensuring you have
                the best gear to elevate your performance. By joining us, you
                become part of a community that values excellence, innovation,
                and the spirit of sportsmanship. Together, let's elevate your
                game with the best in sporting goods.
              </p>
            </div>

            {/* what we do div  */}
            <div className=" flex-1">
              <div className=" flex-1">
                <h2 className=" pl-8  text-start mt-16 text-2xl font-bold">
                  Location
                </h2>

                <p className="  mt-5 bg-slate-100 md:h-64 p-8 rounded-md text-justify">
                  Welcome to Sports Sphere, your premier destination for
                  sporting goods in the heart of Metro City. Located at the
                  bustling Sports Plaza, our store offers a wide array of
                  high-quality equipment, apparel, and accessories for athletes,
                  sports enthusiasts, and casual players alike. Whether you're
                  gearing up for competitive matches or enjoying recreational
                  activities, Sports Sphere is your go-to spot for everything
                  sports-related. Explore our store today and experience a
                  seamless shopping journey that caters to your passion for
                  sports and active lifestyle.
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
