import React, { useContext, useState } from 'react';
import { CommerceContext } from '../CommerceProvider';
import Product from './Product/Product';

const Products = () => {
  const {
    products,
    fetchVariables,
    variant,
    handleAddToCart,
    cartQuantity,
    updatedCartQuantity,
    setUpdatedCartQuantity,
  } = useContext(CommerceContext);
  if (products === undefined) return 'chargement...';
  return (
    <main className="relative z-10">
      <h1 className="text-4xl text-center font-semibold text-[#182A49] my-10 sm:text-[calc(3500vw/1018)] ">
        COSTUME
      </h1>
      <div
        className="bg-[#182A49] absolute rounded-[50%] blur-[212px] w-[30vw] h-[20vh] 
      top-[50%] left-[20%] z-10"></div>
      <div
        className="bg-[#182A49] absolute rounded-[50%] blur-[212px] w-[30vw] h-[20vh] 
      top-[80%] right-[20%] z-10"></div>
      <div
        className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4  lg:grid-cols-[repeat(3,minmax(250px,1fr))] 
      sm:px-[40px] px-[10px]">
        {products.map((product) => (
          <div key={product.id} className="">
            <Product
              product={product}
              onAddToCart={handleAddToCart}
              fetchVariables={fetchVariables}
              cartQuantity={cartQuantity}
              setUpdatedCartQuantity={setUpdatedCartQuantity}
              updatedCartQuantity={updatedCartQuantity}
              variant={variant}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
