import React from "react";
import { variantStyles, sizeStyles, textStyles, } from "./Style/VariantStyle";

export function MySelect(props) {
    const {
        name,
        value,
        defaultValue,
        autoComplete,
        autoFocus,
        multiple = false,
        onChangeCapture,
        onChange,
        required = false,
        style: customStyle,
        text = "default",
        variant = 'default',
        size = 'md',
        children
    } = props

    const baseStyle = {
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        minWidth: "60px",
    };

    const combinedStyle = {
        ...baseStyle,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...textStyles[text],
        ...customStyle,
    };

    return (
        <select
            name={name}
            style={combinedStyle}
            value={value}
            onChange={onChange}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            onChangeCapture={onChangeCapture}
            multiple={multiple}
            required={required}
        >
            {children}
        </select>
    )
}
