import React from "react";
import { useFormContext } from "react-hook-form";
import { TextareaTypes } from "./Textarea.types";
import styles from "./textarea.module.scss";

const TextArea = <T extends Record<string, any>>({
  name,
  placeholder,
  rows = 4,
  register,
}: TextareaTypes<T>) => {
  return (
    register && (
      <div className={styles.textareConatiner}>
        <textarea
          {...register(name)}
          placeholder={placeholder}
          rows={rows}
          className={styles.textarea}
        />
      </div>
    )
  );
};

export default TextArea;
