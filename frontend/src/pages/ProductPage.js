import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../component/loadingBox";
import MessageBox from "../component/messageBox";
import Rating from "../component/rating";

function ProductPage(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQTy] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  //
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="fail">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">
            <button type="back-to-result" className="back-to-result">
              Back to result
            </button>
          </Link>

          <div className="details">
            <div className="details-image">
              <img src={product.image} alt="product" />
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>

                <li>
                  <h3>
                    <Rating
                      rating={product.rating}
                      reviews={product.numReviews}
                    ></Rating>
                  </h3>
                </li>

                <li>
                  <h2>
                    <b> Rs.{product.price} </b>
                  </h2>
                </li>
                <li>
                  <p> {product.Description}~ </p>
                </li>
              </ul>
            </div>

            <div className="details-action">
              <ul>
                <li>
                  <div className="row">
                    <div> Price:</div>
                    <div className="price"> {product.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div> Status:</div>
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="success">In stock</span>
                      ) : (
                        <span className="fail">Out of stock</span>
                      )}
                    </div>
                  </div>
                </li>
                {product.countInStock > 0 && (
                  <div>
                    <li>
                      <div className="row">
                        <div>Qty:</div>
                        <div>
                          <select
                            value={qty}
                            onChange={(e) => setQTy(e.target.value)}
                            className="select"
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => {
                                return (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                );
                              }
                            )}
                          </select>
                        </div>
                      </div>
                    </li>

                    <li>
                      <button
                        onClick={addCartHandler}
                        className="button primary"
                      >
                        Add to cart
                      </button>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
