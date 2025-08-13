// import { ReactNode } from "react"

// export function Card({ children }: { children: ReactNode }) {
//   return (
//     <div className="rounded-xl border bg- text-black shadow-md p-4">
//       {children}
//     </div>
//   )
// }

// export function CardContent({ children }: { children: ReactNode }) {
//   return <div className="mt-2">{children}</div>
// }

// const CardDescription = React.forwardRef<
//   HTMLParagraphElement,
//   React.HTMLAttributes<HTMLParagraphElement>
// >(({ className, ...props }, ref) => (
//   <p
//     ref={ref}
//     className={cn("text-sm text-muted-foreground", className)}
//     {...props}
//   />
// ));
// CardDescription.displayName = "CardDescription";

// export { Card, CardHeader, CardTitle, CardContent, CardDescription };





import { ReactNode, forwardRef, HTMLAttributes } from "react"
import { cn } from "@/lib/utils" // make sure you have this utility function

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border bg- text-black shadow-md p-4">
      {children}
    </div>
  )
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="mt-2">{children}</div>
}

export function CardHeader({ children }: { children: ReactNode }) {
  return <div className="mb-2">{children}</div>
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold">{children}</h3>
}

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"
