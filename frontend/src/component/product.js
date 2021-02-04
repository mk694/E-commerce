import React from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";

function Product(props) {
  const { product } = props;
  return (
    <ul>
      <li key={product._id}>
        <div className="card">
          <Link to={"/products/" + product._id}>
            <img className="medium" src={product.image} alt="product" />
          </Link>
          <div className="card-body">
            <Link to={"/products/" + product._id}>
              <div>{product.name}</div>
            </Link>
            <div className="product-brand">{product.brand}</div>
            <Rating
              rating={product.rating}
              reviews={product.numReviews}
            ></Rating>

            <div className="price">Rs.{product.price}</div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Product;
