import classnames from "classnames";

export default function Section({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classnames(
        "relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
