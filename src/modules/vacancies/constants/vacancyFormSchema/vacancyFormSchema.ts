import * as yup from "yup";

export const vacancyFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Enter Name")
    .min(2, "Minimum 2 letters")
    .matches(/^[a-zA-Za-яА-Я]*$/, "Letters only"),
  other: yup
    .string()
    .required("Enter Name")
    .min(2, "Minimum 2 letters")
    .matches(/^[a-zA-Za-яА-Я]*$/, "Letters only"),
});
