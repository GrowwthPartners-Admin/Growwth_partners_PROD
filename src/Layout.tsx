import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as CustomToaster } from "@/components/ui/toaster";
import { CanonicalUpdater } from "@/components/CanonicalUpdater";
import { CountryProvider } from "./contexts/CountryContext";
import ScrollToTop from "./components/ui/ScrollToTop";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// import FloatingDemoPopup from "@/components/ui/FloatingDemoPopup";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const Layout = () => {
  // const location = useLocation();

  // function setCanonical(url) {
  //   let link = document.querySelector("link[rel='canonical']");
  //   if (!link) {
  //     link = document.createElement("link");
  //     link.setAttribute("rel", "canonical");
  //     document.head.appendChild(link);
  //   }
  //   console.log({url});
    
  //   link.setAttribute("href", url);
  // }

  // useEffect(() => {
  //   const canonicalUrl = `https://growwthpartners.com${location.pathname}`;
  //   setCanonical(canonicalUrl);
  // }, [location.pathname]);

  return (
    <CountryProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <TooltipProvider>
            <div className="App">
              {/* <CanonicalUpdater /> */}
              <ScrollToTop />
              <Toaster />
              <CustomToaster />
              {/* <FloatingDemoPopup /> */}
              <main>
                {/* Outlet is the placeholder for your page components */}
                <Outlet />
              </main>
            </div>
          </TooltipProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </CountryProvider>
  );
};

export default Layout;
