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
          src={`https://api.dicebear.com/8.x/personas/svg?seed=Bella`}
          alt="avatar"
        />
      <div className="bg-gray-50 p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Hey👋</h1>
        <p className="text-gray-700 mt-2">I have recently launched a project dedicated to safeguarding endangered species. Using Astro, I have crafted a captivating blog site to spread awareness. If you are intrigued, take the first step towards sustainability by checking it out!</p>
        
      </div>
    </div>
    </div>
  );
}
