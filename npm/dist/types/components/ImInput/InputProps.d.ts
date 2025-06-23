export interface InputProps {
    modelValue?: string | number | any;
    size: number;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    type?: string;
    name?: string;
    id?: string;
    class?: string;
    maxlength?: number;
    minlength?: number;
    max?: number;
    min?: number;
    step?: number;
    pattern?: string;
    required?: boolean;
    autocomplete?: string;
    autofocus?: boolean;
    tabindex?: number;
}
