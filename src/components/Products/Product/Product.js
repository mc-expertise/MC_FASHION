import React, { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { commerce } from '../../../libs/commerce';
const Product = ({ product, onAddToCart }) => {
  const [variant, setVariant] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    commerce.products
      .retrieve(product.id)
      .then((res) => {
        setVariant(res);
      })
      .catch((error) => {
        console.log('Error retrieving product', error);
      });
  }, [product.id]);

  if (!variant) {
    return <div>Loading...</div>;
  }

  if (inView) {
    animation.start({
      opacity: 1,
      transition: {
        duration: 1,
      },
    });
  }
  if (!inView) {
    animation.start({
      opacity: 0,
    });
  }
  return (
    <motion.div
      ref={ref}
      animate={animation}
      className="pb-5 bg-gradient-to-b from-[#182A49] to-[#0000] shadow-lg rounded-3xl w-fit m-auto">
      <div className="">
        <img
          src={product.image.url}
          alt="Product"
          className="rounded-2xl m-auto"
        />
        <div className="flex justify-between m-2">
          <p className="text-2xl  font-semibold text-[#182A49]">
            {product.name}
          </p>
          <div className="flex gap-4">
            <p className="text-2xl font-semibold text-[#182A49]">
              {product.price.formatted_with_code}
            </p>
          </div>
        </div>
        <div>
          <ul className="flex justify-evenly mt-3 mb-3">
            {variant.variant_groups[0].options.map((option) => (
              <li
                key={option.id}
                className="w-[35px] h-[35px] bg-[#C8B790] text-[#182A49]
                 hover:text-white hover:bg-[#182A49] duration-500 
                 rounded-full font-bold flex justify-center items-center">
                {option.name}
              </li>
            ))}
          </ul>
        </div>
        {/* <p
          className="text-sm font-semibold ml-2 text-[#182A49]"
          dangerouslySetInnerHTML={{ __html: product.description }}
        /> */}
      </div>
      <div></div>
      <div className="w-full text-center mt-3 ">
        <button
          onClick={() => onAddToCart(product.id, 1)}
          className="group px-4 py-3 bg-[#C8B790] rounded-xl text-[#182A49] font-bold w-[90%] text-xl relative shadow-lg 
  hover:bg-[#182A49] hover:text-white hover:shadow-md duration-500">
          ADD TO CART
          <ShoppingCartIcon className="h-6 w-6 absolute text-[#182A49] right-6 top-[50%] translate-y-[-50%] group-hover:text-white" />
        </button>
      </div>
    </motion.div>
  );
};

export default Product;
