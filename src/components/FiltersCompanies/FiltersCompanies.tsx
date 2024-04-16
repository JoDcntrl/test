"use client";

import React from "react";

import Checkbox from "@/components/Checkbox/Checkbox";
import { CompanySize, Industry, Additionally } from "./CompanyFilterData";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

import styles from "./filtersCompanies.module.scss";
import Radio from "../Radio/Radio";


const FiltersCompanies = () => {
  return (
    <form className={styles.sectionFilters}>
      <h2 className={styles.filtersTitle}>Filters</h2>
      <div className={styles.blockCheckboxes}>
        <h2 className={styles.blockCheckboxesTitle}>Industry</h2>
        <div className={styles.blockCheckboxesList}>
          <label className={styles.checkboxesListItem}>
            <Checkbox active={true} disabled={true} />
            <div className={styles.checkbox__body}>Disabled active on</div>
          </label>
          <label className={styles.checkboxesListItem}>
            <Checkbox disabled={true} active={false} />
            <div className={styles.checkbox__body}>Disabled active off</div>
          </label>
          <label className={styles.checkboxesListItem}>
            <Checkbox disabled={false} active={true} />
            <div className={styles.checkbox__body}>Active on</div>
          </label>
          {Industry.map(({ nameSection, id }) => (
            <label key={id} className={styles.checkboxesListItem}>
              <Checkbox name={nameSection} />
              <div className={styles.checkbox__body}>{nameSection}</div>
            </label>
          ))}
        </div>
      </div>
      <div className={styles.blockCheckboxes}>
        <h2 className={styles.blockCheckboxesTitle}>Company size</h2>
        <div className={styles.blockCheckboxesList}>
          <Radio data={CompanySize} activeValue='11 - 50' />
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
    </form>
  );
};

export default FiltersCompanies;
