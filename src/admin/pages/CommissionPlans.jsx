import React, { useState } from 'react';
import { commissionsData } from '../data/mockData';

const tabs = [
  'Commission List',
  'Map Commission List',
  'Distributor Commission Plan',
  'Service Fee Setup',
  'Payout Charges',
  'Add fund PG charges & commission',
  'API PG charges'
];

const CommissionPlans = () => {
  const [activeTab, setActiveTab] = useState('Commission List');

  return (
    <div className="space-y-6 max-w-7xl mx-auto">

      {/* Horizontal Nav Tabs */}
      <div className="bg-white border-b border-gray-200">
        <ul className="flex overflow-x-auto hide-scrollbar whitespace-nowrap text-sm font-medium text-center text-gray-500">
          {tabs.map((tab) => (
            <li key={tab} className="me-2">
              <button
                onClick={() => setActiveTab(tab)}
                className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === tab
                  ? 'text-blue-600 border-blue-600 bg-blue-50/50'
                  : 'border-transparent hover:text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                  }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Breadcrumb Area */}
      <div className="text-sm font-medium text-gray-500 px-2 mt-4">
        <span className="text-gray-400">Home</span> <span className="mx-2">/</span> <span className="text-gray-500">Commissions Plan</span>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        {/* Form Area */}
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-6 mb-8 pt-4">

          {/* Packages */}
          <div className="space-y-1 text-[11px] font-bold text-gray-800 uppercase tracking-wide">
            <label className="block mb-2">PACKAGES</label>
            <select className="w-full border border-gray-200 rounded px-3 py-2.5 text-gray-500 font-normal focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
              <option>--Select Packages--</option>
              <option>Retailer</option>
              <option>Distributor</option>
            </select>
          </div>

          {/* Service */}
          <div className="space-y-1 text-[11px] font-bold text-gray-800 uppercase tracking-wide">
            <label className="block mb-2">SERVICE</label>
            <select className="w-full border border-gray-200 rounded px-3 py-2.5 text-gray-500 font-normal focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
              <option>--Select a Service--</option>
              <option>AEPS</option>
              {/* <option>DMT</option> */}
            </select>
          </div>

          {/* From Amount */}
          <div className="space-y-1 text-[11px] font-bold text-gray-800 uppercase tracking-wide">
            <label className="block mb-2">FROM AMOUNT</label>
            <input type="text" placeholder="e.g., 0" className="w-full border border-gray-200 rounded px-3 py-2.5 text-gray-500 font-normal focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-300" />
          </div>

          {/* To Amount */}
          <div className="space-y-1 text-[11px] font-bold text-gray-800 uppercase tracking-wide">
            <label className="block mb-2">TO AMOUNT</label>
            <input type="text" placeholder="e.g., 1000" className="w-full border border-gray-200 rounded px-3 py-2.5 text-gray-500 font-normal focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-300" />
          </div>

          {/* Charge In */}
          <div className="space-y-1 text-[11px] font-bold text-gray-800 uppercase tracking-wide">
            <label className="block mb-2">CHARGE IN</label>
            <select className="w-full border border-gray-200 rounded px-3 py-2.5 text-gray-500 font-normal focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
              <option>--Select--</option>
              <option>Flat</option>
              <option>Percentage</option>
            </select>
          </div>

          {/* Charge */}
          <div className="space-y-1 text-[11px] font-bold text-gray-800 uppercase tracking-wide">
            <label className="block mb-2">CHARGE</label>
            <input type="text" placeholder="e.g., 50" className="w-full border border-gray-200 rounded px-3 py-2.5 text-gray-500 font-normal focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-300" />
          </div>

          {/* Commission In */}
          <div className="space-y-1 text-[11px] font-bold text-gray-800 uppercase tracking-wide">
            <label className="block mb-2">COMMISSION IN</label>
            <select className="w-full border border-gray-200 rounded px-3 py-2.5 text-gray-500 font-normal focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
              <option>--Select--</option>
              <option>Flat</option>
              <option>Percentage</option>
            </select>
          </div>

          {/* Commission */}
          <div className="space-y-1 text-[11px] font-bold text-gray-800 uppercase tracking-wide">
            <label className="block mb-2">COMMISSION</label>
            <input type="text" placeholder="e.g., 20" className="w-full border border-gray-200 rounded px-3 py-2.5 text-gray-500 font-normal focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-300" />
          </div>

          {/* TDS In */}
          <div className="space-y-1 text-[11px] font-bold text-gray-800 uppercase tracking-wide">
            <label className="block mb-2">TDS IN</label>
            <select className="w-full border border-gray-200 rounded px-3 py-2.5 text-gray-500 font-normal focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white">
              <option>--Select--</option>
              <option>Flat</option>
              <option>Percentage</option>
            </select>
          </div>

          {/* TDS */}
          <div className="space-y-1 text-[11px] font-bold text-gray-800 uppercase tracking-wide">
            <label className="block mb-2">TDS</label>
            <input type="text" placeholder="e.g., 10" className="w-full border border-gray-200 rounded px-3 py-2.5 text-gray-500 font-normal focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-300" />
          </div>

          {/* Buttons */}
          <div className="flex items-end gap-3 h-full pb-0.5 xl:col-span-2">
            <button type="button" className="bg-[#74d754] text-white hover:bg-[#68c14b] px-6 py-2 rounded font-medium text-sm transition-colors shadow-sm">
              Submit
            </button>
            <button type="button" className="bg-[#8b9ba8] text-white hover:bg-[#7b8a96] px-6 py-2 rounded font-medium text-sm transition-colors shadow-sm">
              Reset
            </button>
          </div>
        </form>

        {/* Table Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
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

        {/* Data Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-md">
          <table className="w-full text-sm text-center">
            <thead className="bg-[#F8F9FA] text-gray-800 font-bold border-b border-gray-200 uppercase text-[11px] tracking-wide">
              <tr>
                <th className="px-3 py-4 border-r border-gray-200">
                  <div className="flex justify-center items-center">
                    SL NO. <div className="ml-1 flex flex-col text-[8px] text-gray-400"><span>▲</span><span>▼</span></div>
                  </div>
                </th>
                <th className="px-3 py-4 border-r border-gray-200">
                  <div className="flex justify-center items-center">
                    PACKAGES <div className="ml-1 flex flex-col text-[8px] text-gray-400"><span>▲</span><span>▼</span></div>
                  </div>
                </th>
                <th className="px-3 py-4 border-r border-gray-200">SERVICE</th>
                <th className="px-3 py-4 border-r border-gray-200">SUB SERVICE</th>
                <th className="px-3 py-4 border-r border-gray-200">
                  <div className="flex justify-center items-center">
                    FROM AMOUNT <div className="ml-1 flex flex-col text-[8px] text-gray-400"><span>▲</span><span>▼</span></div>
                  </div>
                </th>
                <th className="px-3 py-4 border-r border-gray-200">
                  <div className="flex justify-center items-center">
                    TO AMOUNT <div className="ml-1 flex flex-col text-[8px] text-gray-400"><span>▲</span><span>▼</span></div>
                  </div>
                </th>
                <th className="px-3 py-4 border-r border-gray-200">CHARGE</th>
                <th className="px-3 py-4 border-r border-gray-200">COMMISSION</th>
                <th className="px-3 py-4 border-r border-gray-200">TDS</th>
                <th className="px-3 py-4 border-r border-gray-200">
                  <div className="flex justify-center items-center">
                    CHARGE IN <div className="ml-1 flex flex-col text-[8px] text-gray-400"><span>▲</span><span>▼</span></div>
                  </div>
                </th>
                <th className="px-3 py-4 border-r border-gray-200">
                  <div className="flex justify-center items-center">
                    COMMISSION IN <div className="ml-1 flex flex-col text-[8px] text-gray-400"><span>▲</span><span>▼</span></div>
                  </div>
                </th>
                <th className="px-3 py-4 border-r border-gray-200">
                  <div className="flex justify-center items-center">
                    TDS IN <div className="ml-1 flex flex-col text-[8px] text-gray-400"><span>▲</span><span>▼</span></div>
                  </div>
                </th>
                <th className="px-3 py-4">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {commissionsData.map((row) => (
                <tr key={row.id} className="border-b border-gray-200 bg-white">
                  <td className="px-3 py-6 border-r border-gray-200 text-gray-600 font-medium">{row.id}</td>
                  <td className="px-3 py-6 border-r border-gray-200 text-gray-600">{row.packages}</td>
                  <td className="px-3 py-6 border-r border-gray-200 text-gray-600">{row.service}</td>
                  <td className="px-3 py-6 border-r border-gray-200 text-gray-600">{row.subService}</td>
                  <td className="px-3 py-6 border-r border-gray-200 text-gray-800">{row.fromAmount}</td>
                  <td className="px-3 py-6 border-r border-gray-200 text-gray-800">{row.toAmount}</td>
                  <td className="px-3 py-6 border-r border-gray-200 text-gray-600">{row.charge}</td>
                  <td className="px-3 py-6 border-r border-gray-200 text-gray-600">{row.commission}</td>
                  <td className="px-3 py-6 border-r border-gray-200 text-gray-600">{row.tds}</td>
                  <td className="px-3 py-6 border-r border-gray-200 text-gray-600">{row.chargeIn}</td>
                  <td className="px-3 py-6 border-r border-gray-200 text-gray-600">{row.commissionIn}</td>
                  <td className="px-3 py-6 border-r border-gray-200 text-gray-600">{row.tdsIn}</td>
                  <td className="px-3 py-6">
                    <div className="flex flex-col gap-1 items-center justify-center h-full">
                      <button className="bg-[#FCC419] hover:bg-[#eab308] text-white text-[10px] font-bold px-3 py-1 rounded w-16 transition-colors shadow-[0_2px_4px_rgba(252,196,25,0.4)]">
                        Edit
                      </button>
                      <button className="bg-[#FA5252] hover:bg-[#ef4444] text-white text-[10px] font-bold px-3 py-1 rounded w-16 transition-colors shadow-[0_2px_4px_rgba(250,82,82,0.4)]">
                        Delete
                      </button>
                    </div>
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

export default CommissionPlans;
