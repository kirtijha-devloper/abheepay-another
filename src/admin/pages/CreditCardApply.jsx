import React, { useState } from 'react';

const CreditCardApply = () => {
  const [activeTab, setActiveTab] = useState('APPLY');

  const tabs = [
    { id: 'APPLY', label: 'Apply' },
    { id: 'HISTORY', label: 'HISTORY' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Navigation Bar */}
      <div className="bg-gray-100 border-b border-gray-200">
        <ul className="flex overflow-x-auto px-4 md:px-6">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-3 text-xs font-bold whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-gray-900 border-b-2 border-slate-400'
                    : 'text-gray-500 hover:text-gray-800'
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
        
        {activeTab === 'APPLY' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mx-auto max-w-2xl mt-8">
            {/* Header */}
            <div className="bg-[#8cc63f] py-4 text-center">
              <h2 className="text-[17px] font-medium text-gray-900">
                Apply for Credit Card
              </h2>
            </div>
            
            <div className="p-8 space-y-5">
              
              {/* Name */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  PHONE NUMBER <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  PINCODE
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>

              {/* PAN Number */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  PAN NUMBER <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>

              {/* Select Bank */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  SELECT BANK <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="HSBC Visa Platinum Card"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm text-gray-500"
                />
              </div>

              {/* Retailer Name */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  RETAILER NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="prahlad aryans"
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded text-sm bg-gray-100 text-gray-500 cursor-not-allowed"
                />
              </div>

              {/* Retailer Username */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
                  RETAILER USERNAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="APR887746"
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded text-sm bg-gray-100 text-gray-500 cursor-not-allowed"
                />
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button className="w-full py-2 bg-[#6b66ff] text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors">
                  Submit Application
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Placeholders for other tabs */}
        {activeTab !== 'APPLY' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center text-gray-500 max-w-2xl mx-auto mt-8">
            Content for {tabs.find(t => t.id === activeTab)?.label} will appear here.
          </div>
        )}
      </div>
    </div>
  );
};

export default CreditCardApply;
