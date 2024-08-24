import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import Container from "../shared/Container";
import Title from "./Title";
import { useParams } from "react-router-dom";
import {
  useSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/api/baseApi";
import Loading from "../shared/Loading";

const UpdateProduct = () => {
  const { id } = useParams();

  const [productName, setProductName] = useState<string>("");
  const [sportsCategory, setSportsCategory] = useState<string>("");
  const [stockQuantity, setStockQuantity] = useState<number>(0);
  const [brand, setBrand] = useState<string>("");
  const [rating, setRating] = useState<number>(5.0);
  const [productDescription, setProductDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(100);
  const [image, setImage] = useState<string>("");

  const {
    data: singleProductData,
    isFetching,
    isLoading,
  } = useSingleProductQuery(id);

  const [updateProduct] = useUpdateProductMutation();

  useEffect(() => {
    if (singleProductData?.data) {
      const {
        productName: defaultProductName,
        sportsCategory: defaultSportsCategory,
        stockQuantity: defaultStockQuantity,
        brand: defaultBrand,
        rating: defaultRating,
        productDescription: defaultProductDescription,
        price: defaultPrice,
        image: defaultImage,
      } = singleProductData.data;

      setProductName(defaultProductName);
      setSportsCategory(defaultSportsCategory);
      setStockQuantity(defaultStockQuantity);
      setBrand(defaultBrand);
      setRating(defaultRating);
      setProductDescription(defaultProductDescription);
      setPrice(defaultPrice);
      setImage(defaultImage);
    }
  }, [singleProductData]);

  if (isFetching || isLoading) {
    return <Loading />;
  }

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      productName,
      sportsCategory,
      stockQuantity,
      brand,
      rating,
      productDescription,
      price,
      image,
    };
    const parameter = {
      id,
      payload,
    };

    //   update logic
    const result = await updateProduct(parameter);
    if (result?.error) {
      toast.error("Failed to add product");
    } else {
      toast.success(result?.data?.message);
    }
  };

  return (
    <Container>
      <div className="my-28">
        <Title>Update Product</Title>
        <form className="mt-28" onSubmit={handleForm}>
          <Card>
            <CardContent className="space-y-2">
              {/* product name and sports category  */}
              <div className="flex gap-2 w-full mt-2">
                <div className="w-1/2">
                  <Label htmlFor="productName">Product Name</Label>
                  <Input
                    id="productName"
                    type="text"
                    // defaultValue={productName}
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <Label htmlFor="sportsCategory">Sports Category</Label>
                  <Input
                    id="sportsCategory"
                    type="text"
                    value={sportsCategory}
                    // defaultValue={sportsCategory}
                    onChange={(e) => setSportsCategory(e.target.value)}
                  />
                </div>
              </div>

              {/* stock quantity and brand  */}
              <div className="flex gap-2 w-full mt-2">
                <div className="w-1/2">
                  <Label htmlFor="stockQuantity">Stock Quantity</Label>
                  <Input
                    id="stockQuantity"
                    type="number"
                    value={stockQuantity}
                    // defaultValue={stockQuantity}
                    onChange={(e) =>
                      setStockQuantity(parseFloat(e.target.value))
                    }
                  />
                </div>
                <div className="w-1/2">
                  <Label htmlFor="brand">brand</Label>
                  <Input
                    id="brand"
                    type="text"
                    value={brand}
                    // defaultValue={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
              </div>

              {/* rating and product description  */}
              <div className="flex gap-2 w-full mt-2">
                <div className="w-1/2">
                  <Label htmlFor="rating">Rating</Label>
                  <Input
                    id="rating"
                    type="number"
                    step="any"
                    value={rating}
                    // defaultValue={rating}
                    onChange={(e) => setRating(parseFloat(e.target.value))}
                  />
                </div>
                <div className="w-1/2">
                  <Label htmlFor="productDescription">
                    Product Description
                  </Label>
                  <Input
                    id="productDescription"
                    type="text"
                    value={productDescription}
                    // defaultValue={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                </div>
              </div>

              {/* price and image url  */}
              <div className="flex gap-2 w-full mt-2">
                <div className="w-1/2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={price}
                    // defaultValue={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                  />
                </div>
                <div className="w-1/2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    type="text"
                    value={image}
                    // defaultValue={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant={"outline"}>Update Product</Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </Container>
  );
};

export default UpdateProduct;
