import React from "react";
import { useState, useEffect } from "react";

function LastMovieInDb() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    // console.log("%cse montó el componente", "color:green");

    fetch("https://fragance--life.herokuapp.com/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data[data.data.length - 1]);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    // console.log("%cse actualizó el componente", "color:yellow");
  }, [products]);
  return (
    <div className="col-lg-6 mb-4">
      {products.name === undefined || products.name === "" ? (
        <p>Cargando...</p>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Last fragance in Data Base
            </h5>
          </div>
          <div className="card-body">
            <h1>{products.name}</h1>
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                id= "last-france"
                src={products.images_products[0]}
                alt=" image "
              />
            </div>
            <p>{products.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LastMovieInDb;
