import React, { useState } from 'react';

const CartItem = ({ cart, handleUpdateCartQty, handleRemoveFromCart }) => {
  const [less, setLess] = useState();

  return (
    <>
      <div className="">
        {cart.line_items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center last:mb-0 mb-6 last:border-b-0 border-b-2 
             border-gray-500 w-[70vw] m-auto last:pb-0 pb-8">
            <div className="flex flex-col gap-2 items-center">
              <img
                src={item.image.url}
                alt=""
                className="w-[150px] object-contain rounded-lg"
              />
              <p
                className=" text-gray-500 underline cursor-pointer"
                onClick={() => handleRemoveFromCart(item.id)}>
                Supprimer
              </p>
            </div>
            <div className=" flex flex-col gap-3">
              <p>{item.name}</p>
              <p>Livraison sous les 2-4 jours ouvrable</p>
              <p className="flex justify-between items-center">
                Quantiter:{' '}
                <button
                  className="bg-[#182a49] hover:bg-gray-300 hover:text-[#182a49] w-8 h-8 rounded-[50%] duration-300
                flex justify-center items-center text-white font-semibold"
                  onClick={() =>
                    handleUpdateCartQty(item.id, item.quantity - 1)
                  }>
                  {' '}
                  -{' '}
                </button>
                <span className=" text-xl">{item.quantity}</span>
                <button
                  className="bg-[#182a49] hover:bg-gray-300 hover:text-[#182a49] w-8 h-8 rounded-[50%] flex duration-300 
                justify-center items-center text-white font-semibold"
                  onClick={() =>
                    handleUpdateCartQty(item.id, item.quantity + 1)
                  }>
                  {' '}
                  +{' '}
                </button>
              </p>
            </div>
            <p>{item.price.formatted_with_code}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItem;
