import { CheckboxGroup, Label } from "react-aria-components";
import type {
  CheckboxGroupProps,
  ValidationResult,
} from "react-aria-components";
import { FieldError, Text } from "react-aria-components";
import UniversalCheckbox from "./universal-checkbox";

interface UniversalCheckBoxGroupProps
  extends Omit<CheckboxGroupProps, "children"> {
  children?: React.ReactNode;
  label?: string;
  description?: string;
  checkboxes: { id: number; tourType: string }[];
  errorMessage?: string | ((validation: ValidationResult) => string);
}

const UniversalCheckBoxGroup: React.FC<UniversalCheckBoxGroupProps> = ({
  label,
  description,
  errorMessage,
  children,
  checkboxes,
  ...props
}) => {
  return (
    <CheckboxGroup {...props}>
      {label && <Label>{label}</Label>}
      {children}
      {description && <Text slot='description'>{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      {checkboxes.map(({ tourType, id }) => (
        <UniversalCheckbox key={`${id}${tourType}`} value={tourType}>
          {tourType}
        </UniversalCheckbox>
      ))}
    </CheckboxGroup>
  );
};

export default UniversalCheckBoxGroup;
