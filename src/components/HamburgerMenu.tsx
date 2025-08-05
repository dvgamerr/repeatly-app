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
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-60 p-0">
          <nav className="flex flex-col gap-2 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-6 py-3 text-lg font-medium rounded transition-colors ${
                  location.pathname === link.to
                    ? "bg-indigo-100 dark:bg-zinc-800 text-indigo-700 dark:text-cyan-300"
                    : "hover:bg-indigo-50 dark:hover:bg-zinc-800 text-gray-700 dark:text-gray-200"
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