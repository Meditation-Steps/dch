import { useFullscreen } from "../../hooks/useFullscreen";
import "./TopBar.css";

export default function FullscreenToggle() {
  const { isSupported, toggle } = useFullscreen();

  // Hide button if fullscreen is not supported
  if (!isSupported) {
    return null;
  }

  return (
    <div id="fullscreen-toggle" className="icon-button" onClick={toggle}>
      <img src="/images/fullscreen.png" alt="fullscreen" />
    </div>
  );
}
