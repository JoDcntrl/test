"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";

import Checkbox from "@/components/Checkbox/Checkbox";
import { CompanySize, Industry, Additionally } from "./CompanyFilterData";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

import styles from "./filtersCompanies.module.scss";

const FiltersCompanies = () => {
  return (
    <aside className={styles.sectionFilters}>
      <h2 className={styles.filtersTitle}>Filters</h2>
      <div className={styles.blockCheckboxes}>
        <h2 className={styles.blockCheckboxesTitle}>Industry</h2>
        <div className={styles.blockCheckboxesList}>
          <label className={styles.checkboxesListItem}>
            <Checkbox active={false} disabled={false} />
            <div className={styles.checkbox__body}>Disabled</div>
          </label>
          <label className={styles.checkboxesListItem}>
            <Checkbox disabled={true} active={true} />
            <div className={styles.checkbox__body}>Disabled</div>
          </label>
          {Industry.map(({ nameSection, id }) => (
            <label key={id} className={styles.checkboxesListItem}>
              <Checkbox />
              <div className={styles.checkbox__body}>{nameSection}</div>
            </label>
          ))}
        </div>
      </div>
      <div className={styles.blockCheckboxes}>
        <h2 className={styles.blockCheckboxesTitle}>Company size</h2>
        <div className={styles.blockCheckboxesList}>
          {CompanySize.map(({ nameSection, id }) => (
            <label key={id} className={styles.checkboxesListItem}>
              <Checkbox />
              <div className={styles.checkbox__body}>{nameSection}</div>
            </label>
          ))}
        </div>
      </div>
      <div className={styles.blockInput}>
        <h3 className={styles.blockInputTitle}>City</h3>
        <Input
          isIcon={false}
          className={styles.inputContainer}
          placeholder="Any"
        />
      </div>
      <label className={styles.checkboxesListItem}>
        <Checkbox disabled={false} active={true} />
        <div className={styles.checkbox__body}>Additionally</div>
      </label>
      <Button
        appearance={"secondary"}
        size={"l"}
        className={styles.buttonStyle}
      >
        Reset all
      </Button>
    </aside>
  );
};

export default FiltersCompanies;
