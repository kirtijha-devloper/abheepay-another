import React, { useState } from 'react';

const BankVerification = () => {
  const [activeTab, setActiveTab] = useState('VERIFY_BANK_ACCOUNT');

  const tabs = [
    { id: 'BANK_LIST', label: 'BANK LIST' },
    { id: 'VERIFY_BANK_ACCOUNT', label: 'VERIFY BANK ACCOUNT' },
    { id: 'VERIFY_UPI_HANDLE', label: 'VERIFY UPI HANDLE (VPA)' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Navigation Bar */}
      <div className="bg-gray-100 border-b border-gray-200 px-6 py-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-gray-500 font-medium text-sm">Merchant Onboarding</h1>
        <ul className="flex overflow-x-auto gap-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-bold whitespace-nowrap rounded ${
                  activeTab === tab.id
                    ? 'text-gray-900 bg-gray-200/50'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6">
        {/* Main Content Area */}
        
        {activeTab === 'VERIFY_BANK_ACCOUNT' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mx-auto max-w-xl mt-8">
            <div className="p-8">
              <h2 className="text-xl font-bold text-slate-600 text-center mb-8">
                Verify Bank Account
              </h2>
              
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  />
                </div>

                {/* Account Number */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Account Number:
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  />
                </div>

                {/* Bank IFSC */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Bank IFSC:
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  />
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button className="w-full py-2.5 bg-[#6b66ff] text-white font-medium rounded hover:bg-blue-600 transition-colors text-sm">
                    Verify Bank Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bank List */}
        {activeTab === 'BANK_LIST' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-6 w-full max-w-7xl mx-auto">
            <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500 bg-white">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
                <span>entries per page</span>
              </div>
              <div className="w-full sm:w-auto flex justify-end">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm w-full sm:w-64"
                />
              </div>
            </div>

            <div className="overflow-x-auto border-t border-gray-200">
              <table className="w-full text-xs text-center text-gray-700">
                <thead className="text-[10px] font-bold text-gray-700 uppercase bg-white border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 border-r relative cursor-pointer hover:bg-gray-50 text-left">
                      BANK ID
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-[2px]">
                        <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-x-transparent border-gray-300"></div>
                        <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-x-transparent border-gray-300"></div>
                      </div>
                    </th>
                    <th className="px-4 py-3 border-r relative cursor-pointer hover:bg-gray-50">
                      NAME
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-[2px]">
                        <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-x-transparent border-gray-300"></div>
                        <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-x-transparent border-gray-300"></div>
                      </div>
                    </th>
                    <th className="px-4 py-3 border-r relative cursor-pointer hover:bg-gray-50">
                      IFSC GLOBAL
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-[2px]">
                        <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-x-transparent border-gray-300"></div>
                        <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-x-transparent border-gray-300"></div>
                      </div>
                    </th>
                    <th className="px-4 py-3 border-r relative cursor-pointer hover:bg-gray-50">
                      IMPS ENABLED
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-[2px]">
                        <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-x-transparent border-gray-300"></div>
                        <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-x-transparent border-gray-300"></div>
                      </div>
                    </th>
                    <th className="px-4 py-3 border-r relative cursor-pointer hover:bg-gray-50 shrink-0">
                      UPI ENABLED
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-[2px]">
                        <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-x-transparent border-gray-300"></div>
                        <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-x-transparent border-gray-300"></div>
                      </div>
                    </th>
                    <th className="px-4 py-3 relative cursor-pointer hover:bg-gray-50">
                      IMPS PENNY LESS
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-[2px]">
                        <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-x-transparent border-gray-300"></div>
                        <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-x-transparent border-gray-300"></div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    { id: '109005', name: 'State Bank of India', ifsc: 'SBIN0000001', imps: 'Yes', upi: 'No', pennyless: 'No' },
                    { id: '134157', name: 'INDIA POST PAYMENTS BANK', ifsc: 'IPOS0000001', imps: 'Yes', upi: 'No', pennyless: 'Yes' },
                    { id: '1', name: 'AIRTEL PAYMENTS BANK', ifsc: 'AIRP0000001', imps: 'Yes', upi: 'No', pennyless: 'Yes' },
                    { id: '130878', name: 'Axis Bank', ifsc: 'UTIB0000248', imps: 'Yes', upi: 'No', pennyless: 'No' },
                    { id: '11263', name: 'HDFC Bank', ifsc: 'HDFC0999999', imps: 'Yes', upi: 'No', pennyless: 'No' },
                    { id: '134125', name: 'UTTAR PRADESH GRAMIN BANK', ifsc: 'BARB0BUPGBX', imps: 'Yes', upi: 'No', pennyless: 'No' },
                    { id: '91606', name: 'UNION BANK OF INDIA', ifsc: 'UBIN0550451', imps: 'Yes', upi: 'No', pennyless: 'Yes' },
                    { id: '39287', name: 'BANK OF BARODA', ifsc: 'BARB0NEHRUP', imps: 'Yes', upi: 'No', pennyless: 'No' },
                    { id: '74984', name: 'Punjab National Bank', ifsc: 'PUNB0244200', imps: 'Yes', upi: 'No', pennyless: 'Yes' },
                    { id: '53201', name: 'CANARA BANK', ifsc: 'CNRB0000002', imps: 'Yes', upi: 'No', pennyless: 'Yes' },
                  ].map((bank, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50/50">
                      <td className="px-4 py-3.5 border-r text-gray-800 font-medium text-left">{bank.id}</td>
                      <td className="px-4 py-3.5 border-r text-gray-500">{bank.name}</td>
                      <td className="px-4 py-3.5 border-r text-gray-500">{bank.ifsc}</td>
                      <td className="px-4 py-3.5 border-r text-gray-500">{bank.imps}</td>
                      <td className="px-4 py-3.5 border-r text-gray-500">{bank.upi}</td>
                      <td className="px-4 py-3.5 text-gray-500">{bank.pennyless}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="text-[10px] font-bold text-gray-700 uppercase bg-white border-t border-gray-200">
                  <tr>
                    <td className="px-4 py-3 border-r text-left">BANK ID</td>
                    <td className="px-4 py-3 border-r text-left">NAME</td>
                    <td className="px-4 py-3 border-r">IFSC GLOBAL</td>
                    <td className="px-4 py-3 border-r">IMPS ENABLED</td>
                    <td className="px-4 py-3 border-r">UPI ENABLED</td>
                    <td className="px-4 py-3">IMPS PENNY LESS</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="p-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
              <div>Showing 1 to 10 of 729 entries</div>
              <div className="flex border border-gray-300 rounded overflow-hidden">
                <button className="px-3 py-1.5 bg-gray-200 border-r border-gray-300 text-gray-600 hover:bg-gray-300 font-medium">1</button>
                <button className="px-3 py-1.5 bg-white border-r border-gray-300 text-blue-600 hover:bg-gray-50">2</button>
                <button className="px-3 py-1.5 bg-white border-r border-gray-300 text-blue-600 hover:bg-gray-50">3</button>
                <button className="px-3 py-1.5 bg-white border-r border-gray-300 text-blue-600 hover:bg-gray-50">4</button>
                <button className="px-3 py-1.5 bg-white border-r border-gray-300 text-blue-600 hover:bg-gray-50">5</button>
                <button className="px-3 py-1.5 bg-white border-r border-gray-300 text-blue-600 hover:bg-gray-50">6</button>
                <button className="px-3 py-1.5 bg-white border-r border-gray-300 text-blue-600 hover:bg-gray-50">7</button>
                <span className="px-3 py-1.5 bg-white border-r border-gray-300 text-gray-400">...</span>
                <button className="px-3 py-1.5 bg-white border-r border-gray-300 text-blue-600 hover:bg-gray-50">73</button>
                <button className="px-3 py-1.5 bg-white text-blue-600 hover:bg-gray-50 font-bold">&rsaquo;</button>
              </div>
            </div>
          </div>
        )}

        {/* Verify UPI Handle */}
        {activeTab === 'VERIFY_UPI_HANDLE' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mx-auto max-w-xl mt-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-slate-600 text-center mb-8">
                Verify UPI
              </h2>
              
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* UPI Id */}
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    UPI Id:
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button className="w-full py-2.5 bg-[#6b66ff] text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                    Verify Bank Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Placeholders for other tabs */}
        {!['VERIFY_BANK_ACCOUNT', 'BANK_LIST', 'VERIFY_UPI_HANDLE'].includes(activeTab) && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center text-gray-500 max-w-xl mx-auto mt-8">
            Content for {tabs.find(t => t.id === activeTab)?.label} will appear here.
          </div>
        )}
      </div>
    </div>
  );
};

export default BankVerification;
