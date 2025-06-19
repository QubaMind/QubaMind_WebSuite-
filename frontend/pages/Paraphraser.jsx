import InputBox from "../components/InputBox";
import OutputBox from "../components/OutputBox";
import ModeSelector from "../components/ModeSelector";

export default function Paraphraser() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">🧠 RewriterRam - Paraphraser</h2>
      <ModeSelector />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputBox />
        <OutputBox />
      </div>
    </div>
  );
}
