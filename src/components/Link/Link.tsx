import React from "react";
import cn from "classnames";
import LinkNext from "next/link";

import { LinkTypes } from "@/components/Link/Link.types";

import styles from "./link.module.scss";

const Link: React.FC<LinkTypes> = ({
  className,
  withCount = false,
  disabled = false,
  count,
  children,
  link = "",
  ...props
}) => (
  <LinkNext href={`${link}`}>
    <div
      className={cn(className, styles.headerLink, {
        [styles.disabled]: disabled,
      })}
      {...props}
    >
      <span
        className={cn(styles.headerLinkText, {
          [styles.disabled]: disabled,
          [styles.withCount]: withCount,
        })}
      >
        {children}
      </span>

      {withCount && (
        <div className={cn(styles.headerLinkCount)}>
          <span className={styles.LinkCountText}>{count}</span>
        </div>
      )}
    </div>
  </LinkNext>
);

export default Link;
