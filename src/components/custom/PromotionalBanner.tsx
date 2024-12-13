const banners = [
  {
    title: "Premium Bikes for Your Journey",
    subtitle: "Experience Luxury Rides",
    description:
      "Access our fleet of high-end motorcycles with up to 45% off for members",
    image: "/placeholder.svg?height=300&width=300",
    backgroundColor: "bg-gradient-to-br from-primary to-secondary",
    icon: PhoneCall,
  },
  {
    title: "Book Instantly",
    subtitle: "Ready When You Are",
    description: "Reserve your ride in seconds with our easy booking system",
    image: "/placeholder.svg?height=300&width=300",
    backgroundColor: "bg-gradient-to-br from-secondary/90 to-primary/90",
    icon: Calendar,
  },
  {
    title: "Flexible Membership Plans",
    subtitle: "Ride More, Save More",
    description:
      "Join our membership program for exclusive benefits and special rates",
    image: "/placeholder.svg?height=300&width=300",
    backgroundColor: "bg-gradient-to-br from-primary/80 to-secondary/80",
    icon: CreditCard,
  },
];
const PromotionalBanner = () => {
  return (
    <section className="py-12 bg-accent">
      <div className="container mx-auto px-4"></div>
    </section>
  );
};

export default PromotionalBanner;
