import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetPanel } from "./WidgetPanel";

import styles from "./Widget.module.css";

export function Widget() {
  return (
    <Popover className={styles.container}>
      <Popover.Panel>
        <WidgetPanel />
      </Popover.Panel>
      <Popover.Button className={styles.button}>
        <ChatTeardropDots size="24" />
        <span className={styles.text}>
          <span className={styles.spacer}>Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}

