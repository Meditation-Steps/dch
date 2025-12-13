import { usePageNavigation } from "../Layout/Navigation";
import Mantra from "../Mantra";
import "./Page.css";

export default function GuruPuja() {
  usePageNavigation({ prev: "nityam-shuddham-mantra", next: "teaching" });

  return <Mantra headingKey="page07.title" linesKey="page07.mantra" meaningKey="page07.meaning" />;
}
