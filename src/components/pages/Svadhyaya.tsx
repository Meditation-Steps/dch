import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";
import "./Page.css";

export default function Svadhyaya() {
  const { t } = useTranslation("pages");

  usePageNavigation({ prev: "teaching", next: "spiritual-discussion" });

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title font-title">{t("page09.title")}</h1>
      </header>

      <div className="page-main">
        <main className="page-content">
          {/* The markdown text belongs here */}
        </main>
      </div>
    </div>
  );
}
