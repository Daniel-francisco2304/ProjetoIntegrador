import React from "react";
import { variantStyles, sizeStyles, textStyles } from "./Style/VariantStyle";

function MyText(props) {
    const {
        title,
        text,
        onClick,
        dir,
        style: customStyle,
        variant = "default",
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
        ...sizeStyles[size],
        ...textStyles[text],
        ...customStyle,
    };

    return (
        <text
            style={combinedStyle}
            onClick={onClick}
            title={title}
            disabled={disabled}
            dir={dir}
        >
            {text}
        </text>
    );
}

export default MyText;