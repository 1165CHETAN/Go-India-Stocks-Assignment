/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  Newspaper,
  TrendingUp,
  Video
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      
      {!mobileWidth && (
        
        <div className="absolute right-[-20px] top-7">
          
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Discussion Forum",
            href: "/",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: "Market Stories",
            href: "/users",
            icon: UsersRound,
            variant: "ghost"
          },
          {
            title: "Sentiments",
            href: "/settings",
            icon: ShoppingCart,
            variant: "ghost"
          },
          {
            title: "Market",
            href: "/market",
            icon: TrendingUp,
            variant: "ghost"
          },
          {
            title: "Sector",
            href: "/sector",
            icon: Settings,
            variant: "ghost"
          },
          {
            title: "Watchlist",
            href: "/watchlist",
            icon: Video,
            variant: "ghost"
          },
          {
            title: "Events",
            href: "/events",
            icon: Settings,
            variant: "ghost"
          },
          {
            title: "News/Interview",
            href: "/news",
            icon: Newspaper,
            variant: "ghost"
          }
        ]}
      />
    </div>
  );
}
