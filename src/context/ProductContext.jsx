import { createContext, useState } from "react";
import products from "../Data/products";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [data, setData] = useState(products);
  return (
    <ProductContext.Provider value={[data, setData]}>
      {props.children}
    </ProductContext.Provider>
  );
};
