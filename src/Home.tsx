import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const url = "https://backendapi.turing.com/products";
  axios
    .get(url)
    .then((res) => {
      setProducts(res.data.rows);
    })
    .catch((err) => console.log(err));
  return (
    <div className="bg-light row">
      {products.map((product) => (
        <div
          className="card text-center shadow"
          style={{ width: "18rem", margin: "10px" }}
        >
          <Link to={`/products/${product.product_id}`}>
            <img
              src={`https://backendapi.turing.com/images/products/${product.thumbnail}`}
              className="card-img-top"
              alt="..."
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <div className="center">
              <a href="#" className="btn my-primary rounded-pill">
                Buy now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
