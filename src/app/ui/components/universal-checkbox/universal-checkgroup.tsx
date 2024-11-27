import { CheckboxGroup, Label } from "react-aria-components";
import type {
  CheckboxGroupProps,
  ValidationResult,
} from "react-aria-components";
import { FieldError, Text } from "react-aria-components";

interface UniversalCheckBoxGroupProps
  extends Omit<CheckboxGroupProps, "children"> {
  children?: React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

const UniversalCheckBoxGroup: React.FC<UniversalCheckBoxGroupProps> = ({
  label,
  description,
  errorMessage,
  children,
  ...props
}) => {
  return (
    <CheckboxGroup {...props}>
      {label && <Label>{label}</Label>}
      {children}
      {description && <Text slot='description'>{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </CheckboxGroup>
  );
};

export default UniversalCheckBoxGroup;
