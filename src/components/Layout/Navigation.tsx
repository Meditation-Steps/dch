import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useScrollVisibility } from "../../hooks/useScrollVisibility";
import "./Navigation.css";

export interface NavigationConfig {
  prev?: string;
  next?: string;
  home?: string;
}

interface NavigationContextType {
  config: NavigationConfig;
  setConfig: (config: NavigationConfig) => void;
}

// Context to pass navigation config from pages to Navigation component
const NavigationContext = createContext<NavigationContextType>({
  config: {},
  setConfig: () => {},
});

export const NavigationProvider: React.FC<{
  children: React.ReactNode;
  config: NavigationConfig;
}> = ({ children, config: initialConfig }) => {
  const [config, setConfig] = useState<NavigationConfig>(initialConfig);

  return <NavigationContext.Provider value={{ config, setConfig }}>{children}</NavigationContext.Provider>;
};

export function useNavigationConfig() {
  return useContext(NavigationContext).config;
}

export function useSetNavigationConfig() {
  return useContext(NavigationContext).setConfig;
}

// Hook for pages to set their navigation config
export function usePageNavigation(config: NavigationConfig) {
  const setConfig = useSetNavigationConfig();

  useEffect(() => {
    setConfig(config);
    return () => setConfig({});
  }, [config.prev, config.next, config.home, setConfig]);
}

export default function Navigation() {
  const { lang } = useParams<{ lang: string }>();
  const config = useNavigationConfig();
  const isVisible = useScrollVisibility();

  // Default to index if no home specified
  const home = config.home || "index";

  return (
    <div id="navigation" className={`navigation ${isVisible ? "" : "hidden"}`}>
      {config.prev && (
        <Link to={`/${lang}/${config.prev}`} className="nav-button nav-prev">
          <img src="//images/right.png" alt="Previous" className="nav-arrow nav-arrow-left" />
        </Link>
      )}
      <Link to={`/${lang}/${home}`} className="nav-button nav-home">
        <img src="//images/home.png" alt="Home" className="nav-home-icon" />
      </Link>
      {config.next && (
        <Link to={`/${lang}/${config.next}`} className="nav-button nav-next">
          <img src="//images/right.png" alt="Next" className="nav-arrow nav-arrow-right" />
        </Link>
      )}
    </div>
  );
}
