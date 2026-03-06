import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  FaFingerprint, 
  FaMobileAlt, 
  FaWallet, 
  FaFileInvoiceDollar, 
  FaIdCard, 
  FaCreditCard, 
  FaUniversity, 
  FaChartLine, 
  FaHandHoldingUsd,
  FaUserShield,
  FaMoneyBillWave
} from 'react-icons/fa';
import { MdMobileFriendly } from 'react-icons/md';
import { dashboardChartData, dashboardPieData } from '../data/mockData';

const COLORS = ['#FF6B6B', '#4DABF7', '#FCC419', '#868E96', '#40C057', '#FA5252'];

const servicesData = [
  { id: 1, title: 'AEPS', icon: <span className="text-3xl font-bold text-gray-700 italic">A<span className="text-green-500">P</span>S<span className="text-orange-500 text-sm">)</span></span>, borderColor: 'border-purple-800', borderHover: 'hover:border-purple-600' },
  { id: 2, title: 'D M T S1', icon: <MdMobileFriendly className="text-4xl text-blue-500" />, borderColor: 'border-blue-500', borderHover: 'hover:border-blue-400' },
  { id: 3, title: 'D M T S2', icon: <FaMobileAlt className="text-4xl text-blue-400" />, borderColor: 'border-blue-400', borderHover: 'hover:border-blue-300' },
  { id: 4, title: 'PayOut', icon: <FaWallet className="text-4xl text-gray-800" />, borderColor: 'border-indigo-900', borderHover: 'hover:border-indigo-700' },
  { id: 5, title: 'Bill Payment', icon: <FaFileInvoiceDollar className="text-4xl text-gray-500" />, borderColor: 'border-red-600', borderHover: 'hover:border-red-500' },
  { id: 6, title: 'PAN', icon: <FaIdCard className="text-4xl text-indigo-800" />, borderColor: 'border-purple-800', borderHover: 'hover:border-purple-600' },
  { id: 7, title: 'Credit Card', icon: <FaCreditCard className="text-4xl text-blue-800" />, borderColor: 'border-red-500', borderHover: 'hover:border-red-400' },
  { id: 8, title: 'Abhee Collect', icon: <FaWallet className="text-4xl text-green-500" />, borderColor: 'border-orange-500', borderHover: 'hover:border-orange-400' },
  { id: 9, title: 'Credit Card Checker', icon: <FaUserShield className="text-4xl text-gray-600" />, borderColor: 'border-red-500', borderHover: 'hover:border-red-400' },
  { id: 10, title: 'Bank Verification', icon: <FaUniversity className="text-4xl text-green-600" />, borderColor: 'border-green-600', borderHover: 'hover:border-green-500' },
  { id: 11, title: 'Transtion Staus', icon: <FaChartLine className="text-4xl text-orange-500" />, borderColor: 'border-red-600', borderHover: 'hover:border-red-500' },
  { id: 12, title: 'LOANS', icon: <FaHandHoldingUsd className="text-4xl text-yellow-500" />, borderColor: 'border-blue-600', borderHover: 'hover:border-blue-500' },
];

const Dashboard = () => {
  // Get user role from local storage
  const userRole = localStorage.getItem('userRole') || 'RETAILER';
  const hasDownlines = ['ADMIN', 'SUPER_DISTRIBUTOR', 'MASTER_DISTRIBUTOR', 'DISTRIBUTOR'].includes(userRole);

  // Format the role for display (e.g., MASTER_DISTRIBUTOR -> Master Distributor)
  const displayRole = userRole.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

  if (!hasDownlines) {
    return (
      <div className="bg-[#151923] min-h-screen p-4 md:p-6 text-gray-200 overflow-y-auto font-sans">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">OVERVIEW</h2>
            <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-[#202532] text-gray-300 hover:text-white px-4 py-2 rounded border border-gray-700 text-sm font-medium transition-colors">
              New view
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium flex items-center transition-colors">
              <span className="mr-2 text-lg leading-none">+</span> Create new report
            </button>
          </div>
        </div>

        {/* Top Row: Welcome & Balances */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Welcome Card */}
          <div className="bg-[#202532] rounded-xl p-6 relative overflow-hidden border border-[#2a3042] flex flex-col justify-between h-[220px]">
            <div className="z-10 relative">
              <h2 className="text-xl font-bold text-white mb-2">Welcome back, prahlad!</h2>
              <p className="text-xs text-gray-400 mb-6 w-2/3 leading-relaxed">
                You have 5 new messages and 2 new notifications.
              </p>
              
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">TODAY'S SALES</p>
                  <p className="text-lg font-bold text-white flex items-center">
                    6,782 <span className="text-xs text-green-500 ml-2 font-normal">7% ↗</span>
                  </p>
                  <div className="w-8 h-0.5 bg-green-500 mt-2"></div>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">GROWTH RATE</p>
                  <p className="text-lg font-bold text-white flex items-center">
                    78.4% <span className="text-xs text-red-500 ml-2 font-normal">-1% ↘</span>
                  </p>
                  <div className="w-8 h-0.5 bg-red-500 mt-2"></div>
                </div>
              </div>
            </div>
            
            {/* Mock Illustration in BG */}
            <div className="absolute right-0 bottom-4 w-40 h-32 pointer-events-none flex justify-end items-end pr-4">
               {/* Abstract people illustration mockup matching the vibe */}
               <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
                  <path d="M70,40 Q90,20 100,50 L80,90 Z" fill="currentColor" opacity="0.1"/>
                  <circle cx="60" cy="30" r="12" fill="#3b82f6" />
                  <path d="M40,60 L60,80 L80,60" stroke="#3b82f6" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="85" cy="45" r="5" fill="#ef4444" />
                  <rect x="75" y="70" width="15" height="30" fill="#cbd5e1" rx="4"/>
               </svg>
            </div>
          </div>

          {/* Main Balance / Total Users */}
          <div className="bg-[#202532] rounded-xl p-6 border border-[#2a3042] flex flex-col justify-between h-[220px]">
             <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">MAIN BALANCE (USERS)</p>
                <div className="flex items-baseline mb-2">
                   <h3 className="text-2xl font-bold text-white">₹309.50</h3>
                   <span className="text-green-500 text-xs font-bold ml-2">2% ↗</span>
                </div>
                <p className="text-xs text-gray-500">24,635 users increased from last month</p>
             </div>
             
             {/* Small line chart mockup */}
             <div className="h-16 w-full flex items-end justify-between mt-4">
                 <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full stroke-blue-500 fill-none" strokeWidth="1.5">
                    <path d="M0,25 Q10,10 20,20 T40,15 T60,25 T80,5 T100,10" />
                 </svg>
             </div>
          </div>

          {/* AePS Balance / Active Users */}
          <div className="bg-[#202532] rounded-xl p-6 border border-[#2a3042] flex flex-col items-center justify-between h-[220px] relative">
             <div className="w-full flex justify-between items-start">
                <div>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">AePS BALANCE</p>
                   <div className="flex items-baseline mb-2">
                      <h3 className="text-xl font-bold text-white">₹0.00</h3>
                      <span className="text-red-500 text-xs font-bold ml-2">-1% ↘</span>
                   </div>
                </div>
             </div>
             
             {/* Donut Chart Mockup */}
             <div className="relative w-28 h-28 flex items-center justify-center mt-2 mb-2">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                   <path
                     className="text-[#2a3042]"
                     d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="4"
                   />
                   <path
                     className="text-blue-500"
                     strokeDasharray="78, 100"
                     d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="4"
                     strokeLinecap="round"
                   />
                </svg>
                <div className="absolute text-center">
                   <span className="text-xl font-bold text-white">78%</span>
                </div>
             </div>
          </div>
        </div>

        {/* Mock Medium Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
           {/* Card 1 */}
           <div className="bg-[#202532] rounded-xl p-5 border border-[#2a3042]">
              <div className="flex justify-between items-center mb-3">
                 <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">SALES</p>
                 <select className="bg-transparent text-xs text-gray-400 outline-none"><option>Last 7 days</option></select>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">75%</h3>
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                 <span>Conversion rate</span>
                 <span className="text-green-500">7% ↗</span>
              </div>
              <div className="w-full bg-[#2a3042] h-1 mt-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full" style={{width: '75%'}}></div>
              </div>
           </div>

           {/* Card 2 */}
           <div className="bg-[#202532] rounded-xl p-5 border border-[#2a3042]">
              <div className="flex justify-between items-center mb-3">
                 <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">REVENUE</p>
                 <select className="bg-transparent text-xs text-gray-400 outline-none"><option>Last 7 days</option></select>
              </div>
              <div className="flex items-baseline mb-4">
                 <h3 className="text-xl font-bold text-white">$4,300</h3>
                 <span className="text-green-500 text-xs font-bold ml-2">8% ↗</span>
              </div>
              <div className="h-10 w-full flex items-end mt-4">
                 <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full stroke-blue-500 fill-none" strokeWidth="2">
                    <polyline points="0,30 10,25 20,28 30,15 40,20 50,5 60,18 70,10 80,15 90,5 100,10" />
                 </svg>
              </div>
           </div>

           {/* Card 3 */}
           <div className="bg-[#202532] rounded-xl p-5 border border-[#2a3042]">
              <div className="flex justify-between items-center mb-3">
                 <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">NEW CLIENTS</p>
                 <select className="bg-transparent text-xs text-gray-400 outline-none"><option>Last 7 days</option></select>
              </div>
              <div className="flex items-baseline mb-4">
                 <h3 className="text-xl font-bold text-white">6,782</h3>
                 <span className="text-yellow-500 text-xs font-bold ml-2">0% -</span>
              </div>
              <div className="h-10 w-full flex items-end mt-4">
                 <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full stroke-blue-500 fill-none" strokeWidth="2">
                    <polyline points="0,25 10,20 20,28 30,10 40,15 50,2 60,18 70,8 80,18 90,0 100,12" />
                 </svg>
              </div>
           </div>

           {/* Card 4 */}
           <div className="bg-[#202532] rounded-xl p-5 border border-[#2a3042]">
              <div className="flex justify-between items-center mb-3">
                 <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">ACTIVE SUBSCRIPTIONS</p>
                 <select className="bg-transparent text-xs text-gray-400 outline-none"><option>Last 7 days</option></select>
              </div>
              <div className="flex items-baseline mb-4">
                 <h3 className="text-xl font-bold text-white">2,986</h3>
                 <span className="text-green-500 text-xs font-bold ml-2">4% ↗</span>
              </div>
              <div className="h-10 w-full flex items-end justify-between space-x-[2px] mt-4">
                 {[5, 4, 6, 8, 3, 5, 4, 7, 9, 6, 8, 5, 4, 6, 8, 3, 5, 4, 7, 9, 6, 5, 8, 4, 6, 7].map((h, i) => (
                    <div key={i} className="w-full bg-blue-500 rounded-sm" style={{height: `${h*10}%`}}></div>
                 ))}
              </div>
           </div>
        </div>

        {/* Small Action Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
           {/* Small Box 1 */}
           <div className="bg-[#202532] rounded-xl p-4 border border-[#2a3042] flex items-center">
              <div className="w-10 h-10 rounded-md bg-blue-500 flex items-center justify-center text-white mr-4 shrink-0 shadow-lg shadow-blue-500/20">
                 <FaFileInvoiceDollar size={18} />
              </div>
              <div>
                 <p className="text-gray-200 text-sm font-bold">132 Sales</p>
                 <p className="text-gray-500 text-[10px]">12 waiting payments</p>
              </div>
           </div>
           
           {/* Small Box 2 */}
           <div className="bg-[#202532] rounded-xl p-4 border border-[#2a3042] flex items-center">
              <div className="w-10 h-10 rounded-md bg-green-500 flex items-center justify-center text-white mr-4 shrink-0 shadow-lg shadow-green-500/20">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <div>
                 <p className="text-gray-200 text-sm font-bold">78 Orders</p>
                 <p className="text-gray-500 text-[10px]">32 shipped</p>
              </div>
           </div>

           {/* Small Box 3 */}
           <div className="bg-[#202532] rounded-xl p-4 border border-[#2a3042] flex items-center">
              <div className="w-10 h-10 rounded-md bg-[#181d28] border border-gray-700 flex items-center justify-center text-white mr-4 shrink-0">
                 <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
              <div>
                 <p className="text-gray-200 text-sm font-bold">623 Shares</p>
                 <p className="text-gray-500 text-[10px]">16 today</p>
              </div>
           </div>

           {/* Small Box 4 */}
           <div className="bg-[#202532] rounded-xl p-4 border border-[#2a3042] flex items-center">
              <div className="w-10 h-10 rounded-md bg-blue-500 flex items-center justify-center text-white mr-4 shrink-0 shadow-lg shadow-blue-500/20">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <div>
                 <p className="text-gray-200 text-sm font-bold">132 Likes</p>
                 <p className="text-gray-500 text-[10px]">21 today</p>
              </div>
           </div>
        </div>

        {/* Services in Dark Theme Grid */}
        <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">Actual Associated Services</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-[#202532] rounded-xl p-5 border border-[#2a3042] hover:border-blue-500/50 hover:bg-[#252b3b] transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer h-[120px] shadow-sm">
              <div className="mb-3 transform hover:scale-110 transition-transform duration-300 drop-shadow-md">
                {service.icon}
              </div>
              <span className="text-[11px] font-semibold text-gray-300">{service.title}</span>
            </div>
          ))}
        </div>

      </div>
    );
  }

  // Dashboard logic for users WITH downlines (Admin, Master Distributor, etc.)
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-normal text-gray-800 tracking-tight">
        Hello <span className="font-bold">{displayRole}</span>,
      </h1>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Left Side (3/4 width) */}
        <div className="lg:col-span-3 space-y-6">

          {/* Top 3 Cards (Common to all roles) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* AEPS Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-gray-700 italic">A<span className="text-green-500">P</span>S<span className="text-orange-500 text-sm">)</span></span>
              </div>
              <h2 className="text-lg font-bold text-gray-800">AEPS</h2>
              <p className="text-gray-500 text-sm mt-1">Today Volume: 0</p>
            </div>

            {/* DMT Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full border-2 border-indigo-600 flex items-center justify-center mb-4 bg-indigo-50">
                <div className="text-xl text-yellow-500">💸</div>
              </div>
              <h2 className="text-lg font-bold text-gray-800">DMT</h2>
              <p className="text-gray-500 text-sm mt-1">Today Volume: 0</p>
            </div>

            {/* Wallet Enquiry Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center mb-4 bg-red-50">
                <div className="text-xl text-green-500">👝</div>
              </div>
              <h2 className="text-lg font-bold text-gray-800">WALLET ENQUIRY</h2>
              <p className="text-gray-500 text-sm mt-1">Today Volume: 0</p>
            </div>

          </div>

          {/* Stats Cards Row - Only show if user has downlines */}
          {hasDownlines && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Total Users */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-indigo-400 text-center">
                <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-2">Total Network Volume</p>
                <h3 className="text-2xl font-bold text-gray-800">₹1,228,256.68</h3>
                <p className="text-indigo-500 font-semibold mt-1">Across 583 Users</p>
              </div>

              {/* Downline Level 1 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-orange-400 text-center">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">Direct Downlines</p>
                <h3 className="text-2xl font-bold text-gray-800">85</h3>
                <p className="text-orange-400 font-semibold mt-1">₹26,021.85 Team Comm.</p>
              </div>

              {/* Downline Level 2 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-green-400 text-center">
                <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-2">Retailers in Network</p>
                <h3 className="text-2xl font-bold text-gray-800">498</h3>
                <p className="text-green-500 font-semibold mt-1">₹1,202,234.83 Sales</p>
              </div>
            </div>
          )}

          {/* Main Bar Chart - Common */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 text-center mb-6">Usage Report last 7 days</h3>
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={dashboardChartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value}`} />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Bar dataKey="PG" fill="#4263EB" radius={[2, 2, 0, 0]} barSize={20} />
                  <Bar dataKey="Payout" fill="#8CE99A" radius={[2, 2, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* Right Side (1/4 width) */}
        <div className="lg:col-span-1 space-y-6">

          {/* Right Side Transaction Chart (Pie) */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col h-auto">
            <h3 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wider text-center">Service Breakdown</h3>

            {/* Custom Legend */}
            <div className="grid grid-cols-2 gap-y-2 gap-x-1 text-[10px] text-gray-500 mb-4">
              <div className="flex items-center"><span className="w-4 h-2 bg-[#FF6B6B] mr-1"></span>AEPS</div>
              <div className="flex items-center"><span className="w-4 h-2 bg-[#4DABF7] mr-1"></span>Payout</div>
              <div className="flex items-center"><span className="w-4 h-2 bg-[#FCC419] mr-1"></span>DMT</div>
              <div className="flex items-center"><span className="w-4 h-2 bg-[#868E96] mr-1"></span>Recharge</div>
              <div className="flex items-center"><span className="w-4 h-2 bg-[#8b5cf6] mr-1"></span>BBPS</div>
            </div>

            <div className="w-full h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dashboardPieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {dashboardPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Statistics List - Only show if has downlines */}
          {hasDownlines && (
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-gray-800 mb-6 uppercase tracking-wider">Network Size</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 font-medium">Retailers:</span>
                  <span className="text-gray-800 font-bold">498</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 font-medium">Distributors:</span>
                  <span className="text-gray-800 font-bold">85</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 font-medium">Total Network:</span>
                  <span className="text-gray-800 font-bold">583</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;
