import React from "react";
import cn from "classnames";
import NextLink from "next/link";

import { LinkTypes } from "@/components/Link/Link.types";

import "./link.css";

const Link: React.FC<LinkTypes> = ({
  className,
  withCount = false,
  disabled = false,
  count,
  children,
  link = "",
  ...props
}) => (
  <NextLink href={`${link}`}>
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
  </NextLink>
);

export default Link;
