import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
const BarPromo = () => {
  return (
    <>
      <div className="w-full  text-white py-3 fixed top-0 z-20 bg-[#182a49] ">
        <ul className="flex text-md font-extralight justify-around px-6">
          <li className=" flex items-center justify-center gap-1 ">
            <CheckBadgeIcon className="h-5 w-5 text-green-600" />
            Livraison sous les{' '}
            <span className="font-semibold">2-4 jours ouvrable</span>
          </li>
          <li className=" flex items-center justify-center gap-1 translate-x-[-55px]">
            {' '}
            <CheckBadgeIcon className="h-5 w-5 text-green-600 " /> Livraison
            gratuite à partir de 50 €
          </li>
          <li className="  flex items-center justify-center gap-1 ">
            {' '}
            <CheckBadgeIcon className="h-5 w-5 text-green-600" />
            Toujours retour gratuit
          </li>
        </ul>
      </div>
    </>
  );
};

export default BarPromo;
