import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-10 my-10 text-sm">
        <div className="w-full sm:w-1/3 flex flex-col items-start">
          <div className="flex items-center gap-3">
            <img src={assets.logo} className="w-12" alt="Ukay Ukay Logo" />
            <p className="text-lg font-semibold text-gray-700">Ukay Ukay</p>
          </div>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            eligendi ipsum ea repellendus minima error quas possimus libero
            culpa. Inventore, eveniet architecto numquam voluptates labore quod
            cumque adipisci eius incidunt!
          </p>
        </div>

        {/* Company Links */}
        <div className="w-full sm:w-1/4">
          <p className="text-xl font-medium mb-4">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Delivery</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full sm:w-1/4">
          <p className="text-xl font-medium mb-4">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="flex items-center">
              <span className="text-red-600 mr-2">📞</span> +639056874220
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 mr-2">✉</span> ukayukay@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ UkayUkay.com - All Rights Reserved ©
        </p>
      </div>
    </div>
  );
};

export default Footer;
