import classnames from "classnames";

export default function Button({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={classnames(
        "rounded-full text-center text-sm transition duration-300 hover:shadow-md hover:shadow-[#0c66ee]/50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
