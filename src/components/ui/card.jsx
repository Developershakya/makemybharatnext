import React, { forwardRef } from "react";
import { cn } from "@/lib/utils"; // make sure you have this utility function

export function Card({ children }) {
  return (
    <div className="rounded-xl border bg- text-black shadow-md p-4">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="mt-2">{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

export const CardDescription = forwardRef(function CardDescription(
  { className, ...props },
  ref
) {
  return (
    <p ref={ref} className={cn("text-sm text-gray-500", className)} {...props} />
  );
});
CardDescription.displayName = "CardDescription";
