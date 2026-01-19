import { useTranslation } from "react-i18next";
import "./pages/Page.css";

export default function Mantra(props: { headingKey: string; linesKey: string; meaningKey?: string }) {
  const { t } = useTranslation("pages");

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title font-title">{t(props.headingKey)}</h1>
      </header>

      <div className="page-main">
        <div className="page-side-image">
          <img src="/images/pratik.png" alt="Pratik" />
        </div>

        <main className="page-content">
          <h2
            className="font-mantra"
            style={{
              whiteSpace: "pre-line",
              textAlign: "center",
            }}
          >
            {t(props.linesKey)}
          </h2>
          {props.meaningKey && (
            <>
              <br />
              <p
                className="font-regular"
                style={{
                  whiteSpace: "pre-line",
                }}
              >
                {t(props.meaningKey)}
              </p>
            </>
          )}
        </main>

        <div className="page-side-image">
          <img src="/images/guru_white.jpeg" alt="Guru" />
        </div>
      </div>
    </div>
  );
}
