import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetPanel } from "./WidgetPanel";

export function Widget() {
  return (
    <Popover className="absolute right-5 bottom-5 flex flex-col items-end">
      <Popover.Panel>
        <WidgetPanel />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full p-3 text-white flex group">
        <ChatTeardropDots className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-focus-visible:max-w-xs transition-all duration-500 ease-linear">
          <span className="mx-1">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}

