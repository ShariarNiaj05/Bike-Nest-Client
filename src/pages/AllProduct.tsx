import Title from "@/components/custom/Title";
import Container from "@/components/shared/Container";
import Loading from "@/components/shared/Loading";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { IProduct } from "@/types/products";
import { useAllProducts } from "@/utils/products";
import { useEffect, useState } from "react";

const AllProduct = () => {
  const { data, isFetching, isLoading } = useAllProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 1000],
    brand: "",
    rating: 0,
  });
  const [sortOption, setSortOption] = useState("priceAsc");
  const [filterdProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (data) {
      let products = data.data;

      // Search functionality
      if (searchTerm) {
        products = products.filter((product: IProduct) =>
          product.productName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Filter functionality
      if (filters.category) {
        products = products.filter(
          (product: IProduct) => product.sportsCategory === filters.category
        );
      }
      if (filters.brand) {
        products = products.filter(
          (product: IProduct) => product.brand === filters.brand
        );
      }
      if (filters.rating) {
        products = products.filter(
          (product: IProduct) => product.rating >= filters.rating
        );
      }
      products = products.filter(
        (product: IProduct) =>
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1]
      );

      // Sort functionality
      products.sort((a: IProduct, b: IProduct) => {
        if (sortOption === "priceAsc") {
          return a.price - b.price;
        } else if (sortOption === "priceDesc") {
          return b.price - a.price;
        }
        return 0;
      });

      setFilteredProducts(products);
    }
  }, [data, searchTerm, filters, sortOption]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setFilters({
      category: "",
      priceRange: [0, 1000],
      brand: "",
      rating: 0,
    });
    setSortOption("priceAsc");
  };

  if (isFetching || isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <div className="mt-20">
        <Title>All Product</Title>
        <div className=" mt-20 flex flex-col gap-10  px-5">
          {/* filter section  */}

          <div className=" flex flex-col lg:flex-row gap-5 justify-between">
            {/* search  */}
            <Input
              type="text"
              placeholder="Search products..."
              className="lg:w-[25%]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* category  */}
            <Select
              onValueChange={(value) =>
                setFilters({ ...filters, category: value })
              }
            >
              <SelectTrigger
                value={filters.category}
                className="w-full lg:w-[15%]"
              >
                <SelectValue placeholder="Select a sport" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sport</SelectLabel>
                  <SelectItem value="Baseball">Baseball</SelectItem>
                  <SelectItem value="Rugby">Rugby</SelectItem>
                  <SelectItem value="Soccer">Soccer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* brand filter  */}
            <Select
              onValueChange={
                (value) => setFilters({ ...filters, brand: value })
                // setFilters({ ...filters, brand: e.target.value })
              }
            >
              <SelectTrigger
                value={filters.brand}
                className="w-full lg:w-[15%]"
              >
                <SelectValue placeholder="Brands" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>All Brands</SelectLabel>
                  <SelectItem value="Berlin">Berlin</SelectItem>
                  <SelectItem value="Under Armour">Under Armour</SelectItem>
                  <SelectItem value="Wilson">Wilson</SelectItem>
                  <SelectItem value="Puma">Puma</SelectItem>
                  <SelectItem value="Nike">Nike</SelectItem>
                  <SelectItem value="Reebok">Reebok</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* rating filter  */}

            <Select
              onValueChange={
                (value) => setFilters({ ...filters, rating: Number(value) })
                // setFilters({ ...filters, brand: e.target.value })
              }
            >
              <SelectTrigger
                value={filters.rating}
                className="w-full lg:w-[15%]"
              >
                <SelectValue placeholder="Ratings" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>All Ratings</SelectLabel>

                  <SelectItem value="1">1 Star & Up</SelectItem>
                  <SelectItem value="2">2 Star & Up</SelectItem>
                  <SelectItem value="3">3 Star & Up</SelectItem>
                  <SelectItem value="4">4 Star & Up</SelectItem>
                  <SelectItem value="5">5 Star</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* sorting option  */}

            <Select
              onValueChange={
                (value) => setSortOption(value)
                // setFilters({ ...filters, brand: e.target.value })
              }
            >
              <SelectTrigger value={sortOption} className="w-full lg:w-[15%]">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>All Ratings</SelectLabel>

                  <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                  <SelectItem value="priceDesc">Price: High to Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* price range  */}

            <Slider
              defaultValue={[33]}
              max={1000}
              step={1}
              className="w-full lg:w-[15%]"
              onValueChange={(value) =>
                setFilters({ ...filters, priceRange: [0, Number(value)] })
              }
            />

            {/* clear filter  */}
            <Button onClick={handleClearFilters}>Clear Filters</Button>
            {/* <button onClick={handleClearFilters}>Clear Filters</button> */}
          </div>

          {/* All Product section  */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterdProducts?.map((product: IProduct) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllProduct;
