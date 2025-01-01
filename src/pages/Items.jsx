import React from "react";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LuDot } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export const Items = () => {
  const slides = [
    {
      url: "https://mobirise.com/extensions/commercem4/assets/images/1.jpg",
    },
    {
      url: "https://mobirise.com/extensions/commercem4/assets/images/3.jpg",
    },
    {
      url: "https://mobirise.com/extensions/commercem4/assets/images/2.jpg",
    },

    {
      url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGUlMjBjb21tZXJjZSUyMGNhcm91c2VsfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1677995700883-30df169c7517?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGUlMjBjb21tZXJjZSUyMGNhcm91c2VsfGVufDB8MHwwfHx8MA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsData, setItemsData] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://dummyjson.com/products/1");
    let data = await a.json();
    setItemsData([data]);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? itemsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === itemsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="items-pg__container">
        {/* ss = small screen */}
        <div className="items-pg__ss-wrapper">
          {itemsData.length > 0 &&
            itemsData.map((item) => {
              return (
                <>
                  <div className="items-img__container" key={item.id}>
                    <div
                      style={{
                        backgroundImage: `url(${item.images[currentIndex]})`,
                      }}
                      className="items-pg__img"
                    ></div>
                    <div className="items-pg__slide-indicator">
                      {currentIndex + 1}/{item.images.length}
                    </div>
                    <div className="items-img__left-arrow text-xxl">
                      <ArrowLeft onClick={prevSlide} size={22} />
                    </div>
                    <div className="items-img__right-arrow text-xxl">
                      <ArrowRight onClick={nextSlide} size={22} />
                    </div>
                  </div>
                  <div className="items-discription flex flex-column gap-1">
                    <div className="item-price flex items-center gap">
                      <div className="font-semibold">
                        <span className="text-lg">$</span>
                        <span className="text-xl">{item.price}</span>
                      </div>
                      <div className="percentOff-badge">
                        <span className="text-xs">$</span>
                        <span className="text-sm">20</span>
                      </div>
                      <div className="text-xs sale-badge mb-2">-50%</div>
                    </div>
                    <div className="item-name text-md">{item.title}</div>
                    <div className="item-rating flex gap-1">
                      <div className="text-xs">⭐({item.rating})</div>
                      <div className="flex gap">
                        <div className="p-1 text-xxs low-stock-badge">
                          {item.availabilityStatus}
                        </div>
                      </div>
                    </div>
                    <div class="product-info">
                      <div>Spexc</div>
                      <p>Brand</p>
                      <p>{item.brand}</p>
                      <p>Category</p>
                      <p>{item.category}</p>
                      <p>Warranty Information</p>
                      <p>{item.warrantyInformation}</p>
                      <p>Shipping Information</p>
                      <p>{item.shippingInformation}</p>
                      <p>Return Policy</p>
                      <p>{item.returnPolicy}</p>
                    </div>
                    <div className="item-about"></div>
                    <div className="item-review"></div>
                  </div>
                  <div className="items-faq__sec"></div>
                  <div className="related-products"></div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
