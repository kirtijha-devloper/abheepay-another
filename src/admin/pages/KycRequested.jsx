import React from 'react';
import { kycsData } from '../data/mockData';

const KycRequested = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Breadcrumb Area */}
      <div className="text-sm font-medium text-gray-500 mb-6 bg-white p-4 rounded-md shadow-sm border border-gray-100 pb-20">
        <span className="text-gray-400">Home</span> <span className="mx-2">/</span> <span className="text-gray-500">Outlet List</span>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 mt-[-60px] relative z-10 mx-4 md:mx-0">

        {/* Controls Header */}
        <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-100">
          <div className="flex items-center text-sm text-gray-600">
            <select className="border border-gray-300 rounded px-2 py-1.5 mr-2 focus:outline-none focus:border-blue-500 bg-white">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span>entries per page</span>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center">
            <thead className="bg-white text-gray-800 font-bold border-b border-gray-200 uppercase text-[11px] tracking-wide">
              <tr>
                <th className="px-4 py-4 cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center justify-center">
                    OUTLET ID
                    <div className="ml-1 flex flex-col text-[8px] text-gray-400">
                      <span>▲</span><span>▼</span>
                    </div>
                  </div>
                </th>
                <th className="px-4 py-4 cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center justify-center">
                    NAME
                    <div className="ml-1 flex flex-col text-[8px] text-gray-400">
                      <span>▲</span><span>▼</span>
                    </div>
                  </div>
                </th>
                <th className="px-4 py-4 cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center justify-center">
                    MOBILE
                    <div className="ml-1 flex flex-col text-[8px] text-gray-400">
                      <span>▲</span><span>▼</span>
                    </div>
                  </div>
                </th>
                <th className="px-4 py-4 cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center justify-center">
                    EMAIL
                    <div className="ml-1 flex flex-col text-[8px] text-gray-400">
                      <span>▲</span><span>▼</span>
                    </div>
                  </div>
                </th>
                <th className="px-4 py-4 cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center justify-center">
                    PAN
                  </div>
                </th>
                <th className="px-4 py-4 cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center justify-center">
                    ACCOUNT NO
                  </div>
                </th>
                <th className="px-4 py-4 cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center justify-center">
                    KYC STATUS
                    <div className="ml-1 flex flex-col text-[8px] text-gray-400">
                      <span>▲</span><span>▼</span>
                    </div>
                  </div>
                </th>
                <th className="px-4 py-4 cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center justify-center">
                    LAST ACTIVITY DATE
                    <div className="ml-1 flex flex-col text-[8px] text-gray-400">
                      <span>▲</span><span>▼</span>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {kycsData.map((row, index) => (
                <tr key={index} className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors ${index % 2 === 0 ? 'bg-blue-50/30' : 'bg-white'}`}>
                  <td className="px-4 py-4 text-gray-600 font-medium">{row.id}</td>
                  <td className="px-4 py-4 text-gray-800">{row.name}</td>
                  <td className="px-4 py-4 text-gray-600">{row.mobile}</td>
                  <td className="px-4 py-4 text-gray-600">{row.email}</td>
                  <td className="px-4 py-4 text-gray-600">{row.pan}</td>
                  <td className="px-4 py-4 text-gray-600 text-xs">
                    <div>Account No:</div>
                    <div className="font-medium text-gray-800">{row.accountNo}</div>
                    <div className="text-gray-500">IFSC: {row.ifsc}</div>
                  </td>
                  <td className="px-4 py-4 text-gray-800">{row.kycStatus}</td>
                  <td className="px-4 py-4 text-gray-600 text-xs">
                    <div>{row.date}</div>
                    <div>{row.time}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KycRequested;
