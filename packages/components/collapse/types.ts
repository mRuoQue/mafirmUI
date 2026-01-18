export interface CollapseProps {
  modelValue?: string | string[];
  accordion?: boolean;
  disabled?: boolean;
  onChange?: (value: string | string[]) => void;
}

export interface CollapseItemProps {
  title?: string;
  name?: string;
  disabled?: boolean;
  isActive?: boolean;
  onClick?: (name: string) => void;
}
