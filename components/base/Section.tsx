import { cn } from "@/lib/utils";

export default function Section({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative mx-auto grid max-w-screen-xl grid-cols-12 gap-x-6 overflow-hidden px-4 sm:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
