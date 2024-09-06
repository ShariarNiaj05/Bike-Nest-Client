import Contact from "@/components/custom/Contact";
import FeaturedSections from "@/components/custom/FeaturedSections";
import HeroSection from "@/components/custom/HeroSection";
import Testimonials from "@/components/custom/Testimonials";
import ComingSoon from "@/components/shared/ComingSoon";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSections />
      <Testimonials />
      <Contact />
      <ComingSoon />
      <button>Delete</button>
      <button>Add</button>

      <Button variant={"destructive"}>Delete</Button>
      <Button variant={"outline"}>Add</Button>
    </div>
  );
};

export default Home;
