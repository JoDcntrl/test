"use client";

import React from "react";
import cn from "classnames";

import { Search } from "@/assets/svgs/Search";
import { InputTypes } from "@/components/Input/Input.types";

import styles from "./Input.module.scss";

const Input = <T extends Record<string, any>>({
  name,
  className,
  error,
  isIcon = false,
  register,
  ...props
}: InputTypes<T>) =>
  register && (
    <div className={cn(styles.inputWrapper, className)}>
      {isIcon && (
        <div className={styles.icon}>
          <Search />
        </div>
      )}
      <input
        {...register(name)}
        className={cn(styles.input, {
          [styles.error]: error,
          [styles.isIcon]: isIcon,
        })}
        {...props}
      />
      {error && (
        <span role="alert" className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );

export default Input;
