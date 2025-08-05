import * as React from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Dashboard" },
  { to: "/activities", label: "Activities" },
];

export function HamburgerMenu() {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false); // close menu on route change
  }, [location.pathname]);

  return (
    <div className="fixed top-4 left-4 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu" className="border border-[#ececec] dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-sm">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-56 p-0 bg-white dark:bg-zinc-900/90 border-r border-[#ececec] dark:border-zinc-800">
          <nav className="flex flex-col gap-1 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-6 py-2 text-base font-medium rounded transition-colors ${
                  location.pathname === link.to
                    ? "bg-gray-100 dark:bg-zinc-800 text-indigo-700 dark:text-cyan-300"
                    : "hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}