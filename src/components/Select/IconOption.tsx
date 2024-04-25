import { components } from "react-select";

const IconOption = (props: any) => (
  <components.Option {...props}>
    {props.data.label}
    {props.isSelected && (
      <img src={props.data.icon.src} style={{ width: 20, height: 20 }} />
    )}
  </components.Option>
);

export default IconOption;
