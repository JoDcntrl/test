import * as yup from "yup";

export const schema = yup.object().shape({
  linkLogo: yup.string().url("Link must be a valid URL"),
  companyDescription: yup
    .string()
    .required("Description is required")
    .max(500, "Description must not be longer than 500 characters"),
});
