import { Card, CardContent } from "../ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Container from "../shared/Container";

const HeroSection = () => {
  const sliderData = [
    {
      id: 1,
      image:
        "https://image3.photobiz.com/8929/8_20240325171753_12283431_large.jpg",
      discountInfo:
        "Swing into Savings! Get up to 30% off on all baseball gear!",
    },
    {
      id: 2,
      image:
        "https://as1.ftcdn.net/v2/jpg/04/12/63/50/1000_F_412635030_v9YpDWequHb60DkMtuFK3IsSSnzBhcIT.jpg",
      discountInfo:
        "Score Big with Rugby! Enjoy discounts up to 25% on select items",
    },
    {
      id: 3,
      image:
        "https://cdn11.bigcommerce.com/s-jdhnct1/images/stencil/1280x1280/products/1923/5215/grunge_fx_soccer_48x72_horz_banner__90022.1550000153.jpg?c=2",
      discountInfo:
        "Kick Off with Great Deals! Save up to 20% on soccer equipment and apparel!",
    },
  ];
  return (
    <Container>
      <div className="relative h-[500px] mt-6">
        <Carousel
          className=" overflow-hidden rounded-lg shadow-lg"
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
        >
          <CarouselContent className="flex">
            {sliderData.map((slider) => (
              <CarouselItem key={slider.id} className="min-w-full">
                <Card className="bg-transparent">
                  <CardContent className="flex items-center justify-center h-[500px] p-0">
                    <img
                      src={slider?.image}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      alt=""
                    />
                    <div className=" absolute text-xl text-white bg-primary p-2 rounded-md w-[500px] text-center">
                      {slider?.discountInfo}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
            &#9664;
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
            &#9654;
          </CarouselNext>
        </Carousel>
      </div>
    </Container>
  );
};

export default HeroSection;
