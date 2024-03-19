import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";

function ProfileSetup() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-200">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-md flex">
        <div className="flex-none w-32 mr-4">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center text-center">
            <MdOutlineFileUpload size={54} className="mx-auto" />
          </div>
          <button className="mt-2 w-full px-3 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Upload
          </button>
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl bg-font-semibold mb-4">Profile Setup</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="first-name" className="block font-medium">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="Lucia"
                className="w-full px-4 py-2 rounded-md border border-orange-300 focus:outline-none focus:border-black-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name" className="block font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="Onyedikachi"
                className="border border-orange-300 rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="block font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="onyedikachilucia726@gmail.com"
                className="border border-orange-300 rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="role" className="block font-medium">
                Role in Organization
              </label>
              <input
                type="text"
                id="role"
                placeholder="DEO"
                className="border border-orange-300 rounded-md px-1 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="block font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="08028614299"
                className="border border-orange-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetup;
