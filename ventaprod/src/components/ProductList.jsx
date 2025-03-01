import React from "react";
import { data } from "src/data";
export const ProductList = () => {
    return (
        <div className="container-items">
            {data.map(product => (
                <div className="item" key={product.id}>
                    <figure>
                        <img src={product.urlimg} alt={product.nombre} />
                    </figure>
                    <div className="info-product">
                        <h2 className="titulo-producto-carrito ">{product.nombre}</h2>
                        <p className="price">${product.precio}</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>
            ))}
        </div>
    );
}