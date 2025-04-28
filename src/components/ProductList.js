// src/components/ProductList.js
import React from "react";
import { useDispatch } from "react-redux";

const products = [
  { id: 1, nombre: "Punta cana", precio: 500.000 },
  { id: 2, nombre: "Buzios", precio: 600.000 },
  { id: 3, nombre: "Cancun", precio: 700.000 },
  {id: 4, nombre: "Miami", precio: 800.000} 
];

const ProductList = () => {
  const dispatch = useDispatch();

  const agregarAlCarrito = (producto) => {
    dispatch({ type: "ADD_TO_CART", payload: producto });
  };

  return (
    <div>
      <h2>Destinos</h2>
      <ul>
        {products.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
