import React, { JSX } from "react";
import cn from "classnames";

import { ButtonTypes } from "@/components/Button/Button.types";

import { IconButton } from "@/assets/svgs/IconButton";

import styles from "./Button.module.scss";

const Button = ({
  children,
  appearance,
  className,
  disabled = false,
  type = "button",
  size,
  icon = "",
  ...props
}: ButtonTypes): JSX.Element => (
  <button
    disabled={disabled}
    type={type}
    className={cn(styles.button, className, {
      [styles.primary]: appearance === "primary",
      [styles.ghost]: appearance === "ghost",
      [styles.secondary]: appearance === "secondary",
      [styles.tertiary]: appearance === "tertiary",
      [styles.s]: size === "s",
      [styles.m]: size === "m",
      [styles.l]: size === "l",
      [styles.xl]: size === "xl",
    })}
    {...props}
  >
    <div
      className={cn(styles.iconButton, className, {
        [styles.iconLeft]: icon === "left",
      })}
    >
      <IconButton />
    </div>
    {children}
    <div
      className={cn(styles.iconButton, className, {
        [styles.iconRight]: icon === "right",
      })}
    >
      <IconButton />
    </div>
  </button>
);

export default React.memo(Button);
