import React from "react";

import CheckboxesBlock from "@/components/CheckboxesBlock/CheckboxesBlock";
import { CompanySize, Industry, Additionally } from "./CompanyFilterData";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

import styles from "./filtersCompanies.module.scss";

const FiltersCompanies = () => (
  <aside className={styles.sectionFilters}>
    <h2 className={styles.filtersTitle}>Filters</h2>
    <CheckboxesBlock data={Industry} title="Industry" />
    <CheckboxesBlock data={CompanySize} title="Company size" />
    <div className={styles.blockInput}>
      <h3 className={styles.blockInputTitle}>City</h3>
      <Input
        isIcon={false}
        className={styles.inputContainer}
        placeholder="Any"
      />
    </div>
    <CheckboxesBlock data={Additionally} title="Additionally" />
    <Button appearance={"secondary"} size={"l"} className={styles.buttonStyle}>
      Reset all
    </Button>
  </aside>
);

export default FiltersCompanies;
