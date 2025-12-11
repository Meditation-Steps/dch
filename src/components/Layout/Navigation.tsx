import React, { createContext, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrollVisibility } from "../../hooks/useScrollVisibility";

export interface NavigationConfig {
	prev?: string;
	next?: string;
	home?: string;
}

// Context to pass navigation config from pages to Navigation component
const NavigationContext = createContext<NavigationConfig>({});

export const NavigationProvider: React.FC<{
	children: React.ReactNode;
	config: NavigationConfig;
}> = ({ children, config }) => (
	<NavigationContext.Provider value={config}>
		{children}
	</NavigationContext.Provider>
);

export function useNavigationConfig() {
	return useContext(NavigationContext);
}

export default function Navigation() {
	const { t } = useTranslation("common");
	const { lang } = useParams<{ lang: string }>();
	const config = useNavigationConfig();
	const isVisible = useScrollVisibility();

	// Default to index if no home specified
	const home = config.home || "index";

	return (
		<div
			id="navigation"
			className={`navigation ${isVisible ? "" : "hidden"}`}
		>
			{config.prev && (
				<Link to={`/${lang}/${config.prev}`} className="nav-button nav-prev">
					← {t("navigation.previous")}
				</Link>
			)}
			<Link to={`/${lang}/${home}`} className="nav-button nav-home">
				🏠 {t("navigation.home")}
			</Link>
			{config.next && (
				<Link to={`/${lang}/${config.next}`} className="nav-button nav-next">
					{t("navigation.next")} →
				</Link>
			)}
		</div>
	);
}
