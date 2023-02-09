import React from "react";
import { Link } from 'react-router-dom'
import './Footer.css'
import {BiMailSend} from 'react-icons/bi'

export const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-emerald-700 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 footer">
        <span className="text-sm text-emerald-50 sm:text-center ">
          © 2022 <a className="hover:underline">piltri</a>. All Rights
          Reserved. 
           info@piltri.io 
        </span>
        
        <ul className="flex flex-wrap items-center mt-3 text-sm text-emerald-50  sm:mt-0">
          <li>
            <Link to="/about">
              <a className="mr-4 hover:underline md:mr-6 ">About</a>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <a className="mr-4 hover:underline md:mr-6">Contact us</a>
            </Link>
          </li>
          <li>
            <Link to="/know-us">
              <a className="mr-4 hover:underline md:mr-6">Know us</a>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
