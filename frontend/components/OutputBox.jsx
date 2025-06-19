export default function OutputBox() {
  return (
    <div className="p-4 bg-gray-50 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold text-purple-700 mb-2">Paraphrased Output</h3>
      <div className="border border-gray-300 p-3 rounded-lg h-60 overflow-y-auto">
        <p className="text-gray-700 italic">Your rephrased content will appear here...</p>
      </div>
    </div>
  );
}

