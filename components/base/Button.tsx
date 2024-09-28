import classnames from "classnames";

export default function Button({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={classnames(
        "text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
