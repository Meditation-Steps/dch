import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import GuruPuja from "./components/pages/GuruPuja";
import IndexPage from "./components/pages/IndexPage";
import KirtanPage from "./components/pages/KirtanPage";
import LandingPage from "./components/pages/LandingPage";
import MeditationPage from "./components/pages/MeditationPage";
import Namaskar from "./components/pages/Namaskar";
import NityamShuddhamMantra from "./components/pages/NityamShuddhamMantra";
import PrabhatSamgiita from "./components/pages/PrabhatSamgiita";
import SamgacchhadhamMantra from "./components/pages/SamgacchhadhamMantra";
import SpiritualDiscussion from "./components/pages/SpiritualDiscussion";
import SupremeCommand from "./components/pages/SupremeCommand";
import Svadhyaya from "./components/pages/Svadhyaya";

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
          <Route path="teaching" element={<SupremeCommand />} />
          <Route path="svadhyaya" element={<Svadhyaya />} />
          <Route path="spiritual-discussion" element={<SpiritualDiscussion />} />
          <Route path="namaskar" element={<Namaskar />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
