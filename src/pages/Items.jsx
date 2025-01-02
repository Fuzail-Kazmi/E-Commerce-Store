import React from "react";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { RiQuestionnaireLine } from "react-icons/ri";
import { MdQuestionAnswer } from "react-icons/md";

export const Items = () => {
  const slides = [
    {
      id: 1,
      url: "https://mobirise.com/extensions/commercem4/assets/images/1.jpg",
    },
    {
      id: 2,
      url: "https://mobirise.com/extensions/commercem4/assets/images/3.jpg",
    },
    {
      id: 3,
      url: "https://mobirise.com/extensions/commercem4/assets/images/2.jpg",
    },

    {
      id: 4,
      url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGUlMjBjb21tZXJjZSUyMGNhcm91c2VsfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      url: "https://plus.unsplash.com/premium_photo-1677995700883-30df169c7517?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGUlMjBjb21tZXJjZSUyMGNhcm91c2VsfGVufDB8MHwwfHx8MA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsData, setItemsData] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://dummyjson.com/products/1");
    let data = await a.json();
    setItemsData([data]);
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
                    <div className="items-color__sec my-3">
                      <div>
                        <span className="text-sm color-gray">
                          Product Option:
                        </span>
                        <span className="text-xs pl-1">{item.option}</span>
                      </div>
                      <div className="items-color__container">
                        <div className="items-color">
                          <div
                            className="items-colorBoxes"
                            style={{
                              backgroundImage: `url(${item.images})`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="specification-info flex items-center space-between mb-2">
                      <div className="specification-left flex items-center gap-1">
                        <div className="text-sm color-gray">
                          Specifications:
                        </div>
                        <div className="product-info text-xs">
                          {item.brand},{item.category}
                        </div>
                      </div>
                      <NavLink
                        to="/specification"
                        className="specification-right color-gray"
                      >
                        <ChevronRight size={15} />
                      </NavLink>
                    </div>
                    <div className="item-services my-4">
                      <div className="items-pg__delivery flex space-between items-start">
                        <div className="text-sm color-gray">Delivery</div>
                        <div className="text-xs flex flex-column gap">
                          <div className="text-xs">
                            Address Not Define Enter your address
                          </div>
                          <div>Arrive In: {item.shippingInformation}</div>
                        </div>
                        <NavLink to="/address" className="color-gray">
                          <ChevronRight size={15} />
                        </NavLink>
                      </div>
                      <hr className="hr-preset1 my-4" />
                      <div className="items-pg__services flex space-between items-start">
                        <div className="text-sm color-gray">Services</div>
                        <div className="text-xs flex flex-column gap">
                          <li>{item.returnPolicy}</li>
                          <li className="text-xs">
                            {item.warrantyInformation}
                          </li>
                        </div>
                        <NavLink to="/services" className="color-gray">
                          <ChevronRight size={15} />
                        </NavLink>
                      </div>
                    </div>
                    <div className="item-review flex flex-column gap-2 my-3">
                      <div className="flex space-between items-center text-sm">
                        <div className="color-gray">
                          Ratings and Reviews (
                          {item.reviews ? item.reviews.length : 0})
                        </div>
                        <NavLink className="color-pink">View All</NavLink>
                      </div>
                      <div className="review-sec">
                        {item.reviews && item.reviews.length > 0 ? (
                          item.reviews.map((review, index) => (
                            <div key={index} className="review-container">
                              <div className="review-box">
                                <div className="flex items-center space-between">
                                  <div className="flex gap flex-column color-gray text-sm">
                                    <div>{review.reviewerName}</div>
                                    <div className="text-xs">{review.date}</div>
                                  </div>
                                  <div className="flex items-center text-xs">
                                    ⭐({review.rating})
                                  </div>
                                </div>
                                <div className="text-sm py-3">
                                  {review.comment}
                                </div>
                                <div className="review-img__box">
                                  <div
                                    className="review-img"
                                    style={{
                                      backgroundImage: `url(${item.images})`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="no-review__show">No reviews yet</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="items-faq__sec my-3">
                    <div className="flex space-between items-center text-sm">
                      <div className="color-gray">
                        Questions about this product (
                        {item.question ? item.reviews.length : 0})
                      </div>
                      <NavLink className="color-pink">View All</NavLink>
                    </div>
                    <div className="faq-box">
                      <div className="question-box flex flex-column gap-1 mt-3 py-5">
                        <div className="flex items-center gap-2 color-gray-500">
                          <div className="text-md">
                            <RiQuestionnaireLine />
                          </div>
                          <div className="text-sm">Hello</div>
                        </div>
                        <div className="flex items-center gap-2 color-gray-500">
                          <div className="text-md">
                            <MdQuestionAnswer />
                          </div>
                          <div className="text-sm">Hi</div>
                        </div>
                      </div>
                      <hr className="hr-preset2" />
                      <NavLink className="justify-content-center color-pink font-semibold py-5">Ask Questions</NavLink>
                    </div>
                  </div>
                  <div className="items-description my-5">
                    <div className="color-gray text-sm my-2">Description</div>
                    <hr className="hr-preset1"/>
                    <div className="text-sm my-3 mb-15">{item.description}</div>
                  </div>
                  <div className="items-pg__btns">
                    <button>Add to Cart</button>
                    <button>Buy Now</button>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
