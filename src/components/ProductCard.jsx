import { useNavigate, useParams } from "react-router";

const ProductCard = ({ image, description, price, id }) => {
  const navigate = useNavigate();
  // const { id } = useParams();
  // console.log(id);
  return (
    <div
      onClick={() => {
        navigate({ pathname: `/product-page/${id}` }
          , scrollTo(0,0)
        );
      }}
      className="hover:scale-110 transition duration-[0.5s] "
    >
      <img src={image} alt="" />
      <p className="text-black text-[15px]">{description}</p>
      <label className="font-medium" htmlFor="">
        {price}
      </label>
    </div>
  );
};

export default ProductCard;
