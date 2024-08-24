import Categories from "@/components/custom/Categories";
import Contact from "@/components/custom/Contact";
import Featured from "@/components/custom/Featured";
import HeroSection from "@/components/custom/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Featured />
      <Categories />
      <Contact />
    </div>
  );
};

export default Home;
