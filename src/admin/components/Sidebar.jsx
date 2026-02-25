import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  User,
  Settings,
  FileText,
  ChevronRight,
  ChevronDown,
  CreditCard,
  Briefcase,
  PieChart
} from 'lucide-react';

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    user: false,
    api: false,
    reports: false,
    settings: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col h-full shrink-0 shadow-sm z-10">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          {/* Mock Logo */}
          <div className="text-3xl font-bold text-cyan-400 italic">a<span className="text-gray-800 text-xl font-semibold not-italic">bheePay</span></div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-3 space-y-1">

          <NavLink to="/" className="flex items-center px-3 py-2.5 text-black font-semibold rounded-md hover:bg-gray-50 mb-2">
            <Home className="w-5 h-5 mr-3 text-black" />
            Home
          </NavLink>

          {/* User Menu */}
          <div>
            <button
              onClick={() => toggleMenu('user')}
              className="w-full flex items-center justify-between px-3 py-2.5 text-gray-700 font-medium rounded-md hover:bg-gray-50"
            >
              <div className="flex items-center">
                <User className="w-5 h-5 mr-3 text-black font-bold" />
                <span className="font-semibold text-black">User</span>
              </div>
              {openMenus.user ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
            {openMenus.user && (
              <div className="pl-11 pr-3 py-1 space-y-1">
                <NavLink to="/add-member" className="block px-3 py-2 text-sm text-gray-600 font-medium hover:text-black hover:bg-gray-50 rounded-md">• Add Member</NavLink>
                <NavLink to="/all-members" className="block px-3 py-2 text-sm text-gray-600 font-medium hover:text-black hover:bg-gray-50 rounded-md">• All Members</NavLink>
                <NavLink to="/kyc-requested" className="block px-3 py-2 text-sm text-gray-600 font-medium hover:text-black hover:bg-gray-50 rounded-md">• KYC Requested</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/fund-requests" className="flex items-center px-3 py-2.5 text-gray-700 font-medium rounded-md hover:bg-gray-50">
            <CreditCard className="w-5 h-5 mr-3 text-black font-bold" />
            <span className="font-semibold text-black">Fund Requests</span>
          </NavLink>

          <NavLink to="/commission-plans" className="flex items-center px-3 py-2.5 text-gray-700 font-medium rounded-md hover:bg-gray-50">
            <PieChart className="w-5 h-5 mr-3 text-black font-bold" />
            <span className="font-semibold text-black">Commission Plans</span>
          </NavLink>

          {/* Reports Menu */}
          <div>
            <button
              onClick={() => toggleMenu('reports')}
              className="w-full flex items-center justify-between px-3 py-2.5 text-gray-700 font-medium rounded-md hover:bg-gray-50"
            >
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-3 text-black font-bold" />
                <span className="font-semibold text-black">Reports</span>
              </div>
              {openMenus.reports ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
            {openMenus.reports && (
              <div className="pl-11 pr-3 py-1 space-y-1">
                <NavLink to="/ledger" className="block px-3 py-2 text-sm text-gray-600 font-medium hover:text-black hover:bg-gray-50 rounded-md">• Ledger Statement</NavLink>
                <NavLink to="/fund-transfer" className="block px-3 py-2 text-sm text-gray-600 font-medium hover:text-black hover:bg-gray-50 rounded-md">• Fund Transfer History</NavLink>
                <NavLink to="/pg-add-fund" className="block px-3 py-2 text-sm text-gray-600 font-medium hover:text-black hover:bg-gray-50 rounded-md">• PG Add Fund History</NavLink>
                <NavLink to="/payout-history" className="block px-3 py-2 text-sm text-gray-600 font-medium hover:text-black hover:bg-gray-50 rounded-md">• PayOut History</NavLink>
                <NavLink to="/aeps-statement" className="block px-3 py-2 text-sm text-gray-600 font-medium hover:text-black hover:bg-gray-50 rounded-md">• AEPS Statement</NavLink>
                <NavLink to="/dmt-report" className="block px-3 py-2 text-sm text-gray-600 font-medium hover:text-black hover:bg-gray-50 rounded-md">• DMT Report</NavLink>
              </div>
            )}
          </div>

          {/* Settings Menu */}
          <div>
            <button
              onClick={() => toggleMenu('settings')}
              className="w-full flex items-center justify-between px-3 py-2.5 text-gray-700 font-medium rounded-md hover:bg-gray-50"
            >
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 mr-3 text-black font-bold" />
                <span className="font-semibold text-black">Settings</span>
              </div>
              {openMenus.settings ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>

        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
