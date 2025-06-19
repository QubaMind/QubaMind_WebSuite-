export default function ModeSelector() {
  const modes = ["Standard", "Formal", "Creative", "Shorten", "Expand"];
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {modes.map((mode, idx) => (
        <button
          key={idx}
          className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200"
        >
          {mode}
        </button>
      ))}
    </div>
  );
}
