import classnames from "classnames";

export default function Section({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classnames(
        "relative mx-auto grid max-w-screen-xl grid-cols-12 gap-x-6 overflow-hidden px-4 sm:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
