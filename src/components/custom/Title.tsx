// import { useEffect } from "react";
// import AOS from "aos";
import "aos/dist/aos.css";

const Title = ({ children }: { children: string }) => {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);
  return (
    <div
    // data-aos="fade-up"
    // data-aos-offset="200"
    // data-aos-delay="50"
    // data-aos-duration="1000"
    // data-aos-easing="ease-in-out"
    // data-aos-mirror="true"
    // data-aos-once="false"
    // data-aos-anchor-placement="top-center"
    // className="relative border-b-8 border-primary ps-3 opacity-5"
    >
      <h2 className="text-6xl font-bold text-start text-primary">{children}</h2>
      <p className="absolute top-16 left-64 text-6xl md:text-4xl -z-10 font-semibold opacity-20">
        {" "}
        {children}
      </p>
    </div>
  );
};

export default Title;
