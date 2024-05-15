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
  iconPosition = "",
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
      [styles.buttonWithIcon]: iconPosition,
    })}
    {...props}
  >
    <div
      className={cn(styles.iconButton, className, {
        [styles.iconLeft]: iconPosition === "left",
      })}
    >
      <IconButton />
    </div>
    {children}
    <div
      className={cn(styles.iconButton, className, {
        [styles.iconRight]: iconPosition === "right",
      })}
    >
      <IconButton />
    </div>
  </button>
);

export default React.memo(Button);
