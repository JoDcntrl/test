import React from "react";
import cn from "classnames";

import { TextareaTypes } from "./Textarea.types";

import styles from "./textarea.module.scss";

const TextArea = <T extends Record<string, any>>({
  name,
  placeholder,
  rows = 4,
  error,
  register,
}: TextareaTypes<T>) =>
  register && (
    <div className={styles.textareConatiner}>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        rows={rows}
        className={cn(styles.textarea, {
          [styles.error]: error,
        })}
      />
      {error && (
        <span role="alert" className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </div>
  );

export default TextArea;
