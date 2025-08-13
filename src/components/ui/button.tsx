import { ButtonHTMLAttributes } from "react"
// import { cn } from "@/lib/utils"  // Optional helper to join classNames

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export function Button({ className, ...props }: Props) {
  return (
    <button
      className={`bg-orange-500 text-white px-4 py-2 rounded ${className}`}
      {...props}
    />
  )
}
