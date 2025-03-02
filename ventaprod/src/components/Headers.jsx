"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Headers = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
}) => {
    const router = useRouter();
    const [active, setActive] = useState(false);
    const onDeleteProduct = (product) => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar ${product.nombre}?`)) {
            const results = allProducts.filter((item) => item.id !== product.id);
            setAllProducts(results);
            setTotal(total - product.precio * product.cantidad);
            setCountProducts(countProducts - product.cantidad);
        }
    };

    const onCleanCart = () => {
        const confirmDelete = window.confirm("¿Estás seguro de que quieres vaciar el carrito?");
        if (confirmDelete) {
            setAllProducts([]);
            setTotal(0);
            setCountProducts(0);
        }
    };

    const handlePurchase = () => {
        if (allProducts.length === 0) {
            alert("El carrito está vacío");
            return;
        }
        localStorage.setItem("productos", JSON.stringify(allProducts));
        localStorage.setItem("total", JSON.stringify(total));
        router.push("/factura");
    };

    return (
        <header>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossOrigin="anonymous"
            ></link>
            <h1>Tienda de Software</h1>

            <div className="container-icon">
                <div className="container-cart-icon" onClick={() => setActive(!active)}>
                    <img
                        src="https://w7.pngwing.com/pngs/275/763/png-transparent-cart-shopping-supermarket-shopping-cart-ecommerce-e-commerce-shopping-trolley-caddy.png"
                        alt="carrito"
                        className="icon-cart"
                    />
                    <div className="count-products">
                        <span id="contador-productos">{countProducts}</span>
                    </div>
                </div>

                <div className={`container-cart-products ${active ? "" : "hidden-cart"}`}>
                    {allProducts.length ? (
                        <>
                            <div className="row-product">
                                {allProducts.map((product) => (
                                    <div className="cart-product" key={product.id}>
                                        <div className="info-cart-product">
                                            <img src={product.urlimg} alt={product.nombre} className="img-product me-2" width="50" height="50" />
                                            <p className="titulo-producto-carrito">{product.nombre}</p>
                                            <span className="cantidad-producto-carrito">x{product.cantidad}</span>
                                            <span className="precio-producto-carrito">${product.precio}</span>
                                        </div>
                                        <img
                                            src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                                            alt="cerrar"
                                            className="icon-close"
                                            onClick={() => onDeleteProduct(product)}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="cart-total">
                                <h3>Total:</h3>
                                <span className="total-pagar">${total}</span>
                            </div>

                            <div className="text-center mt-3">
                                <button className="btn-clear-all" onClick={handlePurchase}>
                                    Pagar
                                </button>
                                <button className='btn-clear-all' onClick={onCleanCart}>
                                    Vaciar Carrito
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className="cart-empty">El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
};
