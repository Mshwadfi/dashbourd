"use client";
import { menuItems } from "@/libs/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <aside className="w-64 bg-card border-r flex flex-col h-screen">
      <div className="p-5">
        <h2 className="text-2xl font-bold text-primary">My Zesty</h2>
      </div>
      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <div key={item.href} className="mb-2">
            <Link
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent ${
                pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>

            {item.submenu && (
              <div className="ml-6 mt-2 space-y-1">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={`block rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent ${
                      pathname === subItem.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
