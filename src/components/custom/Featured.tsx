import Container from "../shared/Container";
import Title from "./Title";

import { IProduct } from "@/types/products";

import ProductCard from "../shared/ProductCard";
import Loading from "../shared/Loading";
import { useAllProducts } from "@/utils/products";

const Featured = () => {
  const { data, isFetching, isLoading } = useAllProducts();
  const products = data?.data;
  if (isFetching || isLoading) {
    <Loading />;
  }

  return (
    <Container>
      <div className="my-28">
        <Title>Featured</Title>

        {/* card section  */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.slice(0, 6)?.map((product: IProduct) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Featured;
