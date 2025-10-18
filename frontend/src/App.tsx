import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GalleryPage from "./pages/gallery";
import About from "./pages/about";
import NotFound from "./pages/NotFound";
import JoinClub from "./pages/joinClub";
import JoinAsMember from "./pages/joinAsMember";
import LoginPage from "./pages/login";
import AdminDashboard from "./pages/adminDashboard";
import MemberDashboard from "./pages/memberDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/joinclub" element={<JoinClub />} />
          <Route path="/joinasmember/signup" element={<JoinAsMember />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/admin/dashboard" element={<AdminDashboard/>} />
          <Route path="/member/dashboard" element={<MemberDashboard/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
