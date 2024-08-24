import Title from "@/components/custom/Title";
import Container from "@/components/shared/Container";
import Loading from "@/components/shared/Loading";
import ProductCard from "@/components/shared/ProductCard";
import { useProductQuery } from "@/redux/api/baseApi";
import { IProduct } from "@/types/products";
import { useParams } from "react-router-dom";

const SportsCategory = () => {
  const { sportsCategory = "" } = useParams<{ sportsCategory: string }>();
  const { data, isFetching, isLoading } = useProductQuery({});
  const products = data?.data;

  if (isFetching || isLoading) {
    return <Loading />;
  }

  if (!sportsCategory) {
    return <p>Category not found</p>;
  }

  const filteredProducts = products?.filter(
    (product: IProduct) =>
      product?.sportsCategory.toLowerCase() ===
      (sportsCategory.toLowerCase() as string)
  );

  return (
    <Container>
      <div className="my-28">
        <Title>{`All ${sportsCategory} Products`}</Title>

        {/* card section  */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts?.map((product: IProduct) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SportsCategory;
