import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandingPage from "./components/pages/LandingPage";
import IndexPage from "./components/pages/IndexPage";
import Page01 from "./components/pages/Page01";
import Page02 from "./components/pages/Page02";
import Page03 from "./components/pages/Page03";
import Page05 from "./components/pages/Page05";
import Page06 from "./components/pages/Page06";
import Page07 from "./components/pages/Page07";
import Page08 from "./components/pages/Page08";
import Page09 from "./components/pages/Page09";
import Page10 from "./components/pages/Page10";
import Page11 from "./components/pages/Page11";

export default function App() {
	return (
		<BrowserRouter basename="/dch">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path=":lang" element={<Layout />}>
					<Route index element={<IndexPage />} />
					<Route path="page01" element={<Page01 />} />
					<Route path="page02" element={<Page02 />} />
					<Route path="page03" element={<Page03 />} />
					<Route path="page05" element={<Page05 />} />
					<Route path="page06" element={<Page06 />} />
					<Route path="page07" element={<Page07 />} />
					<Route path="page08" element={<Page08 />} />
					<Route path="page09" element={<Page09 />} />
					<Route path="page10" element={<Page10 />} />
					<Route path="page11" element={<Page11 />} />
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
}
