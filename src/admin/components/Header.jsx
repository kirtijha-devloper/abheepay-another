import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 shrink-0 shadow-sm z-10">

      {/* Search Bar */}
      <div className="flex items-center flex-1 max-w-2xl">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border-none bg-transparent focus:ring-0 focus:outline-none sm:text-sm text-gray-600"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Right User Profile */}
      <div className="flex items-center">
        <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm ring-2 ring-gray-100 flex-shrink-0">
          <img
            src="https://ui-avatars.com/api/?name=Admin+User&background=random"
            alt="User profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
