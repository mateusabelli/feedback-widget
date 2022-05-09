import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen);
  }

  return (
    <div className="absolute right-5 bottom-5">
      {isWidgetOpen && <p>Panel Placeholder</p>}
      <button
        onClick={toggleWidgetVisibility}
        className="bg-brand-500 rounded-full p-3 text-white flex group"
      >
        <ChatTeardropDots className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="mx-1">Feedback</span>
        </span>
      </button>
    </div>
  );
}

