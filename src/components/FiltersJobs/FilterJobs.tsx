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
import BlockCheckboxesTag from "@/components/BlockCheckboxesTag/BlockCheckboxesTag";
import Radio from "@/components/Radio/Radio";
import Select from "@/components/Select/Select";
import { FilterJobsFormTypes } from "./FilterJobsForm.types";

import styles from "./filterJobs.module.scss";

const FiltersCompanies = () => {
  const methods = useForm<FilterJobsFormTypes>();

  const { errors } = methods.formState;

  const onSubmit: SubmitHandler<FilterJobsFormTypes> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<FilterJobsFormTypes> = (data) => {
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
          <h2 className={styles.blockTitle}>Specialization</h2>
          <div className={styles.listCheckboxesTag}>
            <BlockCheckboxesTag data={Development} nameGroup="development" />
            <BlockCheckboxesTag data={Technical} nameGroup="technical" />
            <BlockCheckboxesTag data={Design} nameGroup="design" />
            <BlockCheckboxesTag data={Other} nameGroup="other" />
          </div>
        </div>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Qualification</h2>
          <div className={styles.blockList}>
            {Qualification.map(({ nameSection, id, disabled }) => (
              <label key={id} className={styles.blockListItem}>
                <Checkbox
                  data={Qualification}
                  name={nameSection}
                  nameGroup="qualification"
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
            <Radio data={Experience} nameGroup="experience" />
          </div>
        </div>
        <div className={styles.blockInput}>
          <h3 className={styles.blockInputTitle}>Employment type</h3>
          <div className={styles.blockInputWrapper}>
            <Controller
              name="type"
              control={methods.control}
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
          <label className={styles.checkbox}>
            <Checkbox name="remote" nameGroup="remote" data={Remote} />
            <span>Remote</span>
          </label>
        </div>
        <div className={styles.blockInput}>
          <h3 className={styles.blockInputTitle}>Company</h3>
          <div className={styles.blockInputWrapper}>
            <Controller
              name="company"
              control={methods.control}
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
            name="city"
            isIcon={false}
            className={styles.inputContainer}
            placeholder="Any"
            required={true}
            error={errors.city}
          />
        </div>
        <div className={styles.blockButtons}>
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
        </div>
      </form>
    </FormProvider>
  );
};

export default FiltersCompanies;
