import { Button } from "../ui/button";

export interface Category {
  title: string;
  items: number;
  image: string;
  backgroundColor: string;
}

const categories: Category[] = [
  {
    title: "Cake & Milk",
    items: 26,
    image: "/placeholder.svg?height=80&width=80",
    backgroundColor: "bg-[#f3f9f1]",
  },
  {
    title: "Organic Kiwi",
    items: 28,
    image: "/placeholder.svg?height=80&width=80",
    backgroundColor: "bg-[#fff8e5]",
  },
  {
    title: "Peach",
    items: 14,
    image: "/placeholder.svg?height=80&width=80",
    backgroundColor: "bg-[#f3f9f1]",
  },
  {
    title: "Red Apple",
    items: 54,
    image: "/placeholder.svg?height=80&width=80",
    backgroundColor: "bg-[#fff1f0]",
  },
  {
    title: "Snack",
    items: 56,
    image: "/placeholder.svg?height=80&width=80",
    backgroundColor: "bg-[#fff8e5]",
  },
  {
    title: "Vegetables",
    items: 72,
    image: "/placeholder.svg?height=80&width=80",
    backgroundColor: "bg-[#fdf2ff]",
  },
  {
    title: "Strawberry",
    items: 36,
    image: "/placeholder.svg?height=80&width=80",
    backgroundColor: "bg-[#f3f9f1]",
  },
  {
    title: "Black plum",
    items: 123,
    image: "/placeholder.svg?height=80&width=80",
    backgroundColor: "bg-[#fff1f0]",
  },
  {
    title: "Custard apple",
    items: 34,
    image: "/placeholder.svg?height=80&width=80",
    backgroundColor: "bg-[#f3f9f1]",
  },
  {
    title: "Coffee & Tea",
    items: 89,
    image: "/placeholder.svg?height=80&width=80",
    backgroundColor: "bg-[#fff1f0]",
  },
];

const FeaturedCategory = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="py-12 bg-accent">
      {" "}
      <div className="container mx-auto px-4">
        {" "}
        <div className="w-full py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#1B224B]">
                Featured Categories
              </h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scroll("left")}
                  className="rounded-full"
                >
                  {/* <ChevronLeft className="h-4 w-4" /> */}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scroll("right")}
                  className="rounded-full"
                >
                  {/* <ChevronRight className="h-4 w-4" /> */}
                </Button>
              </div>
            </div>
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className={`flex flex-col items-center justify-center p-4 min-w-[180px] ${category.backgroundColor} border-none cursor-pointer transition-transform hover:scale-105`}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-20 h-20 object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold text-[#1B224B] mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.items} Items
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategory;
