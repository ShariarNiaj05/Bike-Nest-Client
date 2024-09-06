import Contact from "@/components/custom/Contact";
import CouponsAndDiscounts from "@/components/custom/CouponsAndDiscounts";
import FeaturedSections from "@/components/custom/FeaturedSections";
import HeroSection from "@/components/custom/HeroSection";
import Testimonials from "@/components/custom/Testimonials";
import WhyChooseUs from "@/components/custom/WhyChooseUs";
import ComingSoon from "@/components/shared/ComingSoon";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSections />
      <Testimonials />
      <WhyChooseUs />
      <CouponsAndDiscounts />
      <Contact />

      <ComingSoon />
      {/*    <button>Delete</button>
      <button>Add</button>

      <Button variant={"destructive"}>Delete</Button>
      <Button variant={"outline"}>Add</Button> */}
    </div>
  );
};

export default Home;
