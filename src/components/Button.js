import React from "react";
export default function Button({ children, variant = "primary", ...p }) { return <button className={variant === "primary" ? "btn-primary" : "cta"} {...p}>{children}</button> }
