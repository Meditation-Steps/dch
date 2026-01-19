import { useTranslation } from "react-i18next";
import { usePageNavigation } from "../Layout/Navigation";
import "./Page.css";

export default function SpiritualDiscussion() {
  const { t } = useTranslation("pages");

  usePageNavigation({ prev: "svadhyaya", next: "namaskar" });

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title font-title">{t("page10.title")}</h1>
      </header>

      <div className="page-main">
        <div className="page-side-image">
          <img src="/images/pratik.png" alt="Pratik" />
        </div>

        <div className="page-side-image">
          <img src="/images/guru_white.jpeg" alt="Guru" />
        </div>
      </div>
    </div>
  );
}
