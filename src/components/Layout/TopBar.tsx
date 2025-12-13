import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FullscreenToggle from "./FullscreenToggle";
import LanguagePicker from "./LanguagePicker";
import { useNavigationConfig } from "./Navigation";
import "./TopBar.css";

export default function TopBar() {
  const { lang } = useParams<{ lang: string }>();
  const config = useNavigationConfig();
  const [isVisible, setIsVisible] = useState(true);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper function to build route path
  const getRoutePath = (route?: string) => {
    if (!route) return "#";
    // "index" maps to the empty route (just /lang/)
    const path = route === "index" ? "" : route;
    return `/${lang}/${path}`;
  };

  // Default to index if no home specified
  const home = config.home || "";

  // Handle user activity to show/hide top bar
  useEffect(() => {
    const handleUserActivity = () => {
      // Show the top bar
      setIsVisible(true);

      // Clear existing timeout
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      // Set new timeout to hide after 3 seconds of inactivity
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    // Add event listeners
    document.addEventListener("mousemove", handleUserActivity);
    document.addEventListener("click", handleUserActivity);

    // Initial timeout
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleUserActivity);
      document.removeEventListener("click", handleUserActivity);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`top-bar ${isVisible ? "visible" : "hidden"}`}>
      <div className="top-bar-left">
        <FullscreenToggle />
        <Link to={getRoutePath(home || "index")} className="icon-button top-bar-home">
          <img src="/dch/images/home.png" alt="Home" />
        </Link>
      </div>

      <div className="top-bar-center">
        <Link
          to={getRoutePath(config.prev)}
          className={`icon-button ${!config.prev ? "disabled" : ""}`}
          onClick={(e) => !config.prev && e.preventDefault()}
        >
          <img src="/dch/images/right.png" alt="Previous" className="nav-arrow-left" />
        </Link>
        <Link
          to={getRoutePath(config.next)}
          className={`icon-button ${!config.next ? "disabled" : ""}`}
          onClick={(e) => !config.next && e.preventDefault()}
        >
          <img src="/dch/images/right.png" alt="Next" className="nav-arrow-right" />
        </Link>
      </div>

      <div className="top-bar-right">
        <LanguagePicker />
      </div>
    </div>
  );
}
