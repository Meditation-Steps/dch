import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";
import "./Page.css";

export default function IndexPage() {
  const { t } = useTranslation("pages");

  // Set navigation config for this page
  usePageNavigation({ next: "prabhat-samgiita" });

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title font-title">{t("index.title")}</h1>
        <p className="page-subtitle font-regular">{t("index.subtitle")}</p>
      </header>

      <div className="page-main">
        <main className="page-content">
          <p className="font-regular" style={{ whiteSpace: "pre-line" }}>
            {t("index.content.p1")}
          </p>
          <p
            className="font-mantra"
            style={{
              textAlign: "center",
              margin: "1.5rem 0",
            }}
          >
            <strong>{t("index.content.button")}</strong>
          </p>
          <p className="font-regular" style={{ whiteSpace: "pre-line" }}>
            {t("index.content.p2")}
          </p>
        </main>
      </div>
    </div>
  );
}
