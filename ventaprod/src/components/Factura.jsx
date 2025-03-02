"use client";
import React from "react";

export const Factura = ({ allProducts, total }) => {
  return (
    <div className="container py-4 border border-dark rounded bg-light mt-4">
      <h2 className="text-center mb-3">Factura</h2>
      {allProducts.map((product) => (
        <div key={product.id} className="d-flex justify-content-between mb-2">
          <span>{product.nombre} x{product.cantidad}</span>
          <span>${product.precio * product.cantidad}</span>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: ${total}</h3>
      </div>
      <button className="btn btn-primary d-block mx-auto mt-3" onClick={() => window.print()}>
        Imprimir Factura 🖨️
      </button>
    </div>
  );
};
