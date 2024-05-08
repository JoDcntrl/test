import { DropdownIndicatorProps, components } from "react-select";

import { Chevron } from "@/assets/svgs/Chevron";

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
  // const { innerProps } = props;
  // const ariaHidden = innerProps["aria-hidden"];
  // console.log(ariaHidden);
  // props.innerProps["aria-hidden"] = false;
  // console.log(props);
  return (
    <components.DropdownIndicator {...props}>
      <Chevron />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
