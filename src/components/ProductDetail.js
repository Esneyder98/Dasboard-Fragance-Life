import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import { useParams } from "react-router-dom";

function ProductDetail(props) {
  let [products, setProducts] = useState([]);
  let { id } = useParams();
  // console.log(id);
  useEffect(() => {
    // console.log("%cse montó el componente", "color:green");

    fetch(`https://fragance--life.herokuapp.com/api/products/${id}`)
      //fetch(`http://localhost:3000/api/products/${id}`)
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

  //let id = Number(props.id)
  return (
    <div>
      <TopBar />
      <div className="col-lg-6 mb-4">
        {products.name === undefined || products.name === "" ? (
          <p>Cargando...</p>
        ) : (
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                {products.name}
              </h5>
            </div>
            <div className="card-body">
              <p>
                Para {products.gender}
                <br /> Marca : {products.brand.name}
                <br />
                Precio : $ {products.price}{" "}
              </p>
              <p>{products.description}</p>
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: 40 + "rem" }}
                  src={products.images_products[0]}
                  alt=" Star Wars - Mandalorian "
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
