"use client";
import { useEffect, useState } from "react";
import { Factura } from "@/components/Factura";
import { Headers } from "@/components/Headers";

export default function Page() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
    const totalGuardado = JSON.parse(localStorage.getItem("total")) || 0;

    setAllProducts(productosGuardados);
    setTotal(totalGuardado);
  }, []);

  return (
    <div className="container py-5">
          <Headers
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
    <div>
      <Factura allProducts={allProducts} total={total} />
    </div>
    </div>
  );
}
