import { usePageNavigation } from "../Layout/Navigation";
import Mantra from "../Mantra";
import "./Page.css";

export default function NityamShuddhamMantra() {
  usePageNavigation({ prev: "meditation", next: "guru-puja" });

  return <Mantra headingKey="page06.title" linesKey="page06.mantra" meaningKey="page06.meaning" />;
}
