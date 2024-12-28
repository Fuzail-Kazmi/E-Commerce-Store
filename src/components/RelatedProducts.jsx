import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const RelatedProducts = () => {
  const [productData, setproductData] = useState([]);
  const fetchData = async () => {
    let a = await fetch("https://dummyjson.com/products");
    let data = await a.json();
    setproductData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="related-products__container my-2">
        <div className="related-product__heading text-lg font-semibold">
          Related Products
        </div>
        <div className="related-product__main">
          {productData.map((item) => {
            return (
              <div
                className="related-product__wrapper p-1"
                id={item.id}
                key={item.id}
              >
                <div className="related-product__img">
                  <div style={{ backgroundImage: `url(${item.images})` }}></div>
                </div>
                <div className="related-product__title text-sm">
                  {item.title}
                </div>
                <div className="related-product__price text-sm">
                  {item.price}
                </div>
                <div className="related-product__rating text-xs">
                  {item.rating}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
