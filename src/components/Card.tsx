import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  discription: string; 
  img:string;
  title:string
};

export default function Card(props: CardProps) {
  return (
    <CardContent>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full bg-gray-100 mb-3">
          <img
            className="object-cover w-full h-32" // Adjust height as needed
            src={`https://api.dicebear.com/8.x/shapes/svg?seed=${props.img}`}
            alt="avatar"
          />
        </div>
        <h2 className="text-lg font-mono text-gray-800">{props.title}</h2>
        <p className="text-sm text-center text-gray-500">{props.discription}</p>
      </div>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full bg-blue-50 flex-col gap-3 rounded-sm border p-3",
        props.className
      )}
    />
  );
}
