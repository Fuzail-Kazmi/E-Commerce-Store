import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const RelatedProducts = () => {
  const [productData, setproductData] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://dummyjson.com/products");
    let data = await a.json();
    setproductData(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="related-products__container my-1">
        <div className="related-product__heading text-lg font-semibold py-3">
          Related Products
        </div>
        <div className="related-product__main">
          {productData.length > 0 ? (
            productData.map((item) => (
              <NavLink to="/products" key={item.id}>
                <div
                  id={item.id}
                  className="related-product__wrapper flex flex-column gap p-2"
                >
                  <div className="related-product__img">
                    <div
                      style={{ backgroundImage: `url(${item.images[0]})` }}
                    ></div>
                  </div>
                  <div className="related-product__title text-sm">
                    {item.title}
                  </div>
                  <div className="related-product__price text-sm font-semibold">
                    <span className="text-xs">$</span>
                    {item.price}{" "}
                    <span className="percentOff-badge text-xxs">
                      {item.discountPercentage}
                    </span>{" "}
                  </div>
                  <div className="related-product__rating flex gap items-center">
                    <div className="text-xxs">⭐ ({item.rating})</div>
                    <div className=" p-1 text-xxs sale-badge">
                      {item.discountPercentage}%
                    </div>
                    <div className=" p-1 text-xxs low-stock-badge">
                      {item.availabilityStatus}
                    </div>
                  </div>
                </div>
              </NavLink>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
        <hr className='hr-preset2 mt-5'/>
    </>
  );
};
