"use client";

import React from "react";
import { useForm, SubmitHandler, Controller, FormProvider } from "react-hook-form"

import Checkbox from "@/components/Checkbox/Checkbox";
import { CompanySize, Industry, Additionally } from "./CompanyFilterData";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

import styles from "./filtersCompanies.module.scss";
import Radio from "../Radio/Radio";

type Inputs = {
  industry: []
  companySize: string
}


const FiltersCompanies = () => {
  const methods = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.sectionFilters}>
        <h2 className={styles.filtersTitle}>Filters</h2>
        <div className={styles.blockCheckboxes}>
          <h2 className={styles.blockCheckboxesTitle}>Industry</h2>
          <div className={styles.blockCheckboxesList}>
            {Industry.map(({ nameSection, id }) => (
              <label key={id} className={styles.checkboxesListItem}>
                <Checkbox name={nameSection} nameGroup='industry' />
                <div className={styles.checkbox__body}>{nameSection}</div>
              </label>
            ))}
          </div>
        </div>
        <div className={styles.blockCheckboxes}>
          <h2 className={styles.blockCheckboxesTitle}>Company size</h2>
          <div className={styles.blockCheckboxesList}>
            <Radio data={CompanySize} />
          </div>
        </div>
        <div className={styles.blockInput}>
          <h3 className={styles.blockInputTitle}>City</h3>
          <Input
            name="city"
            isIcon={false}
            className={styles.inputContainer}
            placeholder="Any"
          />
        </div>
        <label className={styles.checkboxesListItem}>
          <Checkbox disabled={false} active={false} nameGroup='additionally' />
          <div className={styles.checkbox__body}>Additionally</div>
        </label>
        <Button
          type="reset"
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
          Sumbit
        </Button>
      </form>
    </FormProvider>
  );
};

export default FiltersCompanies;
