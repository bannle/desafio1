import React from "react";
import { data } from "../app/data";
export const ProductList = () => {
    return (
        <div className="container-items">
            {data.map(product => (
                <div className="item" key={product.id}>
                    <figure>
                        <img src={product.urlImage} alt={product.title} />
                    </figure>
                    <div className="info-product">
                        <h2 className="titulo-producto-carrito ">{product.title}</h2>
                        <p className="price">${product.price}</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>
            ))}
        </div>
    );
} 