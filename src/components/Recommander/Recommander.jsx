import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { CommerceContext } from '../CommerceProvider';
const Recommander = () => {
  const { products, handleAddToCart } = useContext(CommerceContext);
  if (products === null) return 'chargement';
  return (
    <>
      <div>
        <h1 className="text-3xl text-center mt-20 font-semibold text-[#182A49]">
          RECOMMANDÉ POUR VOUS
        </h1>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="mt-10 cursor-pointer">
          {products.map((product) => (
            <SwiperSlide>
              <dir className="pb-5 rounded-3xl">
                <img
                  src={product.image.url}
                  alt="Product"
                  className="rounded-2xl m-auto h-[400px] "
                />
                <div className="flex justify-evenly m-2">
                  <p className="text-xl  font-semibold text-[#182A49]">
                    {product.name}
                  </p>
                  <div className="flex gap-4">
                    <p className="text-xl font-semibold text-[#182A49]">
                      {product.price.formatted_with_code}
                    </p>
                  </div>
                </div>
                <div>
                  <ul className="flex justify-evenly mt-3 mb-3">
                    <li className="w-[35px] h-[35px] bg-[#C8B790] text-[#182A49] hover:text-white hover:bg-[#182A49] duration-500 rounded-full font-bold flex justify-center items-center">
                      44
                    </li>
                    <li className="w-[35px] h-[35px] bg-[#C8B790] text-[#182A49] hover:text-white hover:bg-[#182A49] duration-500 rounded-full font-bold flex justify-center items-center">
                      46
                    </li>
                    <li className="w-[35px] h-[35px] bg-[#C8B790] text-[#182A49] hover:text-white hover:bg-[#182A49] duration-500 rounded-full font-bold flex justify-center items-center">
                      48
                    </li>
                    <li className="w-[35px] h-[35px] bg-[#C8B790] text-[#182A49] hover:text-white hover:bg-[#182A49] duration-500 rounded-full font-bold flex justify-center items-center">
                      50
                    </li>
                  </ul>
                </div>
                <div className="w-full text-center mt-3 ">
                  <button
                    onClick={() => handleAddToCart(product.id, 1)}
                    className="group px-4 py-3 bg-[#C8B790] rounded-xl text-[#182A49] font-bold w-[90%] text-xl relative shadow-lg 
  hover:bg-[#182A49] hover:text-white hover:shadow-md duration-500">
                    ADD TO CART
                    <ShoppingCartIcon className="h-6 w-6 absolute text-[#182A49] right-6 top-[50%] translate-y-[-50%] group-hover:text-white" />
                  </button>
                </div>
              </dir>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Recommander;
