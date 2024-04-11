import React from "react";
import cn from "classnames";

import { LinkTypes } from "@/components/Link/Link.types";

import "./link.css";

const Link: React.FC<LinkTypes> = ({
  className,
  withCount = false,
  disabled = false,
  count,
  children,
  ...props
}) => (
  <div
    className={cn(className, "headerLink", {
      ["disabled"]: disabled,
    })}
    {...props}
  >
    <span
      className={cn("headerLinkText", {
        ["disabled"]: disabled,
        ["withCount"]: withCount,
      })}
    >
      {children}
    </span>
    {withCount && (
      <div className={cn("headerLinkCount")}>
        <span className="LinkCountText">{count}</span>
      </div>
    )}
  </div>
);

export default Link;
