import React from 'react';
import { ChevronRight } from 'lucide-react';

const AddUser = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Add New User</h1>
        <div className="flex items-center text-sm text-gray-500">
          <span>Dashboard</span>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-gray-400">Add User</span>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
        <form className="space-y-6">

          {/* Role */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-600 appearance-none bg-white">
              <option value="">Select Role</option>
              <option value="retailer">Retailer</option>
              <option value="distributor">Distributor</option>
            </select>
          </div>

          {/* Name */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" placeholder="Enter Name" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400" />
          </div>

          {/* Shop Name */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Shop Name</label>
            <input type="text" placeholder="Enter Shop Name" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400" />
          </div>

          {/* Mobile No */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Mobile No (as per Aadhar Link)</label>
            <input type="text" placeholder="Enter Mobile Number" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400" />
          </div>

          {/* Email Id */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Email Id</label>
            <input type="email" placeholder="Enter Email" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400" />
          </div>

          {/* Address */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Address (As per Aadhar)</label>
            <textarea placeholder="Enter Full Address" rows="3" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400 resize-none"></textarea>
          </div>

          {/* City */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input type="text" placeholder="Enter City" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400" />
          </div>

          {/* State */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">State</label>
            <input type="text" placeholder="Enter State" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400" />
          </div>

          {/* Pin */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Pin</label>
            <input type="text" placeholder="Enter Pin Code" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400" />
          </div>

          {/* Aadhar No */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Aadhar No</label>
            <input type="text" placeholder="Enter Aadhar Number" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400" />
          </div>

          {/* Aadhar Front Page Upload */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Aadhar Front Page Upload</label>
            <div className="flex border border-gray-300 rounded-md overflow-hidden bg-gray-50">
              <input type="file" id="aadharFront" className="hidden" />
              <label htmlFor="aadharFront" className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 border-r border-gray-300 cursor-pointer text-sm font-medium whitespace-nowrap">Choose File</label>
              <span className="px-4 py-2.5 text-gray-500 text-sm truncate flex-1 flex items-center bg-white">No file chosen</span>
            </div>
          </div>

          {/* Aadhar Back Page Upload */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Aadhar Back Page Upload</label>
            <div className="flex border border-gray-300 rounded-md overflow-hidden bg-gray-50">
              <input type="file" id="aadharBack" className="hidden" />
              <label htmlFor="aadharBack" className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 border-r border-gray-300 cursor-pointer text-sm font-medium whitespace-nowrap">Choose File</label>
              <span className="px-4 py-2.5 text-gray-500 text-sm truncate flex-1 flex items-center bg-white">No file chosen</span>
            </div>
          </div>

          {/* Pan No */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Pan No</label>
            <input type="text" placeholder="Enter Pan Number" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400" />
          </div>

          {/* Pan Image Upload */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Pan Image Upload</label>
            <div className="flex border border-gray-300 rounded-md overflow-hidden bg-gray-50">
              <input type="file" id="panImage" className="hidden" />
              <label htmlFor="panImage" className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 border-r border-gray-300 cursor-pointer text-sm font-medium whitespace-nowrap">Choose File</label>
              <span className="px-4 py-2.5 text-gray-500 text-sm truncate flex-1 flex items-center bg-white">No file chosen</span>
            </div>
          </div>

          {/* Account No */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Account No</label>
            <input type="text" placeholder="Enter Account Number" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400" />
          </div>

          {/* IFSC Code */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">IFSC Code</label>
            <input type="text" placeholder="Enter IFSC Code" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400" />
          </div>

          {/* Bank Name */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Bank Name</label>
            <input type="text" placeholder="Enter Bank Name" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400" />
          </div>

          {/* Bank Document Upload */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Bank Document Upload (Passbook, Cheque, or Statement)</label>
            <div className="flex border border-gray-300 rounded-md overflow-hidden bg-gray-50">
              <input type="file" id="bankDoc" className="hidden" />
              <label htmlFor="bankDoc" className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 border-r border-gray-300 cursor-pointer text-sm font-medium whitespace-nowrap">Choose File</label>
              <span className="px-4 py-2.5 text-gray-500 text-sm truncate flex-1 flex items-center bg-white">No file chosen</span>
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" placeholder="Enter Password" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400" />
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" placeholder="Confirm Password" className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 placeholder-gray-400" />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddUser;
