"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { cardsVacancies } from "@/components/RegisteredVacancies/RegisteredVacanciesDate";
import VacancyCard from "@/components/VacancyCard/VacancyCard";
import CompanyInfo from "@/components/CompanyInfo/CompanyInfo";
import { cardsCompanies } from "@/components/Companies/CompaniesData";
import { CompanyCreationTypes } from "./CompanyCreation.types";

import { Vector } from "@/assets/svgs/Vector";
import LogoEmpty from "@/assets/svgs/logoEmpty.svg";
import Question from "@/assets/svgs/Question.png";

import styles from "./companyCreation.module.scss";
import Input from "../Input/Input";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { schema } from "./CompanyCreationSchemaYup";
import Button from "../Button/Button";
import Select from "../Select/Select";
import { Industry, size } from "./CompanyCreationData";
import { CompanyCreationFormTypes } from "./CompanyCreationFormTypes";
import TextArea from "../Textarea/Textarea";

const Company: React.FC<CompanyCreationTypes> = () => {
  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyCreationFormTypes>({
    resolver: yupResolver(schema),
    defaultValues: {
      industry: { value: "IT", label: "IT" },
      size: { value: "1 - 50", label: "1 - 50" },
    },
  });

  const onSubmit: SubmitHandler<CompanyCreationFormTypes> = (data) =>
    console.log(data);

  const error: SubmitErrorHandler<CompanyCreationFormTypes> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, error)} className={styles.canvas}>
      <div className={styles.canvasWrapper}>
        <div className={styles.wrapperBlockLinks}>
          <Link className={styles.blockLink} href="/">
            Main
          </Link>
          <span className={styles.blockSlash}>/</span>
          <Link className={styles.blockLink} href="/companies">
            Companies
          </Link>
        </div>
        <h1 className={styles.blockTitle}>
          <span className={styles.blockTitleText}>Company creation</span>
          <Button appearance={"primary"} size={"l"}>
            Create a company
          </Button>
        </h1>
        <div className={styles.wrapperBlockMain}>
          <main className={styles.main}>
            <section className={styles.basicInformation}>
              <h2 className={styles.infromationTitle}>Basic information</h2>
              <div className={styles.infromationName}>
                <span className={styles.nameText}>Company name</span>
                <div className={styles.infromationInput}>
                  <Input
                    name="linkLogo"
                    placeholder="Stellar"
                    register={register}
                    error={errors.linkLogo}
                  />
                </div>
              </div>
              <div className={styles.infromationSelect}>
                <span className={styles.selectTitle}>Industry</span>
                <div className={styles.selectInput}>
                  <Controller
                    name="industry"
                    control={control}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <div>
                          <Select
                            height="59px"
                            color="#1B1E27"
                            onChange={onChange}
                            objValue={value}
                            data={Industry}
                          />
                        </div>
                      );
                    }}
                  />
                </div>
              </div>
              <div className={styles.infromationSelect}>
                <span className={styles.selectTitle}>Industry</span>
                <div className={styles.selectInput}>
                  <Controller
                    name="size"
                    control={control}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <div>
                          <Select
                            color="#1B1E27"
                            height="59px"
                            onChange={onChange}
                            objValue={value}
                            data={size}
                          />
                        </div>
                      );
                    }}
                  />
                </div>
              </div>
              <div className={styles.description}>
                <span className={styles.descriptionTitle}>
                  Company Description
                </span>
                <TextArea<CompanyCreationFormTypes>
                  register={register}
                  name="companyDescription"
                  placeholder="Describe the company's activities"
                />
              </div>
            </section>
          </main>
          <aside className={styles.asideCreationLogo}>
            <Image src={LogoEmpty} priority alt={""} />
            <span className={styles.creationLogoText}>Image link</span>
            <div className={styles.creationLogoInput}>
              <Input
                name="linkLogo"
                placeholder="Insert link"
                register={register}
                error={errors.linkLogo}
              />
              <Image
                src={Question}
                priority
                alt={""}
                className={styles.inputQuestion}
              />
            </div>
          </aside>
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
    </form>
  );
};

export default Company;
