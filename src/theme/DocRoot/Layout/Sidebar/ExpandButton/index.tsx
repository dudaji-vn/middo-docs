import React from "react";
import { translate } from "@docusaurus/Translate";
// import IconArrow from "@theme/Icon/Arrow";
import type { Props } from "@theme/DocRoot/Layout/Sidebar/ExpandButton";

import styles from "./styles.module.css";

export default function DocRootLayoutSidebarExpandButton({
  toggleSidebar,
}: Props): JSX.Element {
  return (
    <div
      className={styles.expandButton}
      title={translate({
        id: "theme.docs.sidebar.expandButtonTitle",
        message: "Expand sidebar",
        description:
          "The ARIA label and title attribute for expand button of doc sidebar",
      })}
      aria-label={translate({
        id: "theme.docs.sidebar.expandButtonAriaLabel",
        message: "Expand sidebar",
        description:
          "The ARIA label and title attribute for expand button of doc sidebar",
      })}
      tabIndex={0}
      role="button"
      onKeyDown={toggleSidebar}
      onClick={toggleSidebar}
    >
      {/* <IconArrow className={styles.expandButtonIcon} /> */}
      <svg
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447715 8 0 7.55228 0 7Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447715 2 0 1.55228 0 1Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 13C0 12.4477 0.447715 12 1 12H17C17.5523 12 18 12.4477 18 13C18 13.5523 17.5523 14 17 14H1C0.447715 14 0 13.5523 0 13Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
