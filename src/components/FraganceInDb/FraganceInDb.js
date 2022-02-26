import React from "react";
import { useState, useEffect } from "react";
import './GenresinDb.css'
function LastMovieInDb() {
  let [products, setProducts] = useState([]);
  let [brands,setBrands] = useState([]);
  useEffect(() => {
    console.log("%cse montó el componente", "color:green");

    fetch("https://fragance--life.herokuapp.com/api/products/")
      .then((response) => response.json())
      .then((data) => {
        let brand=[Object.keys(data.meta.countBrands),Object.values(data.meta.countBrands)]
        setProducts(data.data);
        setBrands(brand)
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

  let count=0
  return (
    <div className="col-lg-6 mb-4 container">
      <div className="card shadow mb-4 subcontainer">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Marcas de Perfumes
          </h5>
        </div>
        <div className="card-body brands-container">
          {brands.length >0 ?
          brands[0].map((element,i) => {
            count+=1
            return (
              <div key={i} className="row brand">
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{element}:{brands[1][count-1]}</div>
                  </div>
                </div>
              </div>
            );
          }):<p>Cargando...</p>}
        </div>
      </div>
    </div>
  );
}

export default LastMovieInDb;
