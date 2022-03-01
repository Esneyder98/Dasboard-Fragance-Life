import React from "react";
import ChartRow from "./ChartRow";
import { useState, useEffect } from "react";

function Chart() {
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
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="85%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Género</th>
                <th>Descripción</th>
                <th>Disponibles</th>
              </tr>
            </thead>

            <tbody>
              {products.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
