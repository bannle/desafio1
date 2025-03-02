
import React from "react";
import { data } from "src/data";
export const ProductList = ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) => {
    const onAddProduct = product => {
        const productWithQuantity = { ...product, cantidad: 1 }; // Agregamos cantidad por defecto
    
        const existingProduct = allProducts.find(item => item.id === product.id);
    
        if (existingProduct) {
            if (existingProduct.cantidad >= product.cantidad) {
                alert("No hay más productos disponibles");
                return;
            }
            const updatedProducts = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            );
            setTotal(total + product.precio);
            setCountProducts(countProducts + 1);
            return setAllProducts(updatedProducts);
        }
    
        if (product.cantidad <= 0) {
            alert("Producto agotado");
            return;
        }
    
        setTotal(total + product.precio);
        setCountProducts(countProducts + 1);
        setAllProducts([...allProducts, productWithQuantity]);
    };
    
    
      
    return ( 
        <div className='container-items'> 
        
            {data.map(product => ( 
                <div className='item' key={product.id}> 
                    <figure> 
                        <img src={product.urlimg} alt={product.nombre} /> 
                    </figure> 
                    <div className='info-product'> 
                        <h2>{product.nombre}</h2> 
                        <p className='price'>${product.precio}</p> 
                        <button onClick={() => onAddProduct(product)}> 
                            Añadir al carrito 
                        </button> 
                    </div> 
                </div> 
            ))} 
        </div> 
    ); 
}; 