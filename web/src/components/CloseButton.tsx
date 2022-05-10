import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

import styles from "../styles/components/CloseButton.module.scss";

export function CloseButton() {
  return (
    <Popover.Button title="Close feedback panel" className={styles.button}>
      <X size="18" weight="bold" />
    </Popover.Button>
  );
}

