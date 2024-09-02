import Contact from "@/components/custom/Contact";
import ComingSoon from "@/components/shared/ComingSoon";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
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
