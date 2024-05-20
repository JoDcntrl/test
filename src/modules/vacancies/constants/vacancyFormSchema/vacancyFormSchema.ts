import * as yup from "yup";

export const vacancyFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Field is required")
    .min(2, "Minimum 2 letters")
    .matches(/^[a-zA-Za-яА-Я]*$/, "Letters only"),
  other: yup.string().required("Field is required"),
  qualification: yup.string().required("Field is required"),
  experience: yup.string().required("Field is required"),
  typeOfEmloyment: yup.string().required("Field is required"),
  incomeLevel: yup
    .string()
    .required("Field is required")
    .min(2, "Minimum 2 symbols"),
  jobDescription: yup
    .string()
    .required("Field is required")
    .max(50, "Maximum 50 letters"),
  requirements: yup
    .string()
    .required("Field is required")
    .max(50, "Maximum 50 letters"),
  responsibilities: yup
    .string()
    .required("Field is required")
    .max(50, "Maximum 50 letters"),
  terms: yup
    .string()
    .required("Field is required")
    .max(50, "Maximum 50 letters"),
  publishingSettings: yup.string().required("Select one of the options"),
});
