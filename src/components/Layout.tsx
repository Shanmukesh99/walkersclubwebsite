import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClubDropdownOpen, setIsClubDropdownOpen] = useState(false);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [certificateType, setCertificateType] = useState<"local" | "international">("local");
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/walkers-visakhapatnam", label: "Walkers Club Visakhapatnam" },
    { path: "/become-member", label: "To Become a Member" },
    { path: "/contact-us", label: "Contact Us" },
    { path: "/father-of-walkers", label: "Father of Walkers Movement" },
    { path: "/gallery", label: "Gallery" },
    { path: "/WalkersPrayer", label: "Walkers Prayer" },
    { path: "/walkers-team-2025", label: "2025 Board" },
  ];

 const walkersvisakhapatnamDropdownItems = [
  { path: "/bye-laws", label: "Bye-Laws" },
  { path: "/past-presidents", label: "Past Presidents" }, // previously /PresidentsList
  { path: "/walkers-team-2025", label: "2025 Team" },
  { type: "modal", label: "Certificate of Registration" },
  { path: "/our-members", label: "Our Members" },
  { path: "/contact-us", label: "Contact Us" },
  { path: "/father-of-walkers", label: "Father of Walkers Movement" },
  { path: "/gallery", label: "Gallery" },
  { path: "/WalkersPrayer", label: "Walkers Prayer" },
];

 const walkersinternationalDropdownItems = [
  { type: "modal", label: "Certificate of Registration" }, // modal only
  { path: "/past-international-presidents", label: "Past Presidents" }, // previously "PastInternationalPresidents"
  { path: "/emblem", label: "Emblem" },
  { path: "/history", label: "History" },
  { path: "/current-president", label: "Current President" },
];

  const safeHref = (path: string | undefined) => {
    if (!path) return "#";
    return path.startsWith("/") ? path : "/" + path;
  };

  const isActive = (path: string) => location.pathname === path;

  return (

    
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#2f6a2f] shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-primary-foreground">
                <img src="/logo.jpg" alt="Walkers Club Logo" className="w-full h-full object-cover" />
              </div>

              <div className="text-primary-foreground">
                <h1 className="font-bold text-xl">Walkers Club Visakhapatnam</h1>
<p className="text-[20px] font-semibold tracking-wide text-yellow-300">
  HEALTH IS WEALTH – WALK YOUR WAY TO HEALTH
</p>


             </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.slice(0, 1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm transition duration-300 ease-in-out transform ${
                    isActive(link.path)
                      ? "text-primary-foreground font-semibold underline underline-offset-4 decoration-2 decoration-white"
                      : "text-primary-foreground hover:underline underline-offset-4 decoration-white hover:scale-105 hover:font-semibold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Visakhapatnam Dropdown */}
              <DropdownMenu open={isClubDropdownOpen} onOpenChange={setIsClubDropdownOpen}>
  <DropdownMenuTrigger className="px-4 py-2 rounded-lg transition-all duration-200 text-primary-foreground hover:bg-primary-foreground/10 flex items-center space-x-1">
  <span>Walkers Club Visakhapatnam</span>
    <ChevronDown size={16} color="white" />
  </DropdownMenuTrigger>

  <DropdownMenuContent>
    {walkersvisakhapatnamDropdownItems.map((item) => (
      <DropdownMenuItem key={item.label} asChild>
        {"path" in item ? (
          <Link to={item.path}>{item.label}</Link>
        ) : (
          <button onClick={() => { setCertificateType("local"); setIsCertificateModalOpen(true); }}>{item.label}</button>
        )}
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>

              {/* Walkers International Dropdown */}
              <DropdownMenu>
  <DropdownMenuTrigger className="px-4 py-2 rounded-lg transition-all duration-200 text-primary-foreground hover:bg-primary-foreground/10 flex items-center space-x-1">
    <span>Walkers International</span>
    <ChevronDown size={16} color="white" />
  </DropdownMenuTrigger>

  <DropdownMenuContent>
    {walkersinternationalDropdownItems.map((item) => (
      <DropdownMenuItem key={item.label} asChild>
        {"path" in item ? (
          <Link to={item.path}>{item.label}</Link>
        ) : (
          <button onClick={() => { setCertificateType("international"); setIsCertificateModalOpen(true); }}>{item.label}</button>
        )}
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>

              {/* Become member */}
              <Link
                key="become-member"
                to="/become-member"
                className={`px-4 py-2 rounded-lg text-sm transition duration-300 ease-in-out transform ${
                  isActive("/become-member")
                    ? "text-primary-foreground font-semibold underline underline-offset-4 decoration-2 decoration-white"
                    : "text-primary-foreground hover:underline underline-offset-4 decoration-white hover:scale-105 hover:font-semibold"
                }`}
              >
                To Become a Member
              </Link>
            </div>

            {/* Mobile Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-primary-foreground p-2">
              {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4"
              >
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg transition-all ${
                        isActive(link.path)
                          ? "bg-primary-foreground text-primary font-semibold"
                          : "text-primary-foreground hover:bg-primary-foreground/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Certificate Modal */}
      <Dialog open={isCertificateModalOpen} onOpenChange={setIsCertificateModalOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Certificate of Registration</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center">
            <img 
              src={certificateType === "international" ? "/gallery/Certificateintl.jpeg" : "/gallery/neww.jpg"} 
              className="w-full max-w-lg rounded-lg" 
            />
          </div>
        </DialogContent>
      </Dialog>

      <main className="flex-1">
        <ScrollToTop />
        {children}
      </main>

      <footer className="bg-gradient-hero text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Walkers Club Visakhapatnam</h3>
              <p className="text-sm opacity-90">
                Promoting health, friendship, and community through walking since our establishment.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navLinks
                  .filter((link) => link.path !== "/walkers-visakhapatnam")
                  .map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className="opacity-90 hover:opacity-100 transition-opacity">
                        {link.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-sm opacity-90">
                Email: praveensankhla@gmail.com <br />
                Phone: +91-9014085233
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-90">
            <p>&copy; {new Date().getFullYear()} Walkers Club Visakhapatnam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
