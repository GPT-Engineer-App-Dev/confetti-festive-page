import { Home, Party } from "lucide-react";
import Index from "./pages/Index.jsx";
import Confetti from "./pages/Confetti.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Confetti",
    to: "/confetti",
    icon: <Party className="h-4 w-4" />,
    page: <Confetti />,
  },
];
