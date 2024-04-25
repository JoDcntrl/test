"use client";

import React, { FC } from "react";
import cn from "classnames";
import { useForm, useFormContext } from "react-hook-form";

import { InputTypes } from "@/components/Input/Input.types";

import { Search } from "@/assets/svgs/Search";

import styles from "./Input.module.scss";

const Input = <T extends Record<string, any>>({
  name,
  required = false,
  className,
  error,
  isIcon = false,
  register,
  ...props
}: InputTypes<T>) => {
  return (
    <div className={cn(styles.inputWrapper, className)}>
      {isIcon && (
        <div className={styles.icon}>
          <Search />
        </div>
      )}
      <input
        {...register(name, { required: "City " })}
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
