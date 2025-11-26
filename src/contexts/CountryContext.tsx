import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Country = "singapore" | "uae" | "australia";

interface CountryContextType {
  country: Country;
  setCountry: (country: Country) => void;
  getCountryPrefix: () => string;
  getCountryUrl: (path: string) => string;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [country, setCountry] = useState<Country>("singapore");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/uae")) {
      setCountry("uae");
    } else if (path.startsWith("/au")) {
      setCountry("australia");
    } else {
      setCountry("singapore");
    }
  }, [location.pathname]);

  const getCountryPrefix = (): string => {
    switch (country) {
      case "uae":
        return "/uae";
      case "australia":
        return "/au";
      default:
        return "";
    }
  };

  const getCountryServiceSlug = (base: string) => {
    if (country === "uae") return `${base}-services-in-uae`;
    if (country === "australia") return `${base}-services-in-australia`;
    return `${base}-services-in-singapore`;
  };

  const getCountryUrl = (path: string): string => {
    // Pages that exist ONLY for Singapore - always return Singapore URL
    const singaporeOnlyPages = [
      "/corporate-tax-filing-singapore",
      "/valuation-services-singapore",
      "/use-of-ai-in-finance",
      "/strategic-finance-singapore",
      "/success-stories",
      "/achievements",
      "/guide",
      "/news",
      "/privacy-policy",
      "/terms",
    ];

    // Check if the path matches any Singapore-only page
    const isSingaporeOnlyPage = singaporeOnlyPages.some(
      (pagePath) => path === pagePath || path.startsWith(pagePath)
    );

    // If it's a Singapore-only page, always return the Singapore version
    if (isSingaporeOnlyPage) {
      return path;
    }

    // Handle Home page navigation
    if (path === "/") {
      if (country === "uae") return "/uae";
      if (country === "australia") return "/au";
      return "/";
    }

    // Existing logic for country-specific service pages
    if (path.startsWith("/accounting"))
      return `/${getCountryServiceSlug("accounting")}`;
    if (path.startsWith("/bookkeeping"))
      return `/${getCountryServiceSlug("bookkeeping")}`;
    if (path.startsWith("/payroll"))
      return `/${getCountryServiceSlug("payroll")}`;
    if (path.startsWith("/cash-flow"))
      return `/${getCountryServiceSlug("cash-flow")}`;
    if (path.startsWith("/company-incorporation"))
      return `/${getCountryServiceSlug("company-incorporation")}`;
    if (path.startsWith("/corporate-secretary"))
      return `/${getCountryServiceSlug("corporate-secretary")}`;

    // Part Time CFO has unique country-specific paths
    if (path.startsWith("/part-time-cfo")) {
      if (country === "uae") return `/uae/virtual-cfo-services-uae`;
      if (country === "australia") return `/au/virtual-cfo-services-australia`;
      return `/part-time-cfo`;
    }

    // Taxation has country-specific versions
    if (path === "/taxation" || path.startsWith("/taxation")) {
      if (country === "uae") return `/taxation-Services-in-uae`;
      if (country === "australia") return `/taxation-Services-in-australia`;
      return `/taxation`;
    }

    // Pages that have country-prefixed versions (about, blog, contact-us)
    if (["/about", "/blog", "/contact-us"].includes(path)) {
      if (country === "singapore") return path;
      return `/${country}${path}`;
    }

    // Default: return the path as-is
    return path;
  };

  const handleSetCountry = (newCountry: Country) => {
    if (newCountry === country) return;

    let newPath: string;
    if (newCountry === "singapore") {
      newPath = "";
    } else {
      newPath = `/${newCountry}`;
    }
    setCountry(newCountry);
    console.log(
      `Switching country from ${country} to ${newCountry}, navigating to: ${newPath}`
    );
    navigate(newPath, { replace: true });
  };

  return (
    <CountryContext.Provider
      value={{
        country,
        setCountry: handleSetCountry,
        getCountryPrefix,
        getCountryUrl,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = (): CountryContextType => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
};
