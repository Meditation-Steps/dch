import React from "react";
import { Navigate, useParams } from "react-router-dom";

// Page04 doesn't exist in the original site, redirect to page05
export default function Page04() {
	const { lang } = useParams<{ lang: string }>();
	return <Navigate to={`/${lang}/page05`} replace />;
}
