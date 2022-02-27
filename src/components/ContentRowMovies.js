import React from "react";
import {useState, useEffect} from "react"



function ContentRowMovies() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("%cse montó el componente", "color:green");

    fetch("https://fragance--life.herokuapp.com/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.meta);
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
      <div className="row">
        <div className="col-md-4 mb-4">
            <div className="card border-left-'primary' shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-'primary' text-uppercase mb-1">hola</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas 'fa-clipboard-list' fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  
}
export default ContentRowMovies;
