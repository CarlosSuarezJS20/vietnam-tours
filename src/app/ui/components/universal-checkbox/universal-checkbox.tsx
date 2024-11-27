import { Checkbox, Label } from "react-aria-components";
import type { CheckboxProps } from "react-aria-components";

interface MyCheckboxProps extends Omit<CheckboxProps, "children"> {
  children?: React.ReactNode;
}

const UniversalCheckbox: React.FC<MyCheckboxProps> = ({
  children,
  ...props
}) => (
  <Checkbox {...props}>
    <div className='checkbox' aria-hidden='true'>
      <svg viewBox='0 0 18 18'>
        <polyline points='1 9 7 14 15 4' />
      </svg>
    </div>
    {children}
  </Checkbox>
);

export default UniversalCheckbox;
