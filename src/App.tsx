import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandingPage from "./components/pages/LandingPage";
import IndexPage from "./components/pages/IndexPage";
import PrabhatSamgiita from "./components/pages/PrabhatSamgiita";
import KirtanPage from "./components/pages/KirtanPage";
import SamgacchhadhamMantra from "./components/pages/SamgacchhadhamMantra";
import MeditationPage from "./components/pages/MeditationPage";
import NityamShuddhamMantra from "./components/pages/NityamShuddhamMantra";
import GuruPuja from "./components/pages/GuruPuja";
import TeachingPage from "./components/pages/TeachingPage";
import Svadhyaya from "./components/pages/Svadhyaya";
import SpiritualDiscussion from "./components/pages/SpiritualDiscussion";
import Namaskar from "./components/pages/Namaskar";

export default function App() {
	return (
		<BrowserRouter basename="/dch">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path=":lang" element={<Layout />}>
					<Route index element={<IndexPage />} />
					<Route path="prabhat-samgiita" element={<PrabhatSamgiita />} />
					<Route path="kirtan" element={<KirtanPage />} />
					<Route path="samgacchhadham-mantra" element={<SamgacchhadhamMantra />} />
					<Route path="meditation" element={<MeditationPage />} />
					<Route path="nityam-shuddham-mantra" element={<NityamShuddhamMantra />} />
					<Route path="guru-puja" element={<GuruPuja />} />
					<Route path="teaching" element={<TeachingPage />} />
					<Route path="svadhyaya" element={<Svadhyaya />} />
					<Route path="spiritual-discussion" element={<SpiritualDiscussion />} />
					<Route path="namaskar" element={<Namaskar />} />
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
}
