/* eslint-disable @next/next/no-img-element */
import React from "react";
import {Heart, Share, Eye } from "lucide-react"; 

export type SalesProps = {
  name: string;
  email: string;
  para: string; // Assuming you added a new prop named 'para'
};

export default function SalesCard(props: SalesProps) {
  return (
    <div className="bg-white rounded-sm shadow-md p-4">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <div className=" rounded-full bg-gray-100 p-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width={200}
              height={200}
              src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${props.name}`}
              alt="avatar"
            />
          </div>
          <div className="ml-3">
            <p className="text-lg font-medium">{props.name}</p>
            <p className="text-sm text-gray-500">{props.email}</p>
            <p className="text-sm mt-2 text-gray-500">{props.para}</p>
          </div>
        </div>
      </div>
      <div className="flex ">
        
            <div className="flex items-center mr-4">
              <Heart size={18} color="#4B5563" className="mr-1" />
              <span className="text-xs text-gray-500">Likes</span>
            </div>
        
       
            <div className="flex items-center mr-4">
              <Eye size={18} color="#4B5563" className="mr-1" />
              <span className="text-xs text-gray-500">Seen</span>
            </div>
        
        
            <div className="flex items-center mr-4">
              <Share size={18} color="#4B5563" className="mr-1" />
              <span className="text-xs text-gray-500">Share</span>
            
        </div>
      </div>
    </div>
  );
}
