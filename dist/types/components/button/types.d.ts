export type type = "normal" | "primary" | "success" | "warning" | "danger" | "info";
export type NativeType = "button" | "submit" | "reset";
export type size = "small" | "medium" | "large";
export interface ButtonProps {
    type?: type;
    nativeType?: NativeType;
    size?: size;
    disabled?: boolean;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    autofocus?: boolean;
    onClick?: (event: MouseEvent) => void;
}
