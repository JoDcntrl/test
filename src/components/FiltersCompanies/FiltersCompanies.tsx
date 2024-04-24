"use client";

import React from "react";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  SubmitErrorHandler,
} from "react-hook-form";

import Checkbox from "@/components/Checkbox/Checkbox";
import { Additionally, CompanySize, Industry } from "./FilterCompanyData";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Radio from "@/components/Radio/Radio";
import { FilterCompaniesForm } from "./FilterCompaniesForm.types";

import styles from "./filtersCompanies.module.scss";

const FiltersCompanies = () => {
  const methods = useForm<FilterCompaniesForm>();
  const { errors } = methods.formState;

  const onSubmit: SubmitHandler<FilterCompaniesForm> = (data) =>
    console.log(data);

  const error: SubmitErrorHandler<FilterCompaniesForm> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit, error)}
        className={styles.sectionFilters}
      >
        <h2 className={styles.filtersTitle}>Filters</h2>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Industry</h2>
          <div className={styles.blockList}>
            {Industry.map(({ nameSection, id, disabled }) => (
              <label key={id} className={styles.checkboxesListItem}>
                <Checkbox
                  name={nameSection}
                  disabled={disabled}
                  nameGroup="industry"
                  data={Industry}
                />
                <span>{nameSection}</span>
              </label>
            ))}
          </div>
        </div>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Company size</h2>
          <div className={styles.blockList}>
            <Radio data={CompanySize} nameGroup="size" />
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
            error={errors.city}
          />
        </div>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Additionally</h2>
          <div className={styles.blockList}>
            <label className={styles.blockListItem}>
              <Checkbox
                name="Open positions"
                nameGroup="additionally"
                data={Additionally}
              />
              <span>Open positions</span>
            </label>
          </div>
        </div>
        <Button
          type="reset"
          onClick={() => {
            methods.reset();
          }}
          appearance="secondary"
          size="l"
          className={styles.buttonStyle}
        >
          Reset all
        </Button>
        <Button
          type="submit"
          appearance="secondary"
          size="l"
          className={styles.buttonStyle}
        >
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default FiltersCompanies;
