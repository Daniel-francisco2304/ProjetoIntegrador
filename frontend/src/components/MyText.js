import React from "react";
import { sizeStyles, textStyles, linkStyles } from "./Style/VariantStyle";

function MyText(props) {
    const {
        text,
        title,
        onClick,
        dir,
        style: customStyle,
        size = "md",
        variant = "default",
        link = "none",
        disabled = false,
    } = props;

    const baseStyle = {
        display: "inline-block",
        cursor: disabled ? "pointer" : "default",
        //pointerEvents: disabled ? "none" : "auto",
    };

    const combinedStyle = {
        ...baseStyle,
        ...sizeStyles[size],
        ...textStyles[variant],
        ...linkStyles[link],
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
