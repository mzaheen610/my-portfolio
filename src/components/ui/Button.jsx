const Button = ({ children, variant = "default" }) => {
    const baseStyles = "px-6 py-2 rounded-md transition font-medium";
    const variants = {
      default: "bg-purple-600 text-white hover:bg-purple-700",
      outline: "border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
    };
  
    return <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>;
  };
  
export default Button;