import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// this means that the values passed into cn will be gathered into an array called inputs
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
