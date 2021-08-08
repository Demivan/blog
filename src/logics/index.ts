import parseJSON from 'date-fns/parseJSON'
import isSameYear from 'date-fns/isSameYear'
import format from 'date-fns/format'
import { useDark } from '@vueuse/core'

export const isDark = useDark()

export function formatDate(d: string | Date) {
  const date = parseJSON(d)
  if (isSameYear(date, new Date()))
    return format(date, 'MMM d')
  return format(date, 'MMM d, YYYY')
}
