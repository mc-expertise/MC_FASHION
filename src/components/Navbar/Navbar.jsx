import React, { useContext } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Logo from '../../Asset/LOGOMCFA.png';
import BarPromo from '../BarPromo/BarPromo';
import { motion } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { CommerceContext } from '../CommerceProvider';
const Navbar = () => {
  const { cart } = useContext(CommerceContext);
  // console.log('nvquantity:', updatedCartQuantity);
  const location = useLocation();
  return (
    <>
      <BarPromo />
      <div className="flex justify-between bg-gradient-to-b from-[#182A49] to-[#0000] items-center w-100vw relative ">
        <motion.div
          initial={{ scale: 0, y: -200 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
          }}
          className="text-[#182A49] font-semibold w-[calc(100vw-250px)] ">
          <div className=" hidden gap-2 justify-evenly text-[calc(1200vw/1018)] lg:flex mt-[25px] text-xl">
            <NavLink
              to="/"
              className="hover:text-white duration-500 cursor-pointer">
              ACCUEIL
            </NavLink>
            <NavLink
              to="/collections"
              className="hover:text-white duration-500 cursor-pointer">
              COLLECTIONS
            </NavLink>
          </div>
        </motion.div>
        <motion.img
          initial={{ scale: 0, y: -200 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
          }}
          src={Logo}
          alt=""
          className="max-h-[250px] max-w-[250px] z-[2]"
        />
        {/* <div
          className="bg-[#DBCDAD] absolute rounded-[50%] blur-[62px] w-[150px] h-[150px] z-[1] top-[50%] left-[50%] 
        translate-x-[-50%] translate-y-[-50%]"></div> */}
        <motion.div
          initial={{ scale: 0, y: -200 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
          }}
          className="w-[calc(100vw-250px)] text-[#182A49]">
          <ul className="flex gap-2 justify-evenly text-xl font-semibold items-center mt-[25px] text-[calc(1200vw/1018)]">
            <li className="hover:text-white duration-500 cursor-pointer lg:block hidden">
              CONTACTEZ-NOUS
            </li>
            <li className="hover:text-white duration-500 cursor-pointer lg:block hidden">
              À PROPOS
            </li>
            {location.pathname === '/cart' ? null : (
              <li className="hover:text-white duration-500 cursor-pointer relative">
                <Link to="/cart">
                  <ShoppingCartIcon className="h-10 w-10 text-right m-auto" />
                  {cart.total_items === 0 ? null : (
                    <p className="absolute top-[-6px] right-[-12px] h-6 w-6 bg-[#C8B790] text-sm text-[#182A49] rounded-full flex justify-center items-center">
                      {cart.total_items}
                    </p>
                  )}
                </Link>
              </li>
            )}
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
