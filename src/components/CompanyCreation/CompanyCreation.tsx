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
import { Industry } from "./CompanyCreationData";
import { CompanyCreationFormTypes } from "./CompanyCreationFormTypes";

const Company: React.FC<CompanyCreationTypes> = ({ companyId }) => {
  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyCreationFormTypes>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<CompanyCreationFormTypes> = (data) =>
    console.log(data);

  const error: SubmitErrorHandler<CompanyCreationFormTypes> = (data) => {
    console.log(data);
  };

  const [logoUrl, setLogoUrl] = useState(LogoEmpty);

  const handleImageError = () => {
    setLogoUrl(LogoEmpty);
  };

  const urlSchema = yup.object().shape({
    url: yup.string().url(),
  });

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;

    urlSchema
      .validate({ url: newUrl })
      .then(() => {
        setLogoUrl(newUrl);
      })
      .catch((err) => {
        console.error(err.errors);
        setLogoUrl(LogoEmpty);
      });
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
                    onChange={handleLogoChange}
                    register={register}
                  />
                </div>
              </div>
              <div className={styles.infromationIndustry}>
                <span className={styles.industryText}>Industry</span>
                <div className={styles.infromationSelect}>
                  <Controller
                    name="type"
                    control={control}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <div>
                          <Select
                            onChange={onChange}
                            objValue={value}
                            data={Industry}
                            placeholder="Any"
                          />
                        </div>
                      );
                    }}
                  />
                </div>
              </div>
            </section>
          </main>
          <aside className={styles.asideCreationLogo}>
            {logoUrl == LogoEmpty || logoUrl == "" ? (
              <Image src={LogoEmpty} priority alt={""} />
            ) : (
              <img src={logoUrl} width={320} />
            )}
            <span className={styles.creationLogoText}>Image link</span>
            <div className={styles.creationLogoInput}>
              <Input
                name="linkLogo"
                placeholder="Insert link"
                onChange={handleLogoChange}
                register={register}
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
    </form>
  );
};

export default Company;
