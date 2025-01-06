import React from "react";
import { CgProfile } from "react-icons/cg";
export default function Header() {
  return (
    <div className="bg-gray-800 p-4 items-center flex justify-between">
      <h1 className="text-white text-2xl">Welcome to Our Site</h1>
      <nav className="mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
          Sign In
        </button>
        <button className="bg-grey-500 text-white py-2 px-4 rounded">
          Sign Up
        </button>
        <button className="bg-gray-800 text-white py-2 px-8 rounded ml-2">
          <CgProfile />
        </button>
      </nav>
    </div>
  );
}
