import { Lightbulb, NotePencil, Warning } from "phosphor-react";
import { CloseButton } from "./CloseButton";

import styles from "./WidgetPanel.module.css";

const feedbackTypes = {
  PROBLEM: {
    title: "Problem",
    icon: <Warning />,
  },
  SUGGESTION: {
    title: "Suggestion",
    icon: <Lightbulb />,
  },
  OTHER: {
    title: "Other",
    icon: <NotePencil />,
  },
};

export function WidgetPanel() {
  return (
    <div className={styles.panel}>
      <header>
        <span className={styles.headerText}>Leave your feedback</span>
        <CloseButton />
      </header>

      <div className={styles.content}>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button key={key} type="button" className={styles.buttons}>
              <span>{value.icon}</span>
              <p>{value.title}</p>
            </button>
          );
        })}
      </div>

      <footer>
        <span className={styles.footerText}>
          Made with ♥ by{" "}
          <a href="https://github.com/mateusabelli" target="_blank">
            Mateus Abelli
          </a>
        </span>
      </footer>
    </div>
  );
}

