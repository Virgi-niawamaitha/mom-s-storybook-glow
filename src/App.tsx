
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import StorybookPage from "./pages/StorybookPage";
import MemoriesPage from "./pages/MemoriesPage";
import ComplimentsPage from "./pages/ComplimentsPage";
import BirthdayWishes from "./pages/BirthdayWishes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-background rose-bg">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/storybook" element={<StorybookPage />} />
              <Route path="/memories" element={<MemoriesPage />} />
              <Route path="/compliments" element={<ComplimentsPage />} />
              <Route path="/birthday" element={<BirthdayWishes />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
