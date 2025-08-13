import { HTMLAttributes } from "react"

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export function Badge({ className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full  bg-gradient-to-r from-teal-300 to-teal-500 text-white text-xs px-3 py-1 font-semibold ${className}`}
      {...props}
      
    />
  )
}