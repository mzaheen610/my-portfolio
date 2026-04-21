/* eslint-disable react/prop-types */
import { cloneElement, isValidElement } from "react";

const Button = ({ children, variant = "default", asChild = false, className = "", ...props }) => {
  const baseStyles = "px-6 py-2 rounded-md transition font-medium";
  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
  };
  const composedClassName = `${baseStyles} ${variants[variant]} ${className}`.trim();

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      className: [children.props.className, composedClassName].filter(Boolean).join(" "),
      ...props,
    });
  }

  return (
    <button className={composedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;