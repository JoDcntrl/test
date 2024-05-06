import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "Minimum 2 letters")
    .matches(/^[a-zA-Zа-яА-Я]*$/, "Letters only"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Minimum 2 letters")
    .matches(/^[a-zA-Zа-яА-Я]*$/, "Letters only"),
  eMail: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  telegram: yup
    .string()
    .required("Telegram username is required")
    .matches(
      /^@[A-Za-z0-9_]{5,}$/,
      "Must start with @ and be at least 5 characters long."
    ),
  linkResume: yup
    .string()
    .url("Enter a valid URL")
    .required("Link to resume is required"),
  agree: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});
