import { parseJSON, isSameYear, format } from 'date-fns'
import { useDark } from '@vueuse/core'

export const isDark = useDark()

export function formatDate(d: string | Date) {
  const date = parseJSON(d)
  if (isSameYear(date, new Date()))
    return format(date, 'MMM d')
  return format(date, 'MMM d, yyyy')
}
