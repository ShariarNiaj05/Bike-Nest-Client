import { useProductQuery, useSingleProductQuery } from "@/redux/api/baseApi";

export const useAllProducts = () => {
  const { data, isFetching, isLoading } = useProductQuery(
    {},
    {
      pollingInterval: 30000,
    }
  );

  return {
    data,
    isFetching,
    isLoading,
  };
};

export const useSingleProductsData = (id: string) => {
  const { data, isLoading, isFetching } = useSingleProductQuery(id);

  return { data, isLoading, isFetching };
};
