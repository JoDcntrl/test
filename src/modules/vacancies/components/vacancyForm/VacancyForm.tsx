"use client";
import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form";
import styles from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { vacancyFormSchema } from "../../constants/vacancyFormSchema";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Select from "@/components/Select/Select";
import Check from "@/assets/svgs/Check.svg";
import Checkbox from "@/components/Checkbox/Checkbox";
import { VARIANT } from "@/components/Select/Select.types";
interface ICreateVacancyForm {
  name: string;
  other: string;
  qualification: string;
  experience: string;
  typeOfEmloyment: string;
  incomeLevel: string;
}

export const VacancyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ICreateVacancyForm>({
    resolver: yupResolver(vacancyFormSchema),
  });

  const onSubmit: SubmitHandler<ICreateVacancyForm> = (data) =>
    console.log(data);

  const error: SubmitErrorHandler<ICreateVacancyForm> = (data) => {
    console.log(data);
  };

  const EmploymentType = [
    { value: "Full time", label: "Full time", icon: Check },
    { value: "Remote", label: "Remote", icon: Check },
    { value: "Any", label: "Any", icon: Check },
  ];

  const Remote = [
    { id: 1, nameSection: "Remote", disabled: false, active: false },
  ];

  console.log("errors", errors);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit, error)}>
      <div className={styles.formData}>
        <div className={styles.baseInfo}>
          <h2 className={styles.title}>Basic information</h2>
          <div className={styles.labeledField}>
            <p className={styles.label}>Job title</p>
            <Input
              name="name"
              isIcon={false}
              placeholder="Full-stack Engineer"
              register={register}
              error={errors.name}
              className={styles.field}
            />
          </div>
          <div className={styles.labeledField}>
            <p className={styles.label}>Other</p>
            <div className={styles.fieldWrapper}>
              <Controller
                name="other"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    error={errors.other}
                    variant={VARIANT.BIG}
                    onChange={onChange}
                    objValue={value}
                    data={EmploymentType}
                    placeholder="Others"
                    enteredValueColor="#1B1E27"
                  />
                )}
              />
            </div>
          </div>
          <div className={styles.labeledField}>
            <p className={styles.label}>Qualification</p>
            <div className={styles.fieldWrapper}>
              <Controller
                name="qualification"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    variant={VARIANT.BIG}
                    onChange={onChange}
                    objValue={value}
                    data={EmploymentType}
                    placeholder="Senior"
                    enteredValueColor="#1B1E27"
                    error={errors.qualification}
                  />
                )}
              />
            </div>
          </div>
          <div className={styles.labeledField}>
            <p className={styles.label}>Experience</p>
            <div className={styles.fieldWrapper}>
              <Controller
                name="experience"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    variant={VARIANT.BIG}
                    onChange={onChange}
                    objValue={value}
                    data={EmploymentType}
                    placeholder="1 to 3 years"
                    enteredValueColor="#1B1E27"
                    error={errors.experience}
                  />
                )}
              />
            </div>
          </div>
          <div className={styles.labeledField}>
            <p className={styles.label}>Type of Employment</p>
            <div className={styles.fieldWrapper}>
              <Controller
                name="typeOfEmloyment"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    variant={VARIANT.BIG}
                    onChange={onChange}
                    objValue={value}
                    data={EmploymentType}
                    placeholder="Full-time"
                    enteredValueColor="#1B1E27"
                    error={errors.typeOfEmloyment}
                  />
                )}
              />
            </div>
            <div className={styles.checkboxWrapper}>
              <label className={styles.checkbox}>
                <Checkbox<any>
                  name="remote"
                  nameGroup="remote"
                  data={Remote}
                  register={register}
                />
                <span>Remote</span>
              </label>
            </div>
          </div>
          <div className={styles.labeledField}>
            <p className={styles.label}>Income level</p>
            <div className={styles.fieldWrapper}>
              <Controller
                name="incomeLevel"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    variant={VARIANT.BIG}
                    onChange={onChange}
                    objValue={value}
                    data={EmploymentType}
                    placeholder="from $10,000"
                    enteredValueColor="#1B1E27"
                    error={errors.typeOfEmloyment}
                  />
                )}
              />
            </div>
          </div>
          <Button
            type="submit"
            appearance="secondary"
            size="l"
            className={styles.buttonStyle}
          >
            Submit
          </Button>
        </div>
        <div className={styles.posInfo}></div>
        <div className={styles.settings}></div>
      </div>
      <div className={styles.formSubmits}></div>
    </form>
  );
};
