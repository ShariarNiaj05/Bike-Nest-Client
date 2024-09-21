import { TBike } from "@/types";
import BikeCard from "./BikeCard";
import { useBikesQuery } from "@/redux/features/bikes";
import Loading from "../shared/Loading";

const FeaturedSections = () => {
  const { data: bikes, isLoading, isPending } = useBikesQuery(undefined);
  console.log(bikes);

  if (isLoading || isPending) {
    return <Loading />;
  }
  return (
    <section className="py-12 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary mb-8">
          Available Bikes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes?.map((bike: TBike) => (
            <BikeCard key={bike._id} bike={bike} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* const bikes: TBike[] = [
  {
    _id: "1",
    brand: "Trek",
    model: "FX 3 Disc",
    imageUrl:
      "https://media.cnn.com/api/v1/images/stellar/prod/230419133455-velotric-thunder-1-ebike-lead-cnnu.jpg?c=original",
    pricePerHour: 1200,
    isAvailable: true,
    cc: 250,
    year: 2022,
    name: "Trek FX 3 Disc",
    description:
      "A versatile hybrid bike with a lightweight frame, hydraulic disc brakes, and durable tires.",
  },
  {
    _id: "2",
    brand: "Giant",
    model: "Escape 3",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IwvCRddjz_yzsQMYz-A7tlGoBbztpcWLFdIYkh-BEBtrUpHCeDszeAXWvf4DpMU0wE4&usqp=CAU",
    pricePerHour: 800,
    isAvailable: true,
    cc: 200,
    year: 2021,
    name: "Giant Escape 3",
    description:
      "A lightweight and durable bike, perfect for commuting and casual rides.",
  },
  {
    _id: "3",
    brand: "Specialized",
    model: "Sirrus X 4.0",
    imageUrl: "https://ride1up.com/wp-content/uploads/2024/06/3Q5A04482-2.webp",
    pricePerHour: 1500,
    isAvailable: true,
    cc: 300,
    year: 2023,
    name: "Specialized Sirrus X 4.0",
    description:
      "An advanced hybrid bike designed for fitness and adventure rides, offering excellent control.",
  },
]; */

export default FeaturedSections;
