import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

export const Category = () => {
  const categoryBoxData = [
    {
      id: "1",
      category: "electronics",
      image: "https://mobirise.com/extensions/commercem4/assets/images/1.jpg",
    },
    {
      id: "2",
      category: "beauty",
      image: "https://mobirise.com/extensions/commercem4/assets/images/3.jpg",
    },
    {
      id: "3",
      category: "toys",
      image: "https://mobirise.com/extensions/commercem4/assets/images/2.jpg",
    },

    {
      id: "4",
      category: "clothes",
      image: "https://mobirise.com/extensions/commercem4/assets/images/1.jpg",
    },
    {
      id: "1",
      category: "electronics",
      image: "https://mobirise.com/extensions/commercem4/assets/images/1.jpg",
    },
    {
      id: "2",
      category: "beauty",
      image: "https://mobirise.com/extensions/commercem4/assets/images/3.jpg",
    },
    {
      id: "3",
      category: "toys",
      image: "https://mobirise.com/extensions/commercem4/assets/images/2.jpg",
    },

    {
      id: "4",
      category: "clothes",
      image: "https://mobirise.com/extensions/commercem4/assets/images/1.jpg",
    },
   
  ];

  return (
    <>
      <div className="categories-container">
        <div className="categories-wrapper p-3">
          <div className="categories-head flex space-between ">
            <div className="categories-head__heading text-lg font-semibold">
              Categories
            </div>
            <div>
              <NavLink
                to="/products"
                className="text-sm right-arrow flex items-center cursor-pointer"
              >
                Shop More <FaAngleRight />
              </NavLink>
            </div>
          </div>
          <div className="categories-main__container">
            {categoryBoxData.map((item) => {
              return (
                <NavLink to="/products">
                <div className="categories-main" key={item.id} id={item.id}>
                  <div className="categories-items">
                    <div
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                  </div>
                  <div className="categories-title text-center">
                    {item.category || "No Category"}
                  </div>
                </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
