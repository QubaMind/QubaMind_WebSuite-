import { useState } from "react";

export default function InputBox() {
  const [text, setText] = useState("");

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold text-blue-700 mb-2">Original Text</h3>
      <textarea
        className="w-full border border-gray-300 p-3 rounded-lg h-60 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
