import { useParams } from "react-router";
import { allCollections } from "../assets/assets";

const useFilter = () => {
  const { id } = useParams();
  const collections = allCollections;
  const [product] = collections.filter((collection) => {
    return collection.id == id;
  });
  const description = product.description;

  // const [description] = collections.filter((collection) => {
  //   return collection.description == product.description;
  // });
  return { product, description };
};

export default useFilter;
