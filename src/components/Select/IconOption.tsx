import { components } from "react-select";
import Image from "next/image";

const IconOption = (props: any) => (
  <components.Option {...props}>
    {props.data.label}
    {props.isSelected && (
      <Image
        src={props.data.icon.src}
        alt="image option"
        width={20}
        height={20}
      />
    )}
  </components.Option>
);

export default IconOption;
