import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BlurImageEffect = (imageUrl: string, productName: string) => {
  return (
    <LazyLoadImage
      src={imageUrl}
      // delayTime={300}
      effect={"blur"}
      wrapperProps={{
        style: { transitionDelay: "1s" },
      }}
      className="h-[400px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
      alt={productName}
    />
  );
};

export default BlurImageEffect;
