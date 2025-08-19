// components/ui/input.jsx

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef(function Input(
  { className, type, ...props },
  ref
) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-15 w-full rounded-md border border-input bg-background px-3 py-2 text-2xl font-black uppercase text-center shadow-sm placeholder:text-orange-400  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export { Input };
