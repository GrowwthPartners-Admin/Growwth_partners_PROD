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
    // Normalize path - remove trailing slashes
    const normalizedPath = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
    
    // Pages that exist ONLY for Singapore - always return Singapore URL
    const singaporeOnlyPages = [
      "/valuation-services-singapore",
      "/use-of-ai-in-finance",
      "/strategic-finance-singapore",
      "/privacy-policy",
      "/terms",
    ];

    // Handle Corporate Tax Filing - has country-specific versions
    if (normalizedPath === "/corporate-tax-filing-singapore" || normalizedPath.startsWith("/corporate-tax-filing")) {
      if (country === "australia") return "/au/corporate-tax-filing-australia";
      // UAE and Singapore use Singapore version
      return "/corporate-tax-filing-singapore";
    }

    // Handle AI Finance Workflow - has country-specific versions
    if (normalizedPath === "/ai-finance-workflow-singapore" || normalizedPath.startsWith("/ai-finance-workflow")) {
      if (country === "australia") return "/au/ai-finance-workflow-australia";
      // UAE and Singapore use Singapore version
      return "/ai-finance-workflow-singapore";
    }

    // Handle AI Financial Forecasting - has country-specific versions
    if (normalizedPath === "/ai-financial-forecasting-singapore" || normalizedPath.startsWith("/ai-financial-forecasting")) {
      if (country === "australia") return "/au/ai-financial-forecasting-australia";
      // UAE and Singapore use Singapore version
      return "/ai-financial-forecasting-singapore";
    }

    // Handle AI Risk Compliance - has country-specific versions
    if (normalizedPath === "/ai-risk-compliance-singapore" || normalizedPath.startsWith("/ai-risk-compliance")) {
      if (country === "australia") return "/au/ai-risk-compliance-australia";
      // UAE and Singapore use Singapore version
      return "/ai-risk-compliance-singapore";
    }

    // Handle AI Decision Intelligence - has country-specific versions
    if (normalizedPath === "/ai-decision-intelligence-singapore" || normalizedPath.startsWith("/ai-decision-intelligence")) {
      if (country === "australia") return "/au/ai-decision-intelligence-australia";
      // UAE and Singapore use Singapore version
      return "/ai-decision-intelligence-singapore";
    }

    // Handle ESOP Advisory - has country-specific versions
    if (normalizedPath === "/esop-advisory-singapore" || normalizedPath.startsWith("/esop-advisory")) {
      if (country === "australia") return "/au/esop-advisory-australia";
      // UAE and Singapore use Singapore version
      return "/esop-advisory-singapore";
    }

    // Check if the path matches any Singapore-only page (exact match only)
    const isSingaporeOnlyPage = singaporeOnlyPages.some(
      (pagePath) => normalizedPath === pagePath || normalizedPath.startsWith(`${pagePath}/`)
    );

    // If it's a Singapore-only page, always return the Singapore version
    if (isSingaporeOnlyPage) {
      return normalizedPath;
    }

    // Handle Home page navigation
    if (normalizedPath === "" || normalizedPath === "/") {
      if (country === "uae") return "/uae";
      if (country === "australia") return "/au";
      return "/";
    }

    // Part Time CFO has unique country-specific paths
    if (normalizedPath === "/part-time-cfo" || normalizedPath.startsWith("/part-time-cfo/")) {
      if (country === "uae") return "/uae/virtual-cfo-services-uae";
      if (country === "australia") return "/au/virtual-cfo-services-australia";
      return "/part-time-cfo";
    }

    // Taxation has country-specific versions
    if (normalizedPath === "/taxation" || normalizedPath.startsWith("/taxation/")) {
      if (country === "uae") return "/taxation-Services-in-uae";
      if (country === "australia") return "/taxation-Services-in-australia";
      return "/taxation";
    }

    // Service pages with country-specific slugs
    if (normalizedPath === "/accounting" || normalizedPath.startsWith("/accounting/")) {
      return `/${getCountryServiceSlug("accounting")}`;
    }
    if (normalizedPath === "/bookkeeping" || normalizedPath.startsWith("/bookkeeping/")) {
      return `/${getCountryServiceSlug("bookkeeping")}`;
    }
    if (normalizedPath === "/payroll" || normalizedPath.startsWith("/payroll/")) {
      return `/${getCountryServiceSlug("payroll")}`;
    }
    if (normalizedPath === "/cash-flow" || normalizedPath.startsWith("/cash-flow/")) {
      return `/${getCountryServiceSlug("cash-flow")}`;
    }
    if (normalizedPath === "/company-incorporation" || normalizedPath.startsWith("/company-incorporation/")) {
      return `/${getCountryServiceSlug("company-incorporation")}`;
    }
    if (normalizedPath === "/corporate-secretary" || normalizedPath.startsWith("/corporate-secretary/")) {
      return `/${getCountryServiceSlug("corporate-secretary")}`;
    }

    // Pages that have country-prefixed versions (about, blog, contact-us, success-stories, guide, news, achievements)
    if (["/about", "/blog", "/contact-us", "/success-stories", "/guide", "/news", "/achievements"].includes(normalizedPath)) {
      if (country === "singapore") return normalizedPath;
      if (country === "uae") return `/uae${normalizedPath}`;
      if (country === "australia") return `/au${normalizedPath}`;
    }

    // Case study pages - preserve location
    if (normalizedPath.startsWith("/case-studies/")) {
      if (country === "singapore") return normalizedPath;
      if (country === "uae") return `/uae${normalizedPath}`;
      if (country === "australia") return `/au${normalizedPath}`;
    }

    // Individual guide pages - preserve location
    if (normalizedPath.startsWith("/guide/") && normalizedPath !== "/guide") {
      if (country === "singapore") return normalizedPath;
      if (country === "uae") return `/uae${normalizedPath}`;
      if (country === "australia") return `/au${normalizedPath}`;
    }

    // Individual blog pages - preserve location
    if (normalizedPath.startsWith("/blog/") && normalizedPath !== "/blog") {
      if (country === "singapore") return normalizedPath;
      if (country === "uae") return `/uae${normalizedPath}`;
      if (country === "australia") return `/au${normalizedPath}`;
    }

    // Default: return the path as-is
    return normalizedPath;
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
