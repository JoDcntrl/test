"use client";

import React, { useEffect, useState } from "react";
import cn from "classnames";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import Input from "@/components/Input/Input";
import Select from "@/components/Select/Select";
import TextArea from "@/components/Textarea/Textarea";
import Button from "@/components/Button/Button";
import { schema } from "./CompanyCreationSchemaYup";
import { city, industry, size } from "./CompanyCreationData";
import { CompanyCreationTypes } from "./CompanyCreation.types";
import { CompanyCreationFormTypes } from "./CompanyCreationFormTypes";

import LogoEmpty from "@/assets/svgs/logoEmpty.svg";
import Question from "@/assets/svgs/Question.png";

import styles from "./companyCreation.module.scss";

const Company: React.FC<CompanyCreationTypes> = () => {
  const [links, setLinks] = useState<{ id: string; value: string }[]>([]);

  const [acitveLogo, setActiveLogo] = useState<boolean>(false);

  const [activeQuestion, setActiveQuestion] = useState<boolean>(false);

  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyCreationFormTypes>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      industry: "IT",
      size: "1 - 50",
      city: "Los-Angeles",
      telegram: "",
    },
  });

  const linkLogoValue = watch("linkLogo");

  useEffect(() => {
    const changeActiveLogo = () => {
      if (linkLogoValue && !errors.linkLogo) {
        setActiveLogo(true);
      } else {
        setActiveLogo(false);
      }
    };
    changeActiveLogo();
  }, [linkLogoValue, errors.linkLogo]);

  const changeActiveQuestion = () => {
    setActiveQuestion((prev) => !prev);
  };

  const addLink = () => {
    setLinks((prev) => [...prev, { id: uuid(), value: "" }]);
  };

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
          <Button
            appearance="primary"
            size="l"
            type="submit"
            className={styles.buttonStyle}
          >
            Create a company
          </Button>
        </h1>
        <div className={styles.wrapperBlockMain}>
          <main className={styles.main}>
            <section className={styles.blockBasicInformation}>
              <h2 className={styles.infromationTitle}>Basic information</h2>
              <div className={styles.infromationName}>
                <span className={styles.nameTitle}>Company name</span>
                <div className={styles.infromationInput}>
                  <Input<CompanyCreationFormTypes>
                    name="companyName"
                    placeholder="Stellar"
                    register={register}
                    error={errors.companyName}
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
                            color="#1B1E27"
                            height="59px"
                            onChange={onChange}
                            objValue={value}
                            data={industry}
                            placeholder="IT"
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
                            placeholder="1 - 50"
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
            <section className={styles.blockContacts}>
              <h2 className={styles.contactsTitle}>Contacts</h2>
              <div className={styles.contactsSelect}>
                <span className={styles.selectTitle}>City</span>
                <div className={styles.selectInput}>
                  <Controller
                    name="city"
                    control={control}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <div>
                          <Select
                            height="59px"
                            color="#1B1E27"
                            onChange={onChange}
                            objValue={value}
                            data={city}
                            placeholder="Los-Angeles"
                          />
                        </div>
                      );
                    }}
                  />
                </div>
              </div>
              <div className={styles.contactsWrapperInput}>
                <span className={styles.inputTitle}>Web site</span>
                <div className={styles.contactsInput}>
                  <Input<CompanyCreationFormTypes>
                    name="webSite"
                    placeholder="stellar.org"
                    register={register}
                    error={errors.webSite}
                  />
                </div>
              </div>
              <div className={styles.contactsWrapperInput}>
                <span className={styles.inputTitle}>Telegram</span>
                <div className={styles.contactsInput}>
                  <Input<CompanyCreationFormTypes>
                    name="telegram"
                    placeholder="t.me/stellar"
                    register={register}
                    error={errors.telegram}
                  />
                </div>
              </div>
              {links.map((link, index) => (
                <div key={link.id} className={styles.contactsWrapperInput}>
                  <div className={styles.contactsInput}>
                    <Input<CompanyCreationFormTypes>
                      name={`link-${index}`}
                      placeholder="Paste link"
                      register={register}
                    />
                  </div>
                </div>
              ))}
              <div className={styles.contactsButton}>
                <Button
                  onClick={addLink}
                  size={"s"}
                  appearance={"ghost"}
                  icon="left"
                >
                  Add a link
                </Button>
              </div>
            </section>
          </main>
          <aside className={styles.asideCreationLogo}>
            {!acitveLogo ? (
              <Image src={LogoEmpty} priority alt={"LogoEmpty"} />
            ) : (
              <img
                src={linkLogoValue}
                width={320}
                height={320}
                alt="Error loading image"
                loading="lazy"
              />
            )}

            <span className={styles.creationLogoText}>Image link</span>
            <div className={styles.creationLogoInput}>
              <Input<CompanyCreationFormTypes>
                name="linkLogo"
                placeholder="Insert link"
                register={register}
                error={errors.linkLogo}
              />
              <Image
                onClick={() => changeActiveQuestion()}
                src={Question}
                priority
                alt={""}
                className={styles.inputQuestion}
              />
              <div
                className={cn(styles.infoQuestion, {
                  [styles.questionActive]: activeQuestion,
                })}
              >
                The logo image must have a width and height of 320 px
              </div>
            </div>
          </aside>
        </div>
      </div>
    </form>
  );
};

export default Company;
