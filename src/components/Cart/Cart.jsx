import React, { useContext } from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { CommerceContext } from '../CommerceProvider';

const Cart = () => {
  const { cart, handleUpdateCartQty, handleRemoveFromCart } =
    useContext(CommerceContext);
  console.log('cart:', cart);

  const EmptyCart = () => (
    <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[#182A49]">
      Vous n'avez aucun article dans votre panier,{' '}
      <Link
        to="/collections"
        className=" uppercase font-semibold cursor-pointer ">
        commencez à en ajouter !
      </Link>
    </p>
  );

  const FilledCart = () => (
    <div className="">
      <div className="flex gap-7 mb-6 ml-10 justify-center lg:justify-start">
        <p className="flex justify-center items-center gap-3">
          {' '}
          <CheckBadgeIcon className="h-8 w-8 text-green-600" /> Toujours retour
          gratuit
        </p>
        <p className="flex justify-center items-center gap-3">
          {' '}
          <CheckBadgeIcon className="h-8 w-8 text-green-600" /> Paiement
          sécurisé
        </p>
      </div>
      <CartItem
        cart={cart}
        handleUpdateCartQty={handleUpdateCartQty}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      <div className="mt-6 mr-10 text-right mb-40 ">
        <Link
          to="/collections"
          className="text-gray-500 uppercase cursor-pointer bg-gray-200 px-6 py-2">
          {' '}
          <span className="font-semibold">&lt;</span> Continue votre shopping
        </Link>
      </div>

      <div
        className=" flex lg:gap-2 items-center lg:w-[60vw] lg:m-auto lg:mb-20 text-xl lg:text-2xl mt-6
       bg-white lg:bg-transparent h-[70px] fixed lg:relative bottom-[0] w-[100%] shadow lg:shadow-none">
        <p className="text-right mr-10  uppercase  flex-1 tracking-wider flex justify-around lg:justify-center items-center gap-2">
          Total :<span className=" ">{cart.subtotal.formatted_with_code}</span>
        </p>

        <a
          href="/checkout"
          className="py-2 px-6 bg-green-500 text-white  font-semibold tracking-wider flex-1 h-[100%] 
          flex justify-center items-center">
          COMMANDER &#62;
        </a>
      </div>
    </div>
  );

  if (!cart.line_items)
    return (
      <div class="lds-roller absolute left-[50%] top-[50%] translate-y-[100%] translate-x-[-50%]">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  return (
    <div className="flex flex-col gap-6">
      <h1 className="ml-10 text-3xl text-[#182A49]">Votre Panier:</h1>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </div>
  );
};

export default Cart;
