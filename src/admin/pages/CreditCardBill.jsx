import React from 'react';

const CreditCardBill = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mt-8">
        {/* Header */}
        <div className="bg-[#1ccb9e] py-6 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Credit Card Bill Payment
          </h2>
        </div>
        
        {/* Form Body */}
        <div className="p-8 space-y-6">
          
          {/* Select Bank Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              SELECT BANK NAME
            </label>
            <select className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-500 bg-white">
              <option>--Select Bank --</option>
              {/* Add real bank options here as needed */}
              <option>State Bank of India</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
            </select>
          </div>

          {/* Last 4 Digits */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              ENTER LAST 4 DIGIT OF CREDIT CARD NUMBER
            </label>
            <input
              type="text"
              maxLength="4"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
              ENTER MOBILE NUMBER LINKED TO THIS CREDIT CARD
            </label>
            <input
              type="text"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button className="px-6 py-2 bg-[#6b66ff] text-white font-medium rounded-md hover:bg-blue-600 transition-colors text-sm">
              Fetch Bill
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreditCardBill;
