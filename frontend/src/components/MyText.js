import React from "react";
import { sizeStyles, textStyles } from "./Style/VariantStyle";

function MyText(props) {
    const {
        text,
        title,
        onClick,
        dir,
        style: customStyle,
        size = "md",
        variant = "default",
        disabled = false,
    } = props;

    const baseStyle = {
        display: "inline-block",
   //     cursor: disabled ? "not-allowed" : "pointer",
    };

    const combinedStyle = {
        ...baseStyle,
        ...sizeStyles[size],
        ...textStyles[variant],
        ...customStyle,
    };

    return (
        <span
            style={combinedStyle}
            onClick={onClick}
            title={title}
            dir={dir}
            aria-disabled={disabled}
        >
            {text || props.children}
        </span>
    );
}

export default MyText;
