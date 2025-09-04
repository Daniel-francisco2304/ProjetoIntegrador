import React from "react";
import { useState } from "react";

export function MyModal(id) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div>
            {isOpen ? <div></div> : false}
        </div>
    )
}