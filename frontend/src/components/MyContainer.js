// src/components/MyContainer.js
import React from "react";
import { containerVariantStyles, containerSizeStyles, containerStyleSets } from "./Style/VariantStyle";

function MyContainer(props) {
    const {
        children,
        style: customStyle = {},
        variant = "default",
        styleSet = null,
        size = "md",
        direction = "column",
        justify = "flex-start",
        align = "stretch",
        fullHeight = false
    } = props;

    const baseStyle = {
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        width: "80%",
        marginLeft: "10%",
        marginRight: "10%",
        boxSizing: "border-box",
        height: fullHeight ? "100vh" : "auto",
        ...containerVariantStyles[variant],
        ...containerSizeStyles[size],
        ...(styleSet ? containerStyleSets[styleSet] : {})
    };

    return (
        <div style={{ ...baseStyle, ...customStyle }}>
            {children}
        </div>
    );
}

export default MyContainer;
