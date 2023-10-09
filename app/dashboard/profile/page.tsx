"use client";

import { useEffect, useState } from "react";

export default async function listofDataApi() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      let data = await fetch("https://dummyjson.com/products");
      let res = await data.json();
      setProduct(res.products);
    };

    getApiData();
  }, []);

  return (
    <div>
      {product.map((list: any) => {
        return <p>{list.title}</p>;
      })}
    </div>
  );
}
