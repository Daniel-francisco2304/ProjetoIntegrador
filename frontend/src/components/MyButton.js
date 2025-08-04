import React from "react";
import { variantStyles, sizeStyles, textStyles } from "./Style/VariantStyle";

function MyButton(props) {
    const {
        title,
        onClick,
        type,
        value,
        onChange,
        style: customStyle,
        variant = "default",
        text = "default",
        size = "md",
        disabled = false,
    } = props;

    const baseStyle = {
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        minWidth: "120px",
    };

    const combinedStyle = {
        ...baseStyle,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...textStyles[text],
        ...customStyle,
    };

    return (
        <button
            style={combinedStyle}
            onClick={onClick}
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
        >
            {title}
        </button>
    );
}

export default MyButton;