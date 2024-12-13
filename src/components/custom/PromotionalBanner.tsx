import { Button } from "../ui/button";

const banners = [
  {
    title: "Premium Bikes for Your Journey",
    subtitle: "Experience Luxury Rides",
    description:
      "Access our fleet of high-end motorcycles with up to 45% off for members",
    image:
      "https://cdn.speedsize.com/4190f681-07cb-43aa-92d2-6096b01e7b62/https://cms.ribblecycles.co.uk.cfstack.com/assets/images/page-builder/CC-Bikes/StoneCC_Grey.png",
    backgroundColor: "bg-gradient-to-br from-primary to-secondary",
    // icon: PhoneCall,
  },
  {
    title: "Book Instantly",
    subtitle: "Ready When You Are",
    description: "Reserve your ride in seconds with our easy booking system",
    image:
      "https://cdn.speedsize.com/4190f681-07cb-43aa-92d2-6096b01e7b62/https://cms.ribblecycles.co.uk.cfstack.com/assets/images/page-builder/Categories/Gravel-Signpost-SQ.png",
    backgroundColor: "bg-gradient-to-br from-secondary/90 to-primary/90",
    // icon: Calendar,
  },
  {
    title: "Flexible Membership Plans",
    subtitle: "Ride More, Save More",
    description:
      "Join our membership program for exclusive benefits and special rates",
    image:
      "https://cdn.speedsize.com/4190f681-07cb-43aa-92d2-6096b01e7b62/https://cms.ribblecycles.co.uk.cfstack.com/assets/images/heros/homepage-banner-sram-mobile-2.jpg",
    backgroundColor: "bg-gradient-to-br from-primary/80 to-secondary/80",
    // icon: CreditCard,
  },
];
const PromotionalBanner = () => {
  return (
    <section className="py-12 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`${banner.backgroundColor} rounded-2xl p-6 relative overflow-hidden min-h-[320px] group hover:shadow-xl transition-all duration-300`}
            >
              {/* Decorative Lines */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <div className="absolute top-4 right-4 w-24 h-1 bg-white transform rotate-45" />
                <div className="absolute top-8 right-8 w-24 h-1 bg-white transform rotate-45" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  {/* <banner.icon className="w-8 h-8 text-white mb-4" /> */}
                  <h4 className="text-sm font-medium text-white/80 mb-2">
                    {banner.subtitle}
                  </h4>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {banner.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-6 max-w-[80%]">
                    {banner.description}
                  </p>
                </div>

                {/* <Button className="w-fit bg-white text-primary hover:bg-white/90 transition-colors">
                  Book Now
                </Button> */}
              </div>

              {/* Image */}
              <div className="absolute -right-12 bottom-0 w-48 h-48 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-2">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Discount Badge for first card only */}
              {index === 0 && (
                <div className="absolute top-4 right-4 bg-white rounded-full w-16 h-16 flex items-center justify-center flex-col transform rotate-12">
                  <span className="text-primary text-lg font-bold">45%</span>
                  <span className="text-primary text-xs font-medium">OFF</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
