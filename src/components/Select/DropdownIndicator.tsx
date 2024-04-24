import { DropdownIndicatorProps, components } from "react-select";

import { Chevron } from "@/assets/svgs/Chevron";

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => (
  <components.DropdownIndicator {...props}>
    <Chevron />
  </components.DropdownIndicator>
);

export default DropdownIndicator;
