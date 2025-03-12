import { Bell, Search, Settings, User } from "lucide-react";
import React from "react";
import ModeToggle from "../theme/ModeToggle";

const Header = () => {
  return (
    <header className="h-16 border bg-card flex items-center justify-between px-6">
      <div className="flex items-center gap-4 relative">
        <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 rounded-full bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-primary w-64"
        />
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <button className="p-2 hover:bg-accent rounded-full">
          <Bell className="h-5 w-5 text-muted-foreground" />
        </button>
        <button className="p-2 hover:bg-accent rounded-full">
          <Settings className="h-5 w-5 text-muted-foreground" />
        </button>
        <button className="p-2 hover:bg-accent rounded-full">
          <User className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
