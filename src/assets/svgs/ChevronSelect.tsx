import { DropdownIndicatorProps, components } from "react-select";
import { Chevron } from "./Chevron";

const ChevronSelect: React.FC<DropdownIndicatorProps> = (props) => (
  <components.DropdownIndicator {...props}>
    <Chevron />
  </components.DropdownIndicator>
);

export default ChevronSelect;
