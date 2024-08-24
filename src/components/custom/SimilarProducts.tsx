import { useAllProducts } from "@/utils/products";
import Container from "../shared/Container";
import Title from "./Title";
import { IProduct } from "@/types/products";
import Loading from "../shared/Loading";
import ProductCard from "../shared/ProductCard";

const SimilarProducts = ({ sportsCategory }: { sportsCategory: string }) => {
  const { data, isFetching, isLoading } = useAllProducts();
  const allProducts = data?.data;

  if (isLoading || isFetching) {
    return <Loading />;
  }
  const matchedCategoryProducts = allProducts?.filter(
    (products: IProduct) => products?.sportsCategory === sportsCategory
  );
  return (
    <Container>
      <div className="mt-20 mb-10">
        <Title>{`More From ${sportsCategory}`}</Title>
      </div>

      {/* All Product section  */}
      <div className=" mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matchedCategoryProducts?.slice(0, 6)?.map((product: IProduct) => (
          <ProductCard product={product} />
        ))}
      </div>
    </Container>
  );
};

export default SimilarProducts;
