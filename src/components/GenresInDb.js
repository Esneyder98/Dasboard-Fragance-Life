import React from "react";
import { useState, useEffect } from "react";

function LastMovieInDb() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("%cse montó el componente", "color:green");

    fetch("https://fragance--life.herokuapp.com/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("%cse actualizó el componente", "color:yellow");
  }, [products]);

  useEffect(() => {
    return () => {
      console.log("%cse desmontó el componente", "color:red");
    };
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Marcas de Perfumes
          </h5>
        </div>
        <div className="card-body">
          {products.length === 0 && <p>Cargando...</p>}
          {products.map((product, i) => {
            return (
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{product.brand.name}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;
