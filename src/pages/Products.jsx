import React from "react";
import { Filter, ThumbsUp, ChevronsUpDown } from "lucide-react";
import { RiFireLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

export const Products = () => {
  const [productData, setproductData] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://dummyjson.com/products");
    let data = await a.json();
    setproductData(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const params = useParams();

  const handleFilter = (e) => {
    {e.target.value === "true" && "false"}  
    console.log("click")
  };
  return (
    <>
      <div className="products-pg__container">
        <div className="flex items-center space-between my-3">
          <div className="flex items-center gap-2">
            <NavLink
              to=""
              className={(e) => {
                return e.isActive ? "color-change" : "";
              }}
            >
              <div className="flex">
                <div className="text-xs">Best Match</div>
                <div>
                  <ThumbsUp height={11} />
                </div>
              </div>
            </NavLink>
            <NavLink
              to=""
              className={(e) => {
                return e.isActive ? "color-change" : "";
              }}
            >
              <div className="flex gap">
                <div className="text-xs">Sale</div>
                <div className="text-xs">
                  <RiFireLine />
                </div>
              </div>
            </NavLink>
            <NavLink
              to=""
              className={(e) => {
                return e.isActive ? "color-change" : "";
              }}
            >
              <div className="flex">
                <div className="text-xs">Price</div>
                <div>
                  <ChevronsUpDown height={12} />
                </div>
              </div>
            </NavLink>
          </div>
          <div className="flex" value="false" onClick={handleFilter}>
            <Filter height={18} />
            <div className="text-sm">Filter</div>
          </div>
        </div>
        <div className="product-pg__main">
          {productData.length > 0 ? (
            productData.map((item) => (
              <NavLink to="/items" key={item.id}>
                <div
                  id={item.id}
                  className="product-pg__wrapper flex flex-column gap p-2"
                >
                  <div className="product-pg__img">
                    <div
                      style={{ backgroundImage: `url(${item.images[0]})` }}
                    ></div>
                  </div>
                  <div className="product-pg__title text-sm font-semibold">
                    {item.title}
                  </div>
                  <div className="product-pg__price text-sm font-semibold">
                    <span className="text-xs">$</span>
                    {item.price}
                    <span className="percentOff-badge text-xxs pl-1">
                      ${item.discountPercentage}
                    </span>
                  </div>
                  <div className="product-pg__rating flex gap-1 items-center">
                    <div className="text-xxs">⭐({item.rating})</div>
                    <div className="flex gap">
                      <div className=" p-1 text-xxs sale-badge">
                        {item.discountPercentage}%
                      </div>
                      <div className="p-1 text-xxs low-stock-badge">
                        {item.availabilityStatus}
                      </div>
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
    </>
  );
};
