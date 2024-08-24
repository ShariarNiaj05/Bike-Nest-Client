import AddProduct from "@/components/custom/AddProduct";
import ProductListTable from "@/components/custom/ProductListTable";
import Title from "@/components/custom/Title";
import Container from "@/components/shared/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Manage = () => {
  return (
    <Container>
      <div className="mt-20">
        <Title>Manage Products</Title>
        <div className="mt-20 flex flex-col gap-10  px-5">
          <Tabs defaultValue="productList" className="w-full">
            <TabsList className="grid w-full grid-cols-2 w-[400px] mx-auto mb-10">
              <TabsTrigger value="productList">Product List</TabsTrigger>
              <TabsTrigger value="addProduct">Add Product</TabsTrigger>
            </TabsList>

            {/* Product List tab  */}
            <TabsContent value="productList">
              <ProductListTable />
            </TabsContent>

            {/* Add Product Tab */}
            <TabsContent value="addProduct">
              <AddProduct />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export default Manage;
