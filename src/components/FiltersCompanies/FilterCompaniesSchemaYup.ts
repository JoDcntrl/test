import * as yup from "yup";

export const schema = yup.object().shape({
  city: yup
    .string()
    .required("Enter city")
    .min(2, "Minimum 2 letters")
    .matches(/^[a-zA-Za-яА-Я]*$/, "Letters only"),
  industry: yup.mixed(),
  size: yup.mixed(),
  additionally: yup.mixed(),
});
