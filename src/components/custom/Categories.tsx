import Container from "../shared/Container";
import Title from "./Title";

import { IoMdBaseball } from "react-icons/io";
import { PiSoccerBallFill } from "react-icons/pi";
import { MdOutlineSportsRugby } from "react-icons/md";
import { useProductQuery } from "@/redux/api/baseApi";
import Loading from "../shared/Loading";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const { data, isFetching, isLoading } = useProductQuery({});
  const products = data?.data;
  const navigate = useNavigate();
  if (isFetching || isLoading || !products) {
    <Loading />;
  }
  const handleCategoryClick = (category: string) => {
    navigate(`/category/${category}`);
  };

  return (
    <Container>
      <div className="my-28">
        <Title>Categories</Title>

        {/* category section  */}
        <div className="mt-16 grid grid-cols-3 gap-6 mx-auto text-center justify-items-center items-center ">
          <div onClick={() => handleCategoryClick("Baseball")}>
            <IoMdBaseball className=" text-8xl text-primary cursor-pointer" />
            <span className="text-xl text-secondary">Baseball</span>
          </div>
          <div onClick={() => handleCategoryClick("Soccer")}>
            <PiSoccerBallFill className=" text-8xl text-primary cursor-pointer" />
            <span className="text-xl text-secondary">Soccer</span>
          </div>
          <div onClick={() => handleCategoryClick("Rugby")}>
            <MdOutlineSportsRugby className=" text-8xl text-primary cursor-pointer" />
            <span className="text-xl text-secondary">Rugby</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Categories;
