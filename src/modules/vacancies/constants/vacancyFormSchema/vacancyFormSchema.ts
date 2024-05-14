import * as yup from "yup";

export const vacancyFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Enter Name")
    .min(2, "Minimum 2 letters")
    .matches(/^[a-zA-Za-яА-Я]*$/, "Letters only"),
  other: yup
    .string()
    .required("Enter Other")
    .min(2, "Minimum 2 letters")
    .matches(/^[a-zA-Za-яА-Я]*$/, "Letters only"),
  qualification: yup
    .string()
    .required("Enter Qualification")
    .min(2, "Minimum 2 letters")
    .matches(/^[a-zA-Za-яА-Я]*$/, "Letters only"),
  experience: yup
    .string()
    .required("Enter Experience")
    .min(2, "Minimum 2 letters")
    .matches(/^[a-zA-Za-яА-Я]*$/, "Letters only"),
  typeOfEmloyment: yup
    .string()
    .required("Enter typeOfEmloyement")
    .min(2, "Minimum 2 letters")
    .matches(/^[a-zA-Za-яА-Я]*$/, "Letters only"),
  incomeLevel: yup
    .string()
    .required("Enter incomeLevel")
    .min(2, "Minimum 2 letters")
    .matches(/^[a-zA-Za-яА-Я]*$/, "Letters only"),
});
