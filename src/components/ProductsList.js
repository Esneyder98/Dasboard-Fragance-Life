import {useState, useEffect} from "react"
import TopBar from "./TopBar";

function ProductsList () {
    let [products, setProducts] = useState([]);
   
    useEffect(()=>{
    console.log("%cse montó el componente", "color:green");

    fetch("https://fragance--life.herokuapp.com/api/products/")
      .then((response) => 
      response.json())
      .then((data) => {
        setProducts(data.data)
      })
      .catch((error) => console.log(error));
    },[])

    useEffect(()=>{
        console.log("%cse actualizó el componente", "color:yellow");
    },[products])

    useEffect(()=>{
        return()=>{
            console.log("%cse desmontó el componente", "color:red");
        }
    },[])


    return (
        <div className="d-flex flex-column">
            <TopBar />
           <h2 >Estos son los Productos en la Base de Datos</h2>
          <ul>
            {products.length === 0 && <p>Cargando...</p>}
            {products.map((product, i) => {
              return (
                <li key={i}>
                  <h3>{product.name}</h3>
                  <p>Para  {product.gender}<br/> Marca :  {product.brand.name}<br/>
                   Precio : $ {product.price}  </p>
                  
                  <p>{product.description}</p>
                  <img src={product.image} alt="avatar" width="150" />
                </li>
              );
            })}
           
          </ul> 
        </div>
      );
}

export default ProductsList;