import React, { useState } from 'react';

const FundRequest = () => {
  const [formData, setFormData] = useState({
    bankAccount: '',
    amount: '',
    transactionId: '',
    date: '',
    modeOfTransaction: '',
    remark: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to submit the form data
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#8cc63f] py-3 text-center">
          <h2 className="text-lg font-bold">
            <span className="text-red-500">Add</span> <span className="text-blue-600">Money</span>
          </h2>
        </div>

        {/* Form Body */}
        <div className="p-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Bank Account */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 uppercase text-[10px] tracking-wider">
                Select Bank Account
              </label>
              <select
                name="bankAccount"
                value={formData.bankAccount}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-500 bg-white"
              >
                <option value="">Select a Bank</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
              </select>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 uppercase text-[10px] tracking-wider">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter the amount"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
              />
            </div>

            {/* Transaction ID */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 uppercase text-[10px] tracking-wider">
                Transaction ID/UTR
              </label>
              <input
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
                placeholder="Enter Transaction ID/UTR"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 uppercase text-[10px] tracking-wider">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-500"
              />
            </div>

            {/* Mode of Transaction */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 uppercase text-[10px] tracking-wider">
                Mode of Transaction
              </label>
              <select
                name="modeOfTransaction"
                value={formData.modeOfTransaction}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-500 bg-white"
              >
                <option value="">Select Mode</option>
                <option value="neft">NEFT</option>
                <option value="rtgs">RTGS</option>
                <option value="imps">IMPS</option>
                <option value="upi">UPI</option>
                <option value="cash_deposit">Cash Deposit</option>
              </select>
            </div>

            {/* Slip Images */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 uppercase text-[10px] tracking-wider">
                Slip Images (You can select multiple files)
              </label>
              <div className="flex border border-gray-300 rounded-md overflow-hidden bg-white text-sm">
                <label className="px-3 py-2 bg-gray-50 border-r border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer">
                  Choose Files
                  <input type="file" multiple className="hidden" />
                </label>
                <div className="px-3 py-2 text-gray-500 flex-1">
                  No file chosen
                </div>
              </div>
              <p className="text-[10px] text-gray-400 mt-1">Upload up to 10 files.</p>
            </div>

            {/* Remark */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 uppercase text-[10px] tracking-wider">
                Remark
              </label>
              <input
                type="text"
                name="remark"
                value={formData.remark}
                onChange={handleChange}
                placeholder="Any remarks (optional)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-1">
              <button
                type="submit"
                className="px-6 py-2 bg-[#8cc63f] text-white font-medium rounded-md hover:bg-[#7cbd32] transition-colors text-sm"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default FundRequest;
