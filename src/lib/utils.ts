import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...Inputs: ClassValue[]) {
  return twMerge(clsx(Inputs))
}

// lib/utils.ts
// export function cn(...inputs: (string | undefined | null | false)[]) {
//   return inputs.filter(Boolean).join(" ")
// }
