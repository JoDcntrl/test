import {
  FieldValues,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { number } from "yup";

export interface CardSettingTypes<T extends FieldValues> {
  buttonSale?: boolean;
  nameGroup: Path<T>;
  value: string;
  description: string;
  title: string;
  price: number;
  register: UseFormRegister<T>;
  watch: UseFormWatch<T>;
  numberVacancies: number;
}
