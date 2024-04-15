import React from "react";

import Checkbox from "@/components/Checkbox/Checkbox";
import { CompanySize, Industry, Additionally } from "./CompanyFilterData";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

import styles from "./filtersCompanies.module.scss";

const FiltersCompanies = () => (
  <aside className={styles.sectionFilters}>
    <h2 className={styles.filtersTitle}>Filters</h2>
    <div className={styles.blockCheckboxes}>
      <h2 className={styles.blockCheckboxesTitle}>Industry</h2>
      <div className={styles.blockCheckboxesList}>
        <Checkbox nameSection={"IT"} disabled={true} />
        {Industry.map(({ nameSection, id }) => (
          <Checkbox key={id} nameSection={nameSection} disabled={false} />
        ))}
      </div>
    </div>
    <div className={styles.blockCheckboxes}>
      <h2 className={styles.blockCheckboxesTitle}>Company size</h2>
      <div className={styles.blockCheckboxesList}>
        {CompanySize.map(({ nameSection, id }) => (
          <Checkbox key={id} nameSection={nameSection} disabled={false} />
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
    <Checkbox nameSection="Additionally" disabled={false} />
    <Button appearance={"secondary"} size={"l"} className={styles.buttonStyle}>
      Reset all
    </Button>
  </aside>
);

export default FiltersCompanies;
