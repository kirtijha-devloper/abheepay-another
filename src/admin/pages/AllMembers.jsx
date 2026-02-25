import React from 'react';
import {
  Users,
  UserPlus,
  Search,
  X,
  MoreVertical,
  LogOut,
  Edit,
  Percent,
  TrendingUp,
  List,
  Download,
  Trash2,
  CheckCircle2,
  XCircle,
  Phone
} from 'lucide-react';
import { allMembersData } from '../data/mockData';

const AllMembers = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center text-white shadow-sm">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="bg-white/20 p-3 rounded-lg">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">User Management</h1>
            <p className="text-indigo-100 mt-1">Manage all registered users, distributors & retailers</p>
          </div>
        </div>
        <button className="bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-md font-medium flex items-center border border-white/30">
          <UserPlus className="w-4 h-4 mr-2" />
          Add New User
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

        {/* Total Users */}
        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-3 text-indigo-500">
            <Users className="w-6 h-6" />
          </div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Total Users</p>
          <h3 className="text-xl font-bold text-gray-800">583</h3>
          <p className="text-xs text-gray-500 mt-1">₹1,225,841.03</p>
        </div>

        {/* Distributors */}
        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mb-3 text-pink-500">
            <UserPlus className="w-6 h-6" />
          </div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Distributors</p>
          <h3 className="text-xl font-bold text-gray-800">85</h3>
          <p className="text-xs text-gray-500 mt-1">₹26,021.85</p>
        </div>

        {/* Retailers */}
        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3 text-blue-500">
            <Users className="w-6 h-6" />
          </div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Retailers</p>
          <h3 className="text-xl font-bold text-gray-800">498</h3>
          <p className="text-xs text-gray-500 mt-1">₹1,199,819.18</p>
        </div>

        {/* Active */}
        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-3 text-green-500">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Active</p>
          <h3 className="text-xl font-bold text-gray-800">558</h3>
        </div>

        {/* Deactivated */}
        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-3 text-orange-500">
            <XCircle className="w-6 h-6" />
          </div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Deactivated</p>
          <h3 className="text-xl font-bold text-gray-800">25</h3>
        </div>

      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-4">

        {/* Search */}
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Search</label>
          <input
            type="text"
            placeholder="Name, phone, or username..."
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Role Select */}
        <div className="w-full lg:w-48">
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Role</label>
          <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-600 bg-white">
            <option>All Roles</option>
            <option>Retailer</option>
            <option>Distributor</option>
          </select>
        </div>

        {/* Status Select */}
        <div className="w-full lg:w-48">
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Status</label>
          <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-600 bg-white">
            <option>All Status</option>
            <option>Active</option>
            <option>Deactivated</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex items-end gap-2 shrink-0">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md font-medium flex items-center text-sm transition-colors">
            <Search className="w-4 h-4 mr-2" />
            Search
          </button>
          <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 px-4 py-2 rounded-md font-medium flex items-center text-sm transition-colors">
            <X className="w-4 h-4 mr-2" />
            Clear
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">

        {/* Table Header Area */}
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800 flex items-center">
            <List className="w-5 h-5 mr-2 text-gray-500" />
            User List
          </h2>
          <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-md">583 USERS</span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="text-xs text-black uppercase bg-white border-b-2 border-black font-bold">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">USER DETAILS</th>
                <th className="px-6 py-4 text-center">ROLE</th>
                <th className="px-6 py-4 text-center">BALANCE</th>
                <th className="px-6 py-4 text-center">KYC STATUS</th>
                <th className="px-6 py-4 text-center">STATUS</th>
                <th className="px-6 py-4">JOINED</th>
                <th className="px-6 py-4 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {allMembersData.map((user, index) => (
                <tr key={index} className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors">

                  {/* ID */}
                  <td className="px-6 py-5 text-gray-500 font-medium">
                    {user.id}
                  </td>

                  {/* User Details */}
                  <td className="px-6 py-5">
                    <div className="font-bold text-gray-800 text-sm mb-1">{user.name}</div>
                    <div className="flex items-center text-gray-500 text-xs mb-1">
                      <UserPlus className="w-3 h-3 mr-1" />
                      {user.username}
                    </div>
                    <div className="flex items-center text-indigo-500 text-xs font-medium">
                      <Phone className="w-3 h-3 mr-1" />
                      {user.phone}
                    </div>
                  </td>

                  {/* Role */}
                  <td className="px-6 py-5 text-center">
                    <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-sm border border-indigo-100">
                      {user.role}
                    </span>
                  </td>

                  {/* Balance */}
                  <td className="px-6 py-5 text-center font-bold text-gray-800">
                    {user.balance}
                  </td>

                  {/* KYC Status */}
                  <td className="px-6 py-5 text-center">
                    <div className="inline-flex items-center justify-center bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-sm border border-green-200 mb-1 leading-tight">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Verified
                    </div>
                    <div className="text-[10px] text-gray-400 font-medium tracking-wide">
                      PIN: {user.pin}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5 text-center">
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full inline-block">
                      {user.status}
                    </span>
                  </td>

                  {/* Joined Date */}
                  <td className="px-6 py-5">
                    <div className="text-gray-800 font-medium text-sm">{user.joinedDate}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{user.joinedTimeAgo}</div>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-1.5">
                      <button className="p-1.5 text-blue-500 hover:bg-blue-50 border border-blue-200 rounded transition-colors" title="Login as User">
                        <LogOut className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-500 flex items-center justify-center hover:bg-gray-100 border border-gray-200 rounded transition-colors" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-cyan-500 flex items-center justify-center hover:bg-cyan-50 border border-cyan-200 rounded transition-colors" title="Commission">
                        <Percent className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-yellow-500 flex items-center justify-center hover:bg-yellow-50 border border-yellow-200 rounded transition-colors" title="Upgrade">
                        <TrendingUp className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-600 flex items-center justify-center hover:bg-gray-100 border border-gray-200 rounded transition-colors" title="Details">
                        <List className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-green-500 flex items-center justify-center hover:bg-green-50 border border-green-200 rounded transition-colors" title="Download">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-blue-500 flex items-center justify-center hover:bg-blue-50 border border-blue-200 rounded transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
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

export default AllMembers;
