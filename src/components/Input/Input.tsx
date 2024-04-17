"use client";

import React, { FC } from "react";
import cn from "classnames";

import { useFormContext } from "react-hook-form";

import { Search } from "@/assets/svgs/Search";
import { InputTypes } from "@/components/Input/Input.types";

import styles from "./Input.module.scss";

const Input: FC<InputTypes> = ({
  name,
  required = false,
  className,
  error,
  isIcon = false,
  ...props
}) => {
  if (useFormContext() === null) {
    return null;
  }
  const { register } = useFormContext();
  return (
    <div className={cn(styles.inputWrapper, className)}>
      {isIcon && (
        <div className={styles.icon}>
          <Search />
        </div>
      )}
      <input
        {...register(name, { required: required })}
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
};

export default Input;
