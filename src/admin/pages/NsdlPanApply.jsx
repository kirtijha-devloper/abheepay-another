import React, { useState } from 'react';

const NsdlPanApply = () => {
  const [activeTab, setActiveTab] = useState('NEW_PAN_CARD');

  const tabs = [
    { id: 'PAN', label: 'PAN' },
    { id: 'NEW_PAN_CARD', label: 'NEW PAN CARD' },
    { id: 'PAN_CARD_CORRECTION', label: 'PAN CARD CORRECTION' },
    { id: 'CHEAK_STATUS_PAN', label: 'CHEAK STATUS PAN' },
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
                    ? 'text-gray-900 border-b-2 border-gray-800'
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
        
        {activeTab === 'NEW_PAN_CARD' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mx-auto max-w-4xl mt-8">
            {/* Header */}
            <div className="bg-[#8cc63f] py-6 text-center">
              <h2 className="text-xl font-medium text-gray-900">
                Submit New PAN Card Request
              </h2>
            </div>
            
            <div className="p-6 space-y-6">
              
              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide">
                  MOBILE NUMBER <span className="text-red-500">*</span>
                </label>
                <div className="flex border border-gray-300 rounded-md overflow-hidden bg-white mt-1 group focus-within:ring-1 focus-within:ring-[#8cc63f] focus-within:border-[#8cc63f]">
                  <span className="bg-gray-50 px-3 py-2.5 border-r border-gray-200 text-gray-400 font-bold block min-w-[40px]">
                    {/* Empty block to match the image UI prefix style */}
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your 10-digit mobile number"
                    className="w-full px-4 py-2.5 text-sm text-gray-600 focus:outline-none"
                  />
                </div>
                <p className="text-[10px] text-gray-400 mt-1">Required for verification purposes.</p>
              </div>

              {/* Mode */}
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide">
                  MODE <span className="text-red-500">*</span>
                </label>
                <div className="flex border border-gray-300 rounded-md overflow-hidden bg-white mt-1 group focus-within:ring-1 focus-within:ring-[#8cc63f] focus-within:border-[#8cc63f]">
                   <span className="bg-gray-50 px-3 py-2.5 border-r border-gray-200 text-gray-400 block min-w-[40px]">
                    {/* Empty block to match the image UI prefix style */}
                  </span>
                  <select className="w-full px-4 py-2.5 text-sm text-gray-600 focus:outline-none bg-white appearance-none">
                    <option>EKYC (PAN without signature)</option>
                    <option>Physical PAN</option>
                  </select>
                   <div className="flex items-center px-3 pointer-events-none text-gray-400">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                   </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 flex justify-center">
                <button className="px-8 py-2 bg-[#8cc63f] text-white text-sm font-medium rounded hover:bg-[#7cbd32] transition-colors">
                  Submit New PAN
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Placeholders for other tabs */}
        {activeTab !== 'NEW_PAN_CARD' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center text-gray-500 max-w-2xl mx-auto mt-8">
            Content for {tabs.find(t => t.id === activeTab)?.label} will appear here.
          </div>
        )}
      </div>
    </div>
  );
};

export default NsdlPanApply;
