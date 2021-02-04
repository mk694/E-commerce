import React, { useEffect } from "react";
import Product from "../component/product";
import LoadingBox from "../component/loadingBox";
import MessageBox from "../component/messageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

function Homepage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  //we get productlist from store
  const { loading, error, products } = productList;

  //dispatching from productActions
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="fail">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;
