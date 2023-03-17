import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import pcollections from '../Asset/collections.png';
import { CommerceContext } from '../components/CommerceProvider';
import Recommander from '../components/Recommander/Recommander';
const Collections = () => {
  const { categories, products } = useContext(CommerceContext);
  if (!categories) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="">
        <div className="flex w-[70vw] m-auto relative">
          <img src={pcollections} alt="fs" className="rounded-l flex-1" />
          <div className="bg-[#182A49] text-white w-[570px] rounded-r relative flex-1 ">
            <div className="absolute bottom-20 text-[calc(2500vw/1040)] font-semibold tracking-wide ml-20">
              <p>MC FASHION</p>
              <p>
                PRINTENPS 2023 : <br /> COLLECTION VENTE
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center gap-10 items-center flex-col lg:flex-row relative translate-y-10
          w-[70vw] m-auto
     ">
          {categories.map((category) => (
            <div key={category.id}>
              <div
                className=" group w-[400px]  rounded relative group before:content-[''] before:absolute 
  before:w-[100%] before:h-[100%] group hover:before:bg-black before:opacity-40 before:inset-0 before:z-10 before:rounded 
   before:duration-700 shadow hover:shadow-none duration-700 mb-10">
                <img src={category.assets[0].url} alt="tOF" className="" />
                <div
                  className="hidden absolute left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 top-[70%]  flex-col 
                justify-evenly h-[70%] group-hover:flex group-duration-700 w-[100%]">
                  <p className="  font-semibold text-white  w-full text-center text-2xl">
                    {category.name}
                  </p>
                  <Link to="/suits">
                    <button className="px-10 py-2 bg-white text-black uppercase font-semibold w-[100%] cursor-pointer tracking-wider">
                      Voir Plus
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <Recommander products={products} />
        </div>
      </div>
    </>
  );
};

export default Collections;
