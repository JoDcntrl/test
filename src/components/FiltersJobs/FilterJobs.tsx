"use client";

import React from "react";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  SubmitErrorHandler,
  Controller,
} from "react-hook-form";

import Checkbox from "@/components/Checkbox/Checkbox";
import {
  Design,
  Development,
  Experience,
  Other,
  Qualification,
  Technical,
  Company,
  EmploymentType,
  Remote,
} from "./FilterJobsData";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import BlockCheckboxesTag from "../BlockCheckboxesTag/BlockCheckboxesTag";
import Radio from "../Radio/Radio";
import Select from "../Select/Select";
import { FilterJobsFormTypes } from "./FilterJobsForm.types";

import styles from "./filterJobs.module.scss";

const FiltersCompanies = () => {
  const methods = useForm<FilterJobsFormTypes>();

  const onSubmit: SubmitHandler<FilterJobsFormTypes> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<FilterJobsFormTypes> = (data) => {
    for (const obj in data) {
      alert(`Enter value - ${obj}`);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit, error)}
        className={styles.sectionFilters}
      >
        <h2 className={styles.filtersTitle}>Filters</h2>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Specialization</h2>
          <div className={styles.listCheckboxesTag}>
            <BlockCheckboxesTag data={Development} nameGroup="Development" />
            <BlockCheckboxesTag data={Technical} nameGroup="Technical" />
            <BlockCheckboxesTag data={Design} nameGroup="Design" />
            <BlockCheckboxesTag data={Other} nameGroup="Other" />
          </div>
        </div>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Qualification</h2>
          <div className={styles.blockList}>
            {Qualification.map(({ nameSection, id, disabled }) => (
              <label key={id} className={styles.blockListItem}>
                <Checkbox
                  data={Qualification}
                  required={true}
                  name={nameSection}
                  nameGroup="Qualification"
                  disabled={disabled}
                />
                <span>{nameSection}</span>
              </label>
            ))}
          </div>
        </div>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Experience</h2>
          <div className={styles.blockList}>
            <Radio data={Experience} required={true} nameGroup="Experience" />
          </div>
        </div>
        <div className={styles.blockInput}>
          <h3 className={styles.blockInputTitle}>Employment type</h3>
          <div className={styles.blockInputWrapper}>
            <Controller
              name="Employment type"
              control={methods.control}
              rules={{ required: false }}
              render={({ field: { onChange, value } }) => (
                <div>
                  <Select
                    onChange={onChange}
                    objValue={value}
                    data={EmploymentType}
                    placeholder="Any"
                  />
                </div>
              )}
            />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.blockList}>
            <label className={styles.blockListItem}>
              <Checkbox name="Remote" nameGroup={"Remote"} data={Remote} />
              <span>Remote</span>
            </label>
          </div>
        </div>
        <div className={styles.blockInput}>
          <h3 className={styles.blockInputTitle}>Company</h3>
          <div className={styles.blockInputWrapper}>
            <Controller
              name="Company"
              control={methods.control}
              rules={{ required: false }}
              render={({ field: { onChange, value } }) => (
                <div>
                  <Select
                    onChange={onChange}
                    objValue={value}
                    data={Company}
                    placeholder="Choose a company"
                  />
                </div>
              )}
            />
          </div>
        </div>
        <div className={styles.blockInput}>
          <h3 className={styles.blockInputTitle}>City</h3>
          <Input
            name="City"
            isIcon={false}
            className={styles.inputContainer}
            placeholder="Any"
            required={true}
          />
        </div>

        <Button
          type="reset"
          onClick={() => {
            methods.reset();
          }}
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
