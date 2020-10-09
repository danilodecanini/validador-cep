import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-200 py-6 md:justify-start md:space-x-10">
          <Link to="/">
            <h2 className="font-semibold">Validador de CEP</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
