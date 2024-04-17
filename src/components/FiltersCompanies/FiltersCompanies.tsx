"use client";

import React from "react";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  SubmitErrorHandler,
} from "react-hook-form";

import Checkbox from "@/components/Checkbox/Checkbox";
import { CompanySize, Industry, Additionally } from "./CompanyFilterData";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

import styles from "./filtersCompanies.module.scss";
import Radio from "../Radio/Radio";

type Inputs = {
  industry: [];
  companySize: string;
  city: string;
  additionally: boolean;
};

const FiltersCompanies = () => {
  const methods = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const error: SubmitErrorHandler<Inputs> = (data) => {
    console.log(data);
    for (const obj in data) {
      if (obj === "companySize") {
        alert(`Enter value - company size`);
      } else alert(`Enter value - ${obj}`);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit, error)}
        className={styles.sectionFilters}
      >
        <h2 className={styles.filtersTitle}>Filters</h2>
        <div className={styles.blockCheckboxes}>
          <h2 className={styles.blockCheckboxesTitle}>Industry</h2>
          <div className={styles.blockCheckboxesList}>
            {Industry.map(({ nameSection, id, disabled, active }) => (
              <label key={id} className={styles.checkboxesListItem}>
                <Checkbox
                  required={true}
                  name={nameSection}
                  nameGroup="industry"
                  disabled={disabled}
                  active={active}
                />
                <div className={styles.checkbox__body}>{nameSection}</div>
              </label>
            ))}
          </div>
        </div>
        <div className={styles.blockCheckboxes}>
          <h2 className={styles.blockCheckboxesTitle}>Company size</h2>
          <div className={styles.blockCheckboxesList}>
            <Radio data={CompanySize} required={true} />
          </div>
        </div>
        <div className={styles.blockInput}>
          <h3 className={styles.blockInputTitle}>City</h3>
          <Input
            name="city"
            isIcon={false}
            className={styles.inputContainer}
            placeholder="Any"
            required={true}
          />
        </div>
        <label className={styles.checkboxesListItem}>
          <Checkbox nameGroup="additionally" name={"additionally"} />
          <div className={styles.checkbox__body}>Additionally</div>
        </label>
        <Button
          type="reset"
          onClick={() => methods.reset()}
          appearance={"secondary"}
          size={"l"}
          className={styles.buttonStyle}
        >
          Reset all
        </Button>
        <Button
          type="submit"
          appearance={"secondary"}
          size={"l"}
          className={styles.buttonStyle}
        >
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default FiltersCompanies;
