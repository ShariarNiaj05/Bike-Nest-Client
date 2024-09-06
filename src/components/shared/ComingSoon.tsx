import Lottie from "react-lottie";
import comingSoonAnimation from "../../assets/comming-soon.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: comingSoonAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const ComingSoon = () => {
  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default ComingSoon;
