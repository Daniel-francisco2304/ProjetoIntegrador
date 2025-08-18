// src/components/MyContainer.js
import React from "react";
import { containerVariantStyles, containerSizeStyles, } from "./Style/VariantStyle";

function MyContainer(props) {
    const {
        children,
        style: customStyle = {},
        variant = "default",
        size = "md",
        direction = "column",
        justify = "flex-start",
        align = "stretch",
        fullHeight = false
    } = props;

    const baseStyle = {
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        boxSizing: "border-box",
        height: fullHeight ? "100vh" : "auto",
        ...containerVariantStyles[variant],
        ...containerSizeStyles[size],
    };

    return (
        <div style={{ ...baseStyle, ...customStyle }}>
            {children}
        </div>
    );
}

export default MyContainer;
