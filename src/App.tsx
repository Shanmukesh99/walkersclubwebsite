import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WalkersInternational from "./pages/WalkersInternational";

import BecomeMember from "./pages/BecomeMember";
import ContactUs from "./pages/ContactUs";
import FatherOfWalkers from "./pages/FatherOfWalkers";
import Gallery from './pages/Gallery';
import NotFound from "./pages/NotFound";
import WalkersPrayer from "./pages/WalkersPrayer";
import WalkersTeam2025 from "./pages/WalkersTeam2025";
import PresidentsList from "./pages/PresidentsList";
import PastInternationalPresidents from "./pages/PastInternationalPresidents";
import Byelaws from "./pages/Byelaws";
import OurMembers from "./pages/OurMembers";





const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/walkers-international" element={<WalkersInternational />} />

            <Route path="/become-member" element={<BecomeMember />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/father-of-walkers" element={<FatherOfWalkers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/walkersPrayer" element={<WalkersPrayer />} />
            <Route path="/walkers-team-2025" element={<WalkersTeam2025 />} />
             <Route path="/past-presidents" element={<PresidentsList />} />
  <Route path="/past-international-presidents" element={<PastInternationalPresidents />} />
  <Route path="/bye-laws" element={<Byelaws />} />
  <Route path="/our-members" element={<OurMembers />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

// git add .
// git commit -m "updated content"
// git push