import React from "react";

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

export function FeaturedCategories() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }

const FeaturedCategory = () => {
  return (
    <section className="py-12 bg-accent">
      {" "}
      <div className="container mx-auto px-4"><h2 className="text-4xl font-bold text-center mb-10 text-primary mb-8">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes?.map((bike: TBike) => (
            <BikeCard key={bike._id} bike={bike} />
          ))}
        </div></div>
    </section>
  );
};

export default FeaturedCategory;
