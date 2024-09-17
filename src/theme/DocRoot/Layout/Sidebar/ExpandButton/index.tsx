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
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
