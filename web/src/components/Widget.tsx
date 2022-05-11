import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidGetForm } from "./WidgetForm";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 md:bottom-5 right-5 md:right-5 flex flex-col items-end">
      <Popover.Panel>
        <WidGetForm />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 px-3 rounded-full h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden hover:max-w-auto group-hover:max-w-xs duration-500 transition-all ease-linear delay-75">
          <span className="pl-2"></span>
          FeedBack
        </span>
      </Popover.Button>
    </Popover>
  );
}
