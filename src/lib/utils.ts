import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
// 親コンポーネントのテンプレートリテラルによるスタイル記述(tailwind)に子コンポーネントのスタイルをマージする
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
