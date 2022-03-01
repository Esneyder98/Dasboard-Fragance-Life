import React from "react";
import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";

function ProductsList() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    // console.log("%cse montó el componente", "color:green");

    fetch("https://fragance--life.herokuapp.com/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // console.log("%cse actualizó el componente", "color:yellow");
  }, [products]);

  useEffect(() => {
    return () => {
      // console.log("%cse desmontó el componente", "color:red");
    };
  }, []);

  return (
    <React.Fragment>
      <div className="d-flex flex-column">
        <TopBar />
        <h2>Estos son los Productos en la Base de Datos</h2>
        <ul>
          {products.length === 0 && <p>Cargando...</p>}
          {products.map((product, i) => {
            return (
              <li key={i}>
                <Link to={`/ProductsList/${product.id}`}>
                  <h3>{product.name}</h3>
                  <img
                    src={product.images_products[0]}
                    alt="avatar"
                    width="150"
                  />
                  <p>
                    Para {product.gender}
                    <br /> Marca : {product.brand.name}
                    <br />
                    Precio : $ {product.price}{" "}
                  </p>

                  <p>{product.description}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default ProductsList;
