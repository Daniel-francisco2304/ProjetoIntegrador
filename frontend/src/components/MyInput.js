import React from "react";
import { inputSizeStyles, inputVariantStyles, textStyles } from "./Style/VariantStyle";

function MyInput(props) {
    const {
        type = "text",
        value,
        placeholder,
        onChange,
        onBlur,
        onFocus,
        name,
        id,
        style: customStyle,
        variant = "default", // cor de fundo/borda
        text = "default",    // cor do texto
        size = "md",         // tamanho da fonte/padding
        disabled = false,
    } = props;

    const baseStyle = {
        borderRadius: "4px",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        transition: "0.2s",
        fontFamily: "Arial, sans-serif",
        minHeight: "36px",
    };

    const combinedStyle = {
        ...baseStyle,
        ...inputSizeStyles[size],
        ...inputVariantStyles[variant],
        ...textStyles[text],
        ...customStyle,
        ...(disabled && { opacity: 0.5, pointerEvents: "none" }),
    };

    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            name={name}
            id={id}
            disabled={disabled}
            style={combinedStyle}
        />
    );
}

export default MyInput;
