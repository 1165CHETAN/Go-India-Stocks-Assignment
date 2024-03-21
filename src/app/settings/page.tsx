/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import React from "react";

export default function SettingsPage() {
  return (
    <div>
   
    <div className="flex items-center justify-center h-full mt-10">
    <img
          width={200}
          height={200}
          src={`https://api.dicebear.com/8.x/personas/svg?seed=Abby`}
          alt="avatar"
        />
      <div className="bg-violet-50 p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Hey👋</h1>
        <p className="text-gray-700 mt-2">I am Chetan. I am here to crack the code on your assignments! Dive in and explore the README for all the details you need. Let make this journey enlightening!!</p>
        
      </div>
    </div>
    </div>
  );
}
