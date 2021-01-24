import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

function HomePage() {
  return (
    <div>
      <ul className="products">
        {data.products.map((product) => {
          return (
            <li key={product._id}>
              <div className="product">
                <Link to={"/products/" + product._id}>
                  <img className="medium" src={product.image} alt="product" />
                </Link>
                <Link to={"/products/" + product._id}>
                  <div className="product-name">{product.name}</div>
                </Link>
                <div className="product-brand">{product.brand}</div>
                <div className="product-rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star-half-o"></i>
                  </span>
                  {""} {product.numReviews} reviews
                </div>

                <div className="product-price">Rs.{product.price}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
