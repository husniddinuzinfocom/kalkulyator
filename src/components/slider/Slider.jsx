import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/imgs/image.svg";
import checkoutImg from "../../assets/imgs/checkout.png";
import imgPersons from "../../assets/imgs/img1.jpg"
import icon from "../../assets/imgs/icon.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import { Navigation } from "swiper";


export default function App() {
  const content_ref = useRef(null);
  return (
    <div className="for_overflow" ref={content_ref}>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        centeredSlides={true}
        loop={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="box">
            <div className="top">
              <div className="image_wrapper">
                <img src={img} alt="img" />
              </div>
              <p className="count">10</p>
              <p className="count_subtitle">Mbps</p>
              <p className="description">Check availability for starting at price</p>
            </div>
            <div className="bottom">
              <div className="df">
                <div className="bottom_img_content">
                  <img src={imgPersons} alt="img" />
                </div>
                <div className="bottom_description">
                  <div className="bottom_lists">
                    <h4>
                      300 Mbps is good for</h4>
                    <ul>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                    </ul>
                  </div>
                  <div className="checkout">
                    <div className="img_content">
                      <img src={checkoutImg} alt="img" />
                    </div>
                    <div className="description__checkout">
                      <h4>Add an xFi Gateway at checkout</h4>
                      <p>Enjoy a powerful, secure connection.</p>
                    </div>
                    <div className="price">
                      <span>+$14/mo</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <div className="top">
              <div className="image_wrapper">
                <img src={img} alt="img" />
              </div>
              <p className="count">20</p>
              <p className="count_subtitle">Mbps</p>
              <p className="description">Check availability for starting at price</p>
            </div>
            <div className="bottom">
              <div className="df">
                <div className="bottom_img_content">
                  <img src={imgPersons} alt="img" />
                </div>
                <div className="bottom_description">
                  <div className="bottom_lists">
                    <h4>
                      300 Mbps is good for</h4>
                    <ul>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                    </ul>
                  </div>
                  <div className="checkout">
                    <div className="img_content">
                      <img src={checkoutImg} alt="img" />
                    </div>
                    <div className="description__checkout">
                      <h4>Add an xFi Gateway at checkout</h4>
                      <p>Enjoy a powerful, secure connection.</p>
                    </div>
                    <div className="price">
                      <span>+$14/mo</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <div className="top">
              <div className="image_wrapper">
                <img src={img} alt="img" />
              </div>
              <p className="count">30</p>
              <p className="count_subtitle">Mbps</p>
              <p className="description">Check availability for starting at price</p>
            </div>
            <div className="bottom">
              <div className="df">
                <div className="bottom_img_content">
                  <img src={imgPersons} alt="img" />
                </div>
                <div className="bottom_description">
                  <div className="bottom_lists">
                    <h4>
                      300 Mbps is good for</h4>
                    <ul>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                    </ul>
                  </div>
                  <div className="checkout">
                    <div className="img_content">
                      <img src={checkoutImg} alt="img" />
                    </div>
                    <div className="description__checkout">
                      <h4>Add an xFi Gateway at checkout</h4>
                      <p>Enjoy a powerful, secure connection.</p>
                    </div>
                    <div className="price">
                      <span>+$14/mo</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <div className="top">
              <div className="image_wrapper">
                <img src={img} alt="img" />
              </div>
              <p className="count">40</p>
              <p className="count_subtitle">Mbps</p>
              <p className="description">Check availability for starting at price</p>
            </div>
            <div className="bottom">
              <div className="df">
                <div className="bottom_img_content">
                  <img src={imgPersons} alt="img" />
                </div>
                <div className="bottom_description">
                  <div className="bottom_lists">
                    <h4>
                      300 Mbps is good for</h4>
                    <ul>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                    </ul>
                  </div>
                  <div className="checkout">
                    <div className="img_content">
                      <img src={checkoutImg} alt="img" />
                    </div>
                    <div className="description__checkout">
                      <h4>Add an xFi Gateway at checkout</h4>
                      <p>Enjoy a powerful, secure connection.</p>
                    </div>
                    <div className="price">
                      <span>+$14/mo</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <div className="top">
              <div className="image_wrapper">
                <img src={img} alt="img" />
              </div>
              <p className="count">50</p>
              <p className="count_subtitle">Mbps</p>
              <p className="description">Check availability for starting at price</p>
            </div>
            <div className="bottom">
              <div className="df">
                <div className="bottom_img_content">
                  <img src={imgPersons} alt="img" />
                </div>
                <div className="bottom_description">
                  <div className="bottom_lists">
                    <h4>
                      300 Mbps is good for</h4>
                    <ul>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                    </ul>
                  </div>
                  <div className="checkout">
                    <div className="img_content">
                      <img src={checkoutImg} alt="img" />
                    </div>
                    <div className="description__checkout">
                      <h4>Add an xFi Gateway at checkout</h4>
                      <p>Enjoy a powerful, secure connection.</p>
                    </div>
                    <div className="price">
                      <span>+$14/mo</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <div className="top">
              <div className="image_wrapper">
                <img src={img} alt="img" />
              </div>
              <p className="count">60</p>
              <p className="count_subtitle">Mbps</p>
              <p className="description">Check availability for starting at price</p>
            </div>
            <div className="bottom">
              <div className="df">
                <div className="bottom_img_content">
                  <img src={imgPersons} alt="img" />
                </div>
                <div className="bottom_description">
                  <div className="bottom_lists">
                    <h4>
                      300 Mbps is good for</h4>
                    <ul>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                      <li>
                        <img src={icon} alt="" />
                        <p>Up to 8 devices</p>
                      </li>
                    </ul>
                  </div>
                  <div className="checkout">
                    <div className="img_content">
                      <img src={checkoutImg} alt="img" />
                    </div>
                    <div className="description__checkout">
                      <h4>Add an xFi Gateway at checkout</h4>
                      <p>Enjoy a powerful, secure connection.</p>
                    </div>
                    <div className="price">
                      <span>+$14/mo</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
