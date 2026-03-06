import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react'; // Icon for Reset if needed, though standard buttons can be used

const Aeps = () => {
  const [activeTab, setActiveTab] = useState('WITHDRAW');

  const tabs = [
    { id: 'WITHDRAW', label: 'Withdraw' },
    { id: 'BALANCE_ENQUIRY', label: 'BALANCE ENQUIRY' },
    { id: 'MINI_STATEMENT', label: 'MINI STATEMENT' },
    { id: 'HISTORY', label: 'HISTORY' },
    { id: 'OUTLET_STATUS', label: 'OUTLET STATUS' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <ul className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-xs font-bold whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`p-6 mx-auto flex flex-col lg:flex-row gap-6 ${activeTab === 'HISTORY' ? 'w-full' : 'max-w-7xl'}`}>
        {/* Main Content Area (Form) */}
        <div className={`flex-1 ${activeTab === 'HISTORY' ? 'w-full' : 'max-w-2xl'}`}>
          {['WITHDRAW', 'BALANCE_ENQUIRY', 'MINI_STATEMENT'].includes(activeTab) && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-[#8cc63f] py-4 text-center">
                <h2 className="text-xl font-bold">
                  <span className="text-red-500">AEPS</span>{' '}
                  <span className="text-blue-600">
                    {activeTab === 'WITHDRAW' && 'Cash Withdrawal'}
                    {activeTab === 'BALANCE_ENQUIRY' && 'Balance Enquiry'}
                    {activeTab === 'MINI_STATEMENT' && 'Mini Statement'}
                  </span>
                </h2>
              </div>
              <div className="p-6 space-y-5">
                {/* Aadhaar Number */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                    AADHAAR NUMBER
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Aadhaar Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Enter a valid 12-digit Aadhaar number.</p>
                </div>

                {/* Select Bank */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                    Select Bank
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm bg-white text-gray-500">
                    <option>-- Select a Bank --</option>
                    <option>State Bank of India</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                  </select>
                </div>

                {/* Amount (Only for Withdraw) */}
                {activeTab === 'WITHDRAW' && (
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                      AMOUNT
                    </label>
                    <input
                      type="number"
                      placeholder="Enter Amount"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                    />
                  </div>
                )}

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                    MOBILE NUMBER
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button className="px-6 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors text-sm">
                    Capture
                  </button>
                  <button className="flex-1 px-6 py-2 bg-[#8cc63f] text-white font-medium rounded-md hover:bg-[#7cbd32] transition-colors text-sm">
                    Submit
                  </button>
                  <button className="flex-1 px-6 py-2 bg-orange-400 text-white font-medium rounded-md hover:bg-orange-500 transition-colors text-sm">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Outlet Status */}
          {activeTab === 'OUTLET_STATUS' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-[#8cc63f] py-4 px-6">
                <h2 className="text-lg text-gray-900 font-medium">Check Outlet Login Status</h2>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-700 mb-6">Click the button below to check the outlet login status.</p>
                
                <div className="space-y-6">
                  <button className="px-6 py-2 bg-[#6b66ff] text-white font-medium rounded-md hover:bg-blue-600 transition-colors text-sm">
                    Check Status
                  </button>
                  <br />
                  <button className="px-6 py-2 bg-[#00c6ff] text-white font-medium rounded-md hover:bg-cyan-500 transition-colors text-sm">
                    LogIn
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* History */}
          {activeTab === 'HISTORY' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden col-span-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h2 className="text-xl font-medium text-gray-800">Cash Withdrawal History</h2>
                <button className="px-4 py-1.5 bg-[#8cc63f] text-white text-sm font-medium rounded hover:bg-[#7cbd32] transition-colors">
                  Export to Excel
                </button>
              </div>
              
              <div className="p-4 space-y-4">
                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 items-end">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-600 mb-1">Start Date & Time</label>
                    <input type="datetime-local" className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-600 mb-1">End Date & Time</label>
                    <input type="datetime-local" className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-500" />
                  </div>
                  <button className="px-6 py-2 bg-[#6b66ff] text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors">
                    Filter
                  </button>
                </div>

                {/* Table Controls */}
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <select className="border border-gray-300 rounded px-2 py-1 mr-2 bg-white">
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                    </select>
                    entries per page
                  </div>
                  <div>
                    <input type="text" placeholder="Search..." className="px-3 py-1.5 border border-gray-300 rounded text-sm" />
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto border border-gray-200 rounded">
                  <table className="w-full text-center text-xs text-gray-700">
                    <thead className="bg-gray-50 border-b border-gray-200 uppercase text-[10px] font-bold">
                      <tr>
                        <th className="px-4 py-3 border-r border-gray-200">ID</th>
                        <th className="px-4 py-3 border-r border-gray-200">MOBILE</th>
                        <th className="px-4 py-3 border-r border-gray-200">REF</th>
                        <th className="px-4 py-3 border-r border-gray-200">STATUS</th>
                        <th className="px-4 py-3 border-r border-gray-200">AMOUNT</th>
                        <th className="px-4 py-3 border-r border-gray-200">COMMISSION</th>
                        <th className="px-4 py-3 border-r border-gray-200">OPENING</th>
                        <th className="px-4 py-3 border-r border-gray-200">CLOSING</th>
                        <th className="px-4 py-3 border-r border-gray-200">CREATED AT</th>
                        <th className="px-4 py-3">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-3 border-r border-gray-200">144</td>
                        <td className="px-4 py-3 border-r border-gray-200">8306577691</td>
                        <td className="px-4 py-3 border-r border-gray-200">P25021317462A2FDCZ</td>
                        <td className="px-4 py-3 border-r border-gray-200 text-left">AePS debit transactions are disabled by customer bank</td>
                        <td className="px-4 py-3 border-r border-gray-200">500.00</td>
                        <td className="px-4 py-3 border-r border-gray-200">₹0.00</td>
                        <td className="px-4 py-3 border-r border-gray-200">₹0.00</td>
                        <td className="px-4 py-3 border-r border-gray-200">₹0.00</td>
                        <td className="px-4 py-3 border-r border-gray-200">2025-02-13 17:46:25</td>
                        <td className="px-4 py-3">
                          <button className="px-2 py-1 bg-[#6b66ff] text-white rounded text-[10px] hover:bg-blue-600">Download</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-xs text-gray-500 pt-1">Showing 1 to 1 of 1 entries</div>
              </div>
            </div>
          )}

          {/* Placeholders for other tabs */}
          {!['WITHDRAW', 'BALANCE_ENQUIRY', 'MINI_STATEMENT', 'OUTLET_STATUS', 'HISTORY'].includes(activeTab) && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center text-gray-500">
              Content for {tabs.find(t => t.id === activeTab)?.label} will appear here.
            </div>
          )}
        </div>

        {/* Right Sidebar (Latest Transactions) - Hidden on History Tab for full width */}
        {activeTab !== 'HISTORY' && (
          <div className="w-full lg:w-80 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <h3 className="font-bold text-gray-700 text-sm">Latest Transactions</h3>
            </div>
            
            {/* Transaction Item */}
            <div className="border-b border-gray-200 pb-3 flex justify-between items-start">
              <div>
                <div className="font-bold text-blue-500 text-sm">₹500.00</div>
                <div className="text-[10px] text-gray-400 mt-1">13 Feb 2025, 05:46 PM</div>
              </div>
              <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded w-16 text-center">
                FAIL ✖
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Aeps;
