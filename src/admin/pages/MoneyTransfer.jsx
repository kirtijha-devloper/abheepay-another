import React, { useState } from 'react';
import { User, CheckCircle } from 'lucide-react';

const MoneyTransfer = () => {
  const [activeTab, setActiveTab] = useState('REMITTER_REGISTER');

  const tabs = [
    { id: 'BANK_LIST', label: 'BANK LIST' },
    { id: 'REMITTER_REGISTER', label: 'REMITTER REGISTER' },
    { id: 'HISTORY', label: 'HISTORY' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Navigation Tabs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <ul className="flex overflow-x-auto px-4">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-xs font-bold whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`p-6 mx-auto mt-4 ${activeTab === 'HISTORY' ? 'w-full' : 'max-w-4xl'}`}>
        {/* Main Content Area */}
        
        {activeTab === 'REMITTER_REGISTER' && (
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden mx-auto max-w-2xl">
            {/* Header */}
            <div className="bg-[#8cc63f] py-4 text-center flex items-center justify-center gap-2">
              <User className="w-5 h-5 text-gray-900" />
              <h2 className="text-lg font-medium text-gray-900">
                Remitter Profile
              </h2>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                  MOBILE NO
                </label>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8cc63f] text-sm text-gray-600"
                />
              </div>

              {/* Action Button */}
              <div>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-[#8cc63f] text-white font-medium rounded-md hover:bg-[#7cbd32] transition-colors text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'HISTORY' && (
          <div className="space-y-6">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-end max-w-4xl">
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-600 mb-1">Start Date</label>
                <input type="datetime-local" className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-500 bg-white" />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-600 mb-1">End Date</label>
                <input type="datetime-local" className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-500 bg-white" />
              </div>
              <button className="px-10 py-2 bg-[#6b66ff] text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors">
                Filter
              </button>
            </div>

            {/* Transaction List Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full max-w-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h2 className="text-xl font-medium text-gray-800">Transaction List</h2>
                <button className="px-4 py-1.5 bg-[#8cc63f] text-white text-sm font-medium rounded hover:bg-[#7cbd32] transition-colors">
                  Export to Excel
                </button>
              </div>
              
              <div className="p-4 overflow-x-auto">
                <table className="w-full text-center text-xs text-gray-700">
                  <thead className="bg-white border text-[10px] font-bold uppercase text-gray-600">
                    <tr>
                      <th className="px-4 py-3 border-r font-semibold">ID</th>
                      <th className="px-4 py-3 border-r font-semibold">MOBILE</th>
                      <th className="px-4 py-3 border-r font-semibold">RRN</th>
                      <th className="px-4 py-3 border-r font-semibold">STATUS</th>
                      <th className="px-4 py-3 border-r font-semibold">AMOUNT</th>
                      <th className="px-4 py-3 border-r font-semibold">CHARGES</th>
                      <th className="px-4 py-3 border-r font-semibold">COMMISSION</th>
                      <th className="px-4 py-3 border-r font-semibold">TDS</th>
                      <th className="px-4 py-3 border-r font-semibold">OPENING</th>
                      <th className="px-4 py-3 border-r font-semibold">CLOSING</th>
                      <th className="px-4 py-3 font-semibold relative pr-6">
                        CREATED AT
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-[2px]">
                          <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-x-transparent border-gray-400"></div>
                          <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-x-transparent border-gray-400"></div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Empty state or rows could go here */}
                    <tr>
                      <td colSpan="11" className="p-4 text-gray-500 border-x border-b">No transactions found</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Placeholders for other tabs */}
        {!['REMITTER_REGISTER', 'HISTORY'].includes(activeTab) && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center text-gray-500 max-w-2xl mx-auto">
            Content for {tabs.find(t => t.id === activeTab)?.label} will appear here.
          </div>
        )}
      </div>
    </div>
  );
};

export default MoneyTransfer;
