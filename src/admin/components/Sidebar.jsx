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

  // Get user role from local storage (default to RETAILER if not logged in for previews)
  const userRole = localStorage.getItem('userRole') || 'RETAILER';

  // Role permissions mapping
  // Admin: Can see everything
  // SD/MD/DIST: Can see User mgt (Add Member, All Members, KYC)
  // Retailer: Usage only, CANNOT see User mgt
  const canManageUsers = ['ADMIN', 'SUPER_DISTRIBUTOR', 'MASTER_DISTRIBUTOR', 'DISTRIBUTOR'].includes(userRole);
  const isAdmin = userRole === 'ADMIN';

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

          <NavLink to="/admin" end className={({ isActive }) => `flex items-center px-3 py-2.5 font-bold rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-black hover:bg-gray-50'}`}>
            <Home className="w-5 h-5 mr-3" />
            Home
          </NavLink>

          <NavLink to="/admin/fund-request" className={({ isActive }) => `flex items-center px-3 py-2.5 font-bold rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-black hover:bg-gray-50'}`}>
            <CreditCard className="w-5 h-5 mr-3" />
            Fund Request
          </NavLink>

          {/* Services Menu */}
          <div>
            <button
              onClick={() => toggleMenu('services')}
              className="w-full flex items-center justify-between px-3 py-2.5 text-black font-bold rounded-md hover:bg-gray-50"
            >
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 mr-3 text-blue-500" />
                <span className="font-bold">Services</span>
              </div>
              {openMenus.services ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
            </button>
            {openMenus.services && (
              <div className="pl-11 pr-3 py-1 space-y-1 max-h-[50vh] overflow-y-auto">
                <NavLink to="/admin/assisted-banking/aeps" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• AEPS</NavLink>
                <NavLink to="/admin/bbps" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• BBPS</NavLink>
                <NavLink to="/admin/assisted-banking/dmt" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• DMT</NavLink>
                <NavLink to="/admin/recharge" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Recharge</NavLink>
                <NavLink to="/admin/loan" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Loan</NavLink>
                <NavLink to="/admin/credit-card-apply" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Credit Card</NavLink>
                <NavLink to="/admin/bbps/credit-card" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Credit Card Bill Pay</NavLink>
                <NavLink to="/admin/payout" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Payout</NavLink>
                <NavLink to="/admin/assisted-banking/matm" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• mATM</NavLink>
                <NavLink to="/admin/bank-account-open" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Bank Account Open</NavLink>
                <NavLink to="/admin/nsdl-pan" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• PAN Apply</NavLink>
                <NavLink to="/admin/ppi-wallet" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• PPI Wallet</NavLink>
                <NavLink to="/admin/travel-booking" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Travel Booking</NavLink>
              </div>
            )}
          </div>

          {/* Reports Menu */}
          <div className="pt-4 pb-2">
            <span className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider">REPORT</span>
          </div>
          <div>
            <button
              onClick={() => toggleMenu('reports')}
              className="w-full flex items-center justify-between px-3 py-2.5 text-black font-bold rounded-md hover:bg-gray-50"
            >
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-3" />
                <span className="font-bold">Report</span>
              </div>
              {openMenus.reports ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
            </button>
            {openMenus.reports && (
              <div className="pl-11 pr-3 py-1 space-y-1">
                <NavLink to="/admin/report/ledger" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Ledger Statement</NavLink>
                <NavLink to="/admin/report/add-fund-pg" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Add Fund PG Report</NavLink>
                <NavLink to="/admin/report/aeps-history" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Aeps History</NavLink>
                <NavLink to="/admin/report/money-transfer-history" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Money Transfer History</NavLink>
                <NavLink to="/admin/report/bbps-history" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• BBPS History</NavLink>
                <NavLink to="/admin/report/payout-history" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Payout History</NavLink>
                <NavLink to="/admin/report/old-txn-history" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Old TXN History (before 10-10-2025)</NavLink>
              </div>
            )}
          </div>

          <div className="pt-4 pb-2">
            <span className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider">SETTING</span>
          </div>
          <div>
              <button
                onClick={() => toggleMenu('settings')}
                className="w-full flex items-center justify-between px-3 py-2.5 text-black font-bold rounded-md hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <Settings className="w-5 h-5 mr-3" />
                  <span className="font-bold">Setting</span>
                </div>
                {openMenus.settings ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
              </button>
              {openMenus.settings && (
                <div className="pl-11 pr-3 py-1 space-y-1">
                  <NavLink to="/admin/setting/commission-plan" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Commission Plan</NavLink>
                  <NavLink to="/admin/setting/profile" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Profile</NavLink>
                  <NavLink to="/admin/setting/tpin" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• TPIN</NavLink>
                  <NavLink to="/admin/setting/change-password" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Change Password</NavLink>
                  <NavLink to="/admin/setting/certificate-download" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Certificate Download</NavLink>
                  <NavLink to="/admin/setting/download-device-driver" className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}>• Download Device Driver</NavLink>
                </div>
              )}
           </div>

        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
