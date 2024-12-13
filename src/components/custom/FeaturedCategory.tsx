import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export interface Category {
  title: string;
  image: string;
  backgroundColor: string;
}

const categories: Category[] = [
  {
    title: "Mountain Bike",
    image:
      "https://png.pngtree.com/png-clipart/20190904/original/pngtree-three-dimensional-bicycle-bicycle-mountain-bike-png-image_4488350.jpg",
    backgroundColor: "bg-[#f3f9f1]",
  },
  {
    title: "Road Bike",
    image:
      "https://images.vexels.com/media/users/3/235471/isolated/preview/d0921171fc1788ebbc76069583670ecc-competition-bicycle-side-silhouette.png",
    backgroundColor: "bg-[#fff8e5]",
  },
  {
    title: "Black Mountain",
    image:
      "https://www.pngall.com/wp-content/uploads/5/Black-Mountain-Bike-PNG-Free-Download.png",
    backgroundColor: "bg-[#fff1f0]",
  },
  {
    title: "Hybrid Bike",
    image:
      "https://png.pngtree.com/png-clipart/20190904/original/pngtree-three-dimensional-bicycle-bicycle-mountain-bike-png-image_4488350.jpg",
    backgroundColor: "bg-[#fdf2ff]",
  },
  {
    title: "Electric Bike",
    image:
      "https://www.pngall.com/wp-content/uploads/5/Black-Mountain-Bike-PNG-Free-Download.png",
    backgroundColor: "bg-[#f3f9f1]",
  },
  {
    title: "Fat Tire Bike",
    image:
      "https://www.pngall.com/wp-content/uploads/5/Black-Mountain-Bike-PNG-Free-Download.png",
    backgroundColor: "bg-[#fff8e5]",
  },
  {
    title: "Folding Bike",
    image:
      "https://png.pngtree.com/png-clipart/20190904/original/pngtree-three-dimensional-bicycle-bicycle-mountain-bike-png-image_4488350.jpg",
    backgroundColor: "bg-[#fff1f0]",
  },
  {
    title: "BMX Bike",
    image:
      "https://png.pngtree.com/png-clipart/20210411/original/pngtree-bmx-bike-image-png-image_6275903.jpg",
    backgroundColor: "bg-[#fdf2ff]",
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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-bold text-center mb-10 text-primary mb-8">
            Featured Categories
          </h2>
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
              <p className="text-sm text-gray-500">{category.items} Items</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategory;
